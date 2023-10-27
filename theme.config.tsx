import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span className="font-semibold text-xl">hello.dev</span>,
  darkMode: false,
  docsRepositoryBase: 'https://github.com/hellocoop/hello.dev',
  sidebar: {
    defaultMenuCollapseLevel: 1 //sidebar items collapsed by default
  },
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
