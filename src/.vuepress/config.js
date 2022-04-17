const { description } = require('../../package')
const path = require('path');

module.exports = {
  // theme: 'default-prefers-color-scheme',
  dest: './S3/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'hello.dev',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  templateDev: path.join(__dirname, 'templates', 'index.build.html'),
  templateBuild: path.join(__dirname, 'templates', 'index.build.html'),

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: 'https://cdn.hello.coop/images/dev-favicon-dark.png' }],
    ['meta', { name: 'theme-color', content: '#303030' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  
  bundler:
    // specify bundler via environment variable
    process.env.DOCS_BUNDLER ??
    // use vite by default
    '@vuepress/vite',
    
  themeConfig: {
    docsRepo: 'hellocoop/www.hello.dev',
    docsBranch: 'main',
    editLinkPattern: ':repo/edit/:branch/src/:path',
    lastUpdated: false,
    contributors: false,
    darkMode: false,
    repo: '',
    docsDir: '',
    sidebarDepth: 2,
    locales: {
      '/': {
        editLinkText: 'Propose changes to this page',
        navbar: [
          {
            text: 'Documentation',
            link: '/documentation/',
          },
          {
            text: 'FAQs',
            link: '/faqs/'
          },
          {
            text: 'Pricing',
            link: '/pricing/'
          },
          {
            text: 'Console',
            link: 'https://console.hello.dev'
          },
          {
            text: 'Playground',
            link: 'https://playground.hello.dev'
          }
        ],
        sidebar: {
          '/documentation/': [
            {
              text: 'Documentation',
              collapsible: false,
              children: [
                '/documentation/README.md',
                '/documentation/getting-started.md',
                '/documentation/integrating-hello.md',
                '/documentation/hello-platforms.md',
                '/documentation/hello-claims.md',
                '/documentation/errors.md',
              ],
            },
          ],
          '/faqs/': [
            {
              text: 'FAQs',
              collapsible: false
            },
          ],
        }
      },
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['vuepress-plugin-vuepress2.x-code-copy', {
      selector: ['div[class*="language-"] pre', '.copy-btn'],
      align: 'top',
      color: 'white',
      backgroundColor: '#808080',
      successText: null
    }],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],

  markdown: {
    code: {
      lineNumbers: false
    }
  }
}
