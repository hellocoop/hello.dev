import React from 'react'
import { useRouter } from 'next/router'
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
  feedback: {
    content: () => <span style={{marginRight: '-5px'}}>Question? Give us feedback</span>
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: "Edit this page on GitHub"
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | hello.dev'
      }
    }
  }
}

export default config
