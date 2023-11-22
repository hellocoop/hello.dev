import React from 'react'
import Document, { Html, Head, Main, NextScript, Script } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://cdn.hello.coop/images/dev-favicon-light.png" rel="icon" media="(prefers-color-scheme: light)"/>
          <link href="https://cdn.hello.coop/images/dev-favicon-dark.png" rel="icon" media="(prefers-color-scheme: dark)"/>
          <link href="https://cdn.hello.coop/css/hello-btn.css" rel="stylesheet" />
          <Script src="https://cdn.hello.coop/js/hello-dev-wc-footer.js"/>
          <Script src="https://cdn.hello.coop/js/join-slack-community.js"/>
          <script defer data-domain="hello.dev" src="https://plausible.io/js/script.js"/>
          <meta name="description" content="Hellō gives you login and registration in minutes, not hours, days or weeks."></meta>
          <meta property="og:image" content="https://cdn.hello.coop/images/mockup-light.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="583" />
          <meta name="twitter:image" content="https://cdn.hello.coop/images/mockup-light.png" />
          <meta name="twitter:image:type" content="image/png" />
          <meta name="twitter:image:width" content="512" />
          <meta name="twitter:image:height" content="583" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <wc-footer/>
        </body>
      </Html>
    );
  }
}

export default MyDocument