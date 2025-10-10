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

turndownService.addRule('removeBreadcrumbs', {
  filter: function (node) {
    return node.className && node.className.includes('nextra-breadcrumb');
  },
  replacement: function () {
    return '';
  }
});

turndownService.addRule('removeNavigation', {
  filter: function (node) {
    // Remove navigation elements with specific classes that indicate prev/next navigation
    return node.className && (
      node.className.includes('nx-mb-8') && 
      node.className.includes('nx-flex') && 
      node.className.includes('nx-items-center') && 
      node.className.includes('nx-border-t')
    );
  },
  replacement: function () {
    return '';
  }
});

turndownService.addRule('removeTabs', {
  filter: function (node) {
    // Remove tab navigation elements
    return node.className && (
      node.className.includes('nx-mt-4') && 
      node.className.includes('nx-flex') && 
      node.className.includes('nx-w-max') && 
      node.className.includes('nx-min-w-full') && 
      node.className.includes('nx-border-b') && 
      node.className.includes('nx-pb-px') &&
      node.getAttribute('role') === 'tablist'
    );
  },
  replacement: function () {
    return '';
  }
});

turndownService.addRule('convertCardsToBullets', {
  filter: function (node) {
    return node.className && node.className.includes('nextra-cards');
  },
  replacement: function (content, node) {
    // Convert card links to bullet points and clean up duplicated text
    const links = content.match(/\[([^\]]+)\]\(([^)]+)\)/g);
    if (links) {
      return links.map(link => {
        // Clean up duplicated text in link labels
        let cleanLink = link
          .replace(/OpenIDOpenID/g, 'OpenID')
          .replace(/ExpressExpress/g, 'Express')
          .replace(/FastifyFastify/g, 'Fastify')
          .replace(/Next\.jsNext\.js/g, 'Next.js')
          .replace(/WordPressWordPress/g, 'WordPress')
          .replace(/ReactReact/g, 'React')
          .replace(/SvelteSvelte/g, 'Svelte')
          .replace(/Vue\.jsVue/g, 'Vue.js')
          .replace(/SvelteKitSvelteKit/g, 'SvelteKit')
          .replace(/RemixRemix/g, 'Remix')
          .replace(/Nuxt\.jsNuxt/g, 'Nuxt.js');
        return `- ${cleanLink}`;
      }).join('\n') + '\n\n';
    }
    return content;
  }
});

