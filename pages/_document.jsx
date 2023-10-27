import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://cdn.hello.coop/css/hello-btn.css" rel="stylesheet" />
          <script src="https://cdn.hello.coop/js/hello-dev-wc-footer.js"/>
          <script src="https://cdn.hello.coop/js/join-slack-community.js"/>
          <script defer data-domain="hello.dev" src="https://plausible.io/js/script.js"/>
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