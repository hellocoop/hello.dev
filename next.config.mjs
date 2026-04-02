import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
})

const isProd = process.env.NODE_ENV === 'production'

export default withNextra({
  ...(isProd && { output: 'export', distDir: 'S3' }),
  trailingSlash: true,
  images: {
    unoptimized: true
  }
})