turndownService.addRule('convertTables', {
  filter: 'table',
  replacement: function (content, node) {
    const rows = node.querySelectorAll('tr');
    if (rows.length === 0) return '';
    
    let markdown = '';
    
    // Process each row
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const cells = row.querySelectorAll('td, th');
      const rowData = [];
      
      for (let j = 0; j < cells.length; j++) {
        const cell = cells[j];
        // Get cell content and clean it up
        let cellContent = cell.textContent.trim();
        // Remove extra whitespace and newlines
        cellContent = cellContent.replace(/\s+/g, ' ');
        rowData.push(cellContent);
      }
      
      if (i === 0) {
        // Header row
        markdown += `| ${rowData.join(' | ')} |\n`;
        markdown += `| ${rowData.map(() => '---').join(' | ')} |\n`;
      } else {
        // Data row
        markdown += `| ${rowData.join(' | ')} |\n`;
      }
    }
    
    return markdown + '\n';
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
      .replace(/\\([*_~`#])/g, '$1') // Remove unnecessary escaping
      .replace(/\[\]\(#[^)]+\)/g, '') // Remove anchor links from headings
      .replace(/ \(opens in a new tab\)/g, '') // Remove "(opens in a new tab)" from links

    
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
 * Generate llms.txt file with documentation links in list format
 */
function generateLLMSTxt(markdownFiles) {
  const baseUrl = 'https://www.hello.dev/markdown/docs';
  
  // Define the documentation structure with descriptions
  const docStructure = [
    { name: 'Overview', path: 'docs.md', desc: 'Complete documentation overview' },
    { name: 'Getting Started', path: 'docs/getting-started.md', desc: 'Quick start guide' },
    { name: 'Comparison', path: 'docs/comparison.md', desc: 'Feature comparison with other providers' },
    { name: 'Roadmap', path: 'docs/roadmap.md', desc: 'Development roadmap and upcoming features' },
    { name: 'Mockin', path: 'docs/mockin.md', desc: 'Mocking and testing tools' },
    { name: 'Quickstarts', path: 'docs/quickstarts.md', desc: 'Framework-specific integration guides' },
    { name: 'Express.js', path: 'docs/quickstarts/express.md', desc: 'Express integration' },
    { name: 'Fastify', path: 'docs/quickstarts/fastify.md', desc: 'Fastify integration' },
    { name: 'Next.js', path: 'docs/quickstarts/nextjs.md', desc: 'Next.js integration' },
    { name: 'WordPress', path: 'docs/quickstarts/wordpress.md', desc: 'WordPress integration' },
    { name: 'APIs Overview', path: 'docs/apis.md', desc: 'API documentation overview' },
    { name: 'Wallet API', path: 'docs/apis/wallet.md', desc: 'Wallet API reference' },
    { name: 'Admin API', path: 'docs/apis/admin.md', desc: 'Admin API reference' },
    { name: 'Quickstart API', path: 'docs/apis/quickstart.md', desc: 'Quickstart API reference' },
    { name: 'Invite API', path: 'docs/apis/invite.md', desc: 'Invite API reference' },
    { name: 'Web Client API', path: 'docs/apis/web-client.md', desc: 'Web client API reference' },
    { name: 'OIDC Overview', path: 'docs/oidc.md', desc: 'OpenID Connect documentation' },
    { name: 'OIDC Config', path: 'docs/oidc/config.md', desc: 'OIDC configuration' },
    { name: 'OIDC Device Flow', path: 'docs/oidc/device.md', desc: 'Device authorization flow' },
    { name: 'OIDC Errors', path: 'docs/oidc/errors.md', desc: 'Error handling and codes' },
    { name: 'OIDC Request', path: 'docs/oidc/request.md', desc: 'Request parameters' },
    { name: 'OIDC Response', path: 'docs/oidc/response.md', desc: 'Response formats' },
    { name: 'OIDC Token', path: 'docs/oidc/token.md', desc: 'Token management' },
    { name: 'OIDC Unsupported', path: 'docs/oidc/unsupported.md', desc: 'Unsupported features' },
    { name: 'OIDC Verification', path: 'docs/oidc/verification.md', desc: 'Token verification' },
    { name: 'SDKs Overview', path: 'docs/sdks.md', desc: 'SDK documentation overview' },
    { name: 'React SDK', path: 'docs/sdks/react.md', desc: 'React SDK documentation' },
    { name: 'Next.js SDK', path: 'docs/sdks/nextjs.md', desc: 'Next.js SDK documentation' },
    { name: 'Express SDK', path: 'docs/sdks/express.md', desc: 'Express SDK documentation' },
    { name: 'Fastify SDK', path: 'docs/sdks/fastify.md', desc: 'Fastify SDK documentation' },
    { name: 'Svelte SDK', path: 'docs/sdks/svelte.md', desc: 'Svelte SDK documentation' },
    { name: 'Vue.js SDK', path: 'docs/sdks/vue.md', desc: 'Vue.js SDK documentation' },
    { name: 'SDK Config', path: 'docs/sdks/config.md', desc: 'SDK configuration' },
    { name: 'SDK Environment', path: 'docs/sdks/environment.md', desc: 'Environment setup' },
    { name: 'SDK Helper', path: 'docs/sdks/helper.md', desc: 'Helper functions' },
    { name: 'SDK Quickstart', path: 'docs/sdks/quickstart.md', desc: 'SDK quickstart guide' },
    { name: 'SDK FAQs', path: 'docs/sdks/faqs.md', desc: 'Frequently asked questions' },
    { name: 'Buttons', path: 'docs/buttons.md', desc: 'Login button implementation' },
    { name: 'Scopes', path: 'docs/scopes.md', desc: 'Available user data scopes' },
    { name: 'Admin MCP', path: 'docs/admin-mcp.md', desc: 'Model Context Protocol server' }
  ];

  let content = `# Hello.dev - AI Agent Documentation Guide

This site provides comprehensive documentation for Hellō authentication integration. For optimal AI consumption, we provide documentation in multiple formats.

## 🤖 For AI Agents & Crawlers

### Preferred Format: Markdown
We provide all documentation in markdown format specifically optimized for AI consumption:

**Base URL:** \`https://www.hello.dev/markdown/docs/\`

## Docs

`;

  // Add documentation links in list format
  docStructure.forEach(doc => {
    content += `- [${doc.name}](${baseUrl}/${doc.path}): ${doc.desc}\n`;
  });

  content += `
### Content Freshness
- All markdown files are automatically generated from the latest HTML documentation
- Content is updated whenever the source documentation changes
- Files are regenerated via automated GitHub workflows

### Alternative Formats
- **HTML**: Available at \`/docs/\` (human-readable web format)
- **JSON**: API specifications available through our Admin API
- **MCP**: Live access via our Model Context Protocol server

## 🔗 Related Resources

- **MCP Server**: For live API access, see [MCP documentation](${baseUrl}/docs/admin-mcp.md)
- **API Playground**: Interactive testing at [console.hello.coop](https://console.hello.coop)
- **GitHub**: Source code at [github.com/hellocoop](https://github.com/hellocoop)

## 📞 Support

For questions about AI access or documentation:
- Email: support@hello.coop
- GitHub Issues: [hellocoop/hello.dev](https://github.com/hellocoop/hello.dev)

---

*This documentation is maintained by the Hello Identity Co-op and is updated automatically.*
`;

  // Write to S3 directory only
  const s3Path = path.join(__dirname, '..', 'S3', 'llms.txt');
  
  try {
    fs.writeFileSync(s3Path, content, 'utf8');
    console.log('✓ Generated llms.txt with list format');
  } catch (error) {
    console.error('Error generating llms.txt:', error.message);
  }
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
  
  // Generate llms.txt file with list format
  generateLLMSTxt(files);
  
  // Update AI sitemap with current timestamp
  await updateAISitemap(files);
}

if (import.meta.url === 'file://' + process.argv[1]) {
  main().catch(console.error);
}

export { convertHtmlToMarkdown, findHtmlFiles, extractMainContent, updateAISitemap }; 