Documentation[SDK References](/docs/sdks/)Next.js

# Next.js

> **ℹ️ Info:** 

Check out our [Hellō Next.js Sample (opens in a new tab)](https://github.com/hellocoop/hello-nextjs-sample) where you will be logging in with [Hellō (opens in a new tab)](https://hello.coop/) in less than a minute.

> **ℹ️ Info:** 

Follow the [Next.js Quickstart](/docs/quickstarts/nextjs/) directions to add Hellō to your application in minutes.

## Setup[](#setup)

Following are the steps required to setup this package:

### 1\. Package Installation[](#1-package-installation)

npmpnpmyarnbun

```
npm i @hellocoop/nextjs
```

Hellō Quickstart will perform steps 2 - 5 for you

App Router (Recommended)Pages Router

```
npx @hellocoop/quickstart@latest --nextjs_app_router
```

### 2\. `HELLO_COOKIE_SECRET`[](#2-hello_cookie_secret)

The environment variable `HELLO_COOKIE_SECRET` must be set to 64 char (32 byte) random hex string is required to encrypt cookies used by this package. This can be in `.env.local` for local development.

You can generate new values with:

```
node -e "console.log(crypto.randomBytes(32).toString('hex'))"
```

Remember to set a unique `HELLO_COOKIE_SECRET` in each of your deployed environments.

See [Environment Vars](/docs/sdks/environment/) for additional values that can be set.

The `.env.local` file should not be checked into your repository, and should be in your `.gitignore` file.

### 3\. `client_id`[](#3-client_id)

If not using Hellō Quickstart, you will need to create an application at the [Hellō Developer Console (opens in a new tab)](https://console.hello.coop/) and get a `client_id`.

### 4\. `hello.config.js`[](#4-helloconfigjs)

The convention is to create a `hello.config.js` file in the root of your project for configuration. This file is imported into the `hellocoop.js` file and passed to the `pageAuth()` function for configuration. Below is a basic configuration file. See for additional configuration.

```
const config = {
    client_id: 'your-client_id-here'
}
module.exports = config
```

This file should be checked into your repository.

See [hello.config.js](/docs/sdks/config/) for additional configuration.

### 5\. API Route[](#5-api-route)

The default route is `/api/hellocoop`, which should not conflict with any existing route. There is one endpoint for all functionality. Query parameters (`login`,`logout`,`auth`) are used for routing within the package. With configuration at the project root in `hello.config.js`, the API route is handled by:

App Router (Recommended)Pages Router./app/api/hellocoop/route.js

```
import config from '../../../hello.config'
import { appAuth } from '@hellocoop/nextjs'
export const { GET } = appAuth(config)
```

### 6\. Image Component Config[](#6-image-component-config)

To use the [`Image Component` (opens in a new tab)](https://nextjs.org/docs/pages/api-reference/components/image) to display profile pictures add the Hellō and Gravatar `domains` to the `images` section of your `next.config.js` file:

next.config.js

```
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.hello.coop'
          },
          {
            protocol: 'https',
            hostname: 'pictures.hello.coop'
          },
          {
            protocol: 'https',
            hostname: 'gravatar.com'
          }
        ]
    }
}
```

### 7\. Hellō Button Stylesheet[](#7-hellō-button-stylesheet)

App Router (Recommended)Pages Router

To provide the styling for Hellō buttons, add the below code to the `<Head>` section of your `_document.tsx` or `_document.jsx` file in the `pages` directory:

app/layout.js or app/layout.ts

```
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.hello.coop/css/hello-btn.css"/>
      </head>
    </html>
  );
}
```

Here is a summary of setup:

```
project-directory/
├─ .env.local           2. HELLO_COOKIE_SECRET
├─ hello.config.js      3. client_id
├─ next.config.js       6. Image Component Config
└─ app/
  ├─ layout.js          7. Hellō Button Stylesheet
  └─ api/  
    └─ hellocoop     
      └─ route.js       5. API Route 
```

## Buttons[](#buttons)

The following buttons are available:

```
import {
  ContinueButton, 
  LoginButton, 
  UpdateProfileButton
} from '@hellocoop/nextjs/react'
```

> Note they are in `@hellocoop/nextjs/react`

See the [SDK Reference | React](/docs/sdks/react/) for details.

## Components[](#components)

The following React components are available:

```
import {
  HelloProvider, 
  LoggedIn, 
  LoggedOut, 
} from '@hellocoop/nextjs/react'
```

> Note they are in `@hellocoop/nextjs/react`

See the [SDK Reference | React](/docs/sdks/) for details.

## Client APIs[](#client-apis)

### `useAuth()`[](#useauth)

```
import { useAuth } from '@hellocoop/nextjs/react'
 
const {
    isLoading,      // useSWR response, true if still loading call to 
    isLoggedIn,
    auth: undefined | {
        isLoggedIn, // always returned
        iat,        // returned if isLoggedIn == true
        sub,        // use as user identifier - returned if isLoggedIn == true
        // additional claims - following are defaults
        name, 
        email,
        picture 
    }
} = useAuth()
```

### `logOut()`[](#logout)

```
import { logOut, logOutRoute } from '@hellocoop/nextjs'
```

`logOut()` - function to logout user, loads `logOutRoute`

`logOutRoute` - provides route to logout

## Server APIs[](#server-apis)

App Router (Recommended)Pages Router

### `auth()`

```
import { auth } from '@hellocoop/nextjs'
 
// returns same shape as useAuth().auth
const { 
    isLoggedIn, // always returned
    iat,        // returned if isLoggedIn == true
    sub,        // use as user identifier - returned if isLoggedIn == true
    // additional properties set in auth cookie - following are defaults
    name, 
    email,
    picture 
} = await auth()
```

[Fastify](/docs/sdks/fastify/ "Fastify")[React](/docs/sdks/react/ "React")