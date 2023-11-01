const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true
})

module.exports = withNextra({
  output: 'export',
  distDir: 'S3',
  swcMinify: true,
  trailingSlash: true, //https://github.com/shuding/nextra/issues/2492#issuecomment-1783421703
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
