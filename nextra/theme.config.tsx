import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>hello.dev</span>,
  darkMode: false,
  docsRepositoryBase: 'https://github.com/hellocoop/hello.dev',
  footer: {
    text: '',
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: "Edit this page on GitHub ↗"
  }
}

export default config
