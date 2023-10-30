const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true
})

module.exports = withNextra({
  output: 'export',
  distDir: 'S3',
  swcMinify: true,
  images: {
    // https://stackoverflow.com/a/74752466/9747630
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
