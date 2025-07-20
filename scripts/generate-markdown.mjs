#!/usr/bin/env node

/**
 * Generate markdown files from built HTML for MCP server consumption
 * This runs after the site is built and converts HTML to markdown
 */

import TurndownService from 'turndown';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const OUT_DIR = path.join(__dirname, '..', 'out'); // Next.js static export directory
const S3_DIR = path.join(__dirname, '..', 'S3'); // Current S3 build directory
const MARKDOWN_DIR = path.join(__dirname, '..', 'S3', 'markdown', 'docs'); // Output to S3 for sync

// Configure turndown for better markdown conversion
const turndownService = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced',
  emDelimiter: '*'
});

// Add custom rules for better conversion
turndownService.addRule('callouts', {
  filter: ['div'],
  replacement: function (content, node) {
    // Convert Nextra callouts to markdown blockquotes
    if (node.className && node.className.includes('callout')) {
      const type = node.className.includes('warning') ? '⚠️ Warning:' : 'ℹ️ Info:';
      return `> **${type}** ${content}\n\n`;
    }
    return content;
  }
});

turndownService.addRule('removeScripts', {
  filter: ['script', 'style', 'nav', 'header', 'footer'],
  replacement: function () {
    return '';
  }
});

/**
 * Extract main content from HTML
 */
function extractMainContent(html) {
  // Remove everything before main content
  let content = html;
   
  // Try to find main content area
  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    content = mainMatch[1];
  } else {
    // Fallback: look for article or content div
    const articleMatch = content.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
    if (articleMatch) {
      content = articleMatch[1];
    }
  }
  
  return content;
}

/**
 * Convert HTML file to markdown
 */
function convertHtmlToMarkdown(htmlPath, outputPath) {
  try {
    console.log(`Converting ${path.basename(htmlPath)}...`);
    
    const html = fs.readFileSync(htmlPath, 'utf8');
    const mainContent = extractMainContent(html);
    const markdown = turndownService.turndown(mainContent);
    
    // Clean up the markdown
    let cleanMarkdown = markdown
      .replace(/\n{3,}/g, '\n\n') // Remove excessive newlines
      .replace(/^\s+|\s+$/g, '') // Trim whitespace
      .replace(/\\([*_~`#])/g, '$1'); // Remove unnecessary escaping
    
    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    fs.mkdirSync(outputDir, { recursive: true });
    
    // Write markdown file
    fs.writeFileSync(outputPath, cleanMarkdown, 'utf8');
    
    console.log(`✓ Created ${path.relative(process.cwd(), outputPath)}`);
    return true;
  } catch (error) {
    console.error(`Error converting ${htmlPath}:`, error.message);
    return false;
  }
}

/**
 * Find HTML files to convert
 */
function findHtmlFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir, relativePath = '') {
    if (!fs.existsSync(currentDir)) return;
    
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      const relPath = path.join(relativePath, entry.name);
      
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        // Only process docs-related directories
        if (relPath.includes('docs') || relativePath.includes('docs')) {
          scanDirectory(fullPath, relPath);
        }
      } else if (entry.name === 'index.html' && relPath.includes('docs')) {
        files.push({
          htmlPath: fullPath,
          relativePath: relPath.replace(/\/index\.html$/, '') || 'index'
        });
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

/**
 * Update AI sitemap with current timestamp
 */
async function updateAISitemap(markdownFiles) {
  const sitemapPath = path.join(__dirname, '..', 'public', 'ai-sitemap.xml');
  const currentDate = new Date().toISOString();
  
  // Priority mapping based on file importance
  const getPriority = (file) => {
    if (file.includes('docs.md')) return '1.0';
    if (file.includes('getting-started.md') || file.includes('quickstarts.md')) return '0.9';
    if (file.includes('quickstarts/') || file.includes('buttons.md') || file.includes('scopes.md') || file.includes('apis/')) return '0.8';
    if (file.includes('sdks/') || file.includes('mcp.md')) return '0.7';
    return '0.6';
  };

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- AI-Friendly Documentation Sitemap -->
  <!-- This sitemap specifically lists markdown versions of documentation -->
  <!-- for better AI agent consumption -->
  
`;

  // Add URLs for key markdown files
  const keyFiles = markdownFiles.filter(file => 
    file.includes('docs.md') || 
    file.includes('getting-started.md') || 
    file.includes('quickstarts') || 
    file.includes('buttons.md') || 
    file.includes('scopes.md') || 
    file.includes('apis/') || 
    file.includes('mcp.md') || 
    file.includes('sdks/')
  ).sort();

  for (const file of keyFiles) {
    const url = `https://www.hello.dev/markdown/docs/${file}`;
    const priority = getPriority(file);
    
    sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>${priority}</priority>
  </url>
  
`;
  }

  sitemap += `</urlset>`;

  try {
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    console.log('✓ Updated AI sitemap with current timestamps');
  } catch (error) {
    console.warn('⚠️  Could not update AI sitemap:', error.message);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🔄 Converting HTML files to Markdown...');
  
  // Determine source directory (try both out/ and S3/)
  let sourceDir = OUT_DIR;
  if (!fs.existsSync(OUT_DIR) && fs.existsSync(S3_DIR)) {
    sourceDir = S3_DIR;
    console.log('📂 Using S3 directory as source');
  } else if (!fs.existsSync(OUT_DIR)) {
    console.error('❌ No built files found. Run `npm run build` first.');
    process.exit(1);
  }
  
  console.log('📂 Source:', sourceDir);
  console.log('📂 Output:', MARKDOWN_DIR);
  
  // Find HTML files to convert
  const htmlFiles = findHtmlFiles(sourceDir);
  
  if (htmlFiles.length === 0) {
    console.log('⚠️  No HTML files found to convert');
    return;
  }
  
  console.log(`Found ${htmlFiles.length} HTML files to convert`);
  
  // Convert files
  let converted = 0;
  for (const { htmlPath, relativePath } of htmlFiles) {
    const markdownPath = path.join(MARKDOWN_DIR, relativePath + '.md');
    if (convertHtmlToMarkdown(htmlPath, markdownPath)) {
      converted++;
    }
  }
  
  console.log(`✅ Successfully converted ${converted}/${htmlFiles.length} files`);
  
  // List generated files
  const files = [];
  function collectFiles(dir, relativePath = '') {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relPath = path.join(relativePath, entry.name);
      
      if (entry.isDirectory()) {
        collectFiles(fullPath, relPath);
      } else if (entry.name.endsWith('.md')) {
        files.push(relPath);
      }
    }
  }
  
  collectFiles(MARKDOWN_DIR);
  console.log('📊 Generated markdown files:');
  files.sort().forEach(file => console.log('   -', file));
  
  // Update AI sitemap with current timestamp
  await updateAISitemap(files);
}

if (import.meta.url === 'file://' + process.argv[1]) {
  main().catch(console.error);
}

export { convertHtmlToMarkdown, findHtmlFiles, extractMainContent, updateAISitemap }; 