import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

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
  head: null,
  useNextSeoProps() {
    const { asPath } = useRouter()
    const description = useConfig().frontMatter.description || 'hello.dev'

    if (asPath !== '/') {
      return {
        description,
        titleTemplate: '%s | hello.dev',
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: 'https://hello.dev',
          site_name: 'hello.dev',
          description,
        },
        twitter: {
          handle: '@hellocoop',
          site: '@hellocoop',
          cardType: 'summary_large_image',
        }
      }
    }
  }
}

export default config
