export default {
  '*': {
    theme: {
      footer: false,
      timestamp: false,
    },
  },
  index: {
    title: 'Home',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'full',
      footer: false,
      timestamp: false,
      toc: false,
      sidebar: false,
      breadcrumb: false,
      pagination: false,
      typesetting: 'default',
    },
  },
  docs: {
    title: 'Documentation',
    type: 'page',
    items: {
      index: 'Overview',
      'getting-started': 'Getting Started',
      quickstarts: 'Quickstarts',
      buttons: 'Hellō Buttons',
      scopes: 'Hellō Scopes & Claims',
      sdks: 'SDK References',
      apis: 'API References',
      oidc: 'OpenID Connect',
      mockin: 'Hellō Mockin',
      'admin-mcp': 'Admin MCP Server',
      comparison: 'Hellō vs ___',
      roadmap: 'Roadmap',
    },
  },
  faqs: {
    title: 'FAQs',
    type: 'page',
  },
  pricing: {
    title: 'Pricing',
    type: 'page',
  },
  blog: {
    title: 'Blog',
    type: 'page',
    href: 'https://blog.hello.coop/',
  },
  console: {
    title: 'Console',
    type: 'page',
    href: 'https://console.hello.coop/',
  },
  playground: {
    title: 'Playground',
    type: 'page',
    href: 'https://playground.hello.dev/',
  },
}
