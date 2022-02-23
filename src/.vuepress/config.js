const { description } = require('../../package')
const { copyCode } = require("vuepress-plugin-copy-code2");

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

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: 'https://cdn.hello.coop/images/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#303030' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    contributors: false,
    darkMode: false,
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    locales: {
      '/': {
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
            text: 'Console',
            link: 'https://console.hello.dev'
          }
        ],
        sidebar: {
          '/documentation/': [
            {
              text: 'Documentation',
              collapsible: false,
              children: [
                '/documentation/README.md',
                '/documentation/using-hello.md',
                '/documentation/hello-scopes.md',
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
    copyCode({
       showInMobile: true
    })
  ],

  markdown: {
    code: {
      lineNumbers: false
    }
  }
}
