import "./globals.css"
import Script from 'next/script'

export const metadata = {
  title: {
    template: '%s | hello.dev',
    default: 'hello.dev',
  },
  description: 'Hellō gives you login and registration in minutes, not hours, days or weeks.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hello.dev',
    siteName: 'hello.dev',
    images: [
      {
        url: 'https://cdn.hello.coop/images/mockup-light.png',
        type: 'image/png',
        width: 512,
        height: 583,
      },
    ],
  },
  twitter: {
    site: '@hellocoop',
    card: 'summary_large_image',
    images: ['https://cdn.hello.coop/images/mockup-light.png'],
  },
  icons: [
    { url: 'https://cdn.hello.coop/images/dev-favicon-light.png', media: '(prefers-color-scheme: light)' },
    { url: 'https://cdn.hello.coop/images/dev-favicon-dark.png', media: '(prefers-color-scheme: dark)' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://cdn.hello.coop/css/hello-btn.css" rel="stylesheet" />
        <Script defer data-domain="hello.dev" src="https://plausible.io/js/script.js" strategy="afterInteractive" />
      </head>
      <body>
        {children}
        <Script src="https://cdn.hello.coop/js/hello-dev-wc-footer.js" strategy="lazyOnload" />
        <Script src="https://cdn.hello.coop/js/join-slack-community.js" strategy="lazyOnload" />
        <wc-footer />
      </body>
    </html>
  )
}
