import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>hello.dev</span>,
  darkMode: false,
  docsRepositoryBase: 'https://github.com/hellocoop/hello.dev',
  footer: {
    text: 'Nextra Docs Template',
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: "Propose changes to this page ↗"
  }, 
  feedback: {
    content: null
  }
}

export default config
