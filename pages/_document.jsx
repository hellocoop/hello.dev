import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://cdn.hello.coop/images/dev-favicon-light.png" rel="icon" media="(prefers-color-scheme: light)"/>
          <link href="https://cdn.hello.coop/images/dev-favicon-dark.png" rel="icon" media="(prefers-color-scheme: dark)"/>
          <link href="https://cdn.hello.coop/css/hello-btn.css" rel="stylesheet" />
          <script src="https://cdn.hello.coop/js/hello-dev-wc-footer.js"/>
          <script src="https://cdn.hello.coop/js/join-slack-community.js"/>
          <script defer data-domain="hello.dev" src="https://plausible.io/js/script.js"/>
          <meta name="description" content="Hellō is an OpenID Connect Provider that simplifies user registration and login, allowing you to provide all the choices your user's may want in hours instead of days or weeks."></meta>
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