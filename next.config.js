const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true
})

module.exports = withNextra({
  output: 'export',
  images: {
    unoptimized: true
  }
  // redirects: () => {
  //   return [
  //     {
  //       source: "/docs",
  //       destination: "/docs/overview",
  //       statusCode: 301,
  //     }
  //   ]
  // }
})
