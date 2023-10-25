# Next.js

> Check out our [Hellō Next.js Starter](https://github.com/hellocoop/hello-nextjs-starter) where you will be logging in with [Hellō](https://hello.coop/) in less than a minute.

This package provides all the endpoints your application needs to use Hellō. The login result is stored in an encrypted cookie, the contents are retrieved client side with `useAuth()` and server side with `getAuth()`. 

## Setup

To add Hellō to your Next.js application, in your project directory:

### 1) Install the package

```sh
npm install @hellocoop/nextjs
```
or

```sh
yarn add @hellocoop/nextjs
```
or

```sh
pnpm add @hellocoop/nextjs
```

### 2) Create or update `.env`

```sh
npx @hellocoop/quickstart --nextjs
 ```
If not already installed, this will prompt to temporarily install the `@hellocoop/quickstart` package, and then launch the Hellō Quickstart Web App with parameters suitable for Next.js. 

After logging into Hellō you will create or select an application, and then the application's `client_id` and a generated secret for encrypting cookies will be added to the local `.env` file as `HELLO_CLIENT_ID` and `HELLO_COOKIE_SECRET`. 

### 3) Add Hellō stylesheet

To provide the button styling, add the below code to the `<Head>` section of the `_document`:

```html
<link rel="stylesheet" href="https://cdn.hello.coop/css/hello-btn.css"/>
```

See [hello-nextjs-starter _document.tsx](https://github.com/hellocoop/hello-nextjs-starter/blob/main/pages/_document.tsx) for reference.

> To ensure the button styles are available, client-side rendered buttons check if the stylesheet has been included in the document head, and if not the stylesheet is injected. Injecting into the head is [not recommended](https://nextjs.org/docs/messages/no-stylesheets-in-head-component) and creates a button rendering glitch.


### 4) Create API route

Create a `hellocoop.js` file in the `/pages/api` directory that contains:

```typescript
import { pageAuth } from '@hellocoop/nextjs'
export default pageAuth({})
```
> See the next section for configuration options that can be passed to `pageAuth()`

You can now add components and use the APIs.

---

>Deploying Your App

You will need add the `HELLO_CLIENT_ID` and a new `HELLO_COOKIE_SECRET` that can be generated with 
```sh
node -e console.log(crypto.randomBytes(32).toString('hex'))
``` 
to your deployed environment(s)



## Components

typescript
```typescript
import { // only import buttons used
    ContinueButton, 
    LoginButton, 
    UpdateEmailButton, 
    UpdatePictureButton,
    UpdateDiscordButton,
    UpdateTwitterButton,
    UpdateGitHubButton,
    UpdateGitLabButton
} from '@hellocoop/nextjs'
```
javascript
```javascript
const { // only import buttons used
    ContinueButton, 
    LoginButton, 
    UpdateEmailButton, 
    UpdatePictureButton,
    UpdateDiscordButton,
    UpdateTwitterButton,
    UpdateGitHubButton,
    UpdateGitLabButton
} = require('@hellocoop/nextjs')
```
### `<ContinueButton/>`

`<ContinueButton/>` - provides \[ ō Continue with Hellō \]

`<LoginButton/>` - provides \[ ō Login with Hellō \]

**Optional properties:**

- `scope` - Array of [Hellō scope values](./hello-scopes.html#current-scopes). Default `['openid', 'email', 'name', 'picture']`.
- `targetURI` - defaults to `HELLO_DEFAULT_TARGET_ROUTE` or '/'
- `providerHint` - Array of [provider hints](./provider-hint.html#recommended-provider-defaults). Example `['github', 'gitlab', 'email--', 'apple--', 'microsoft--']` would always recommend GitHub, GitLab, and Google.

`<UpdateEmailButton/>` - provides \[ ō Update Email with Hellō \]

`<UpdatePictureButton/>` - provides \[ ō Update Picture with Hellō \]

`<UpdateDiscordButton/>` - provides \[ ō Update Discord with Hellō \]

`<UpdateTwitterButton/>` - provides \[ ō Update Twitter with Hellō \]

`<UpdateGitHubButton/>` - provides \[ ō Update GitHub with Hellō \]

`<UpdateGitLabButton/>` - provides \[ ō Update GitLab with Hellō \]

**Optional button styling properties:**
- `color` - white | black
- `theme` - ignore-light | ignore-dark | aware-invert | aware-static
- `hover` - pop | glow | flare | none

Explore styling with the [button playground](./getting-started.html#_2-standard-hello-buttons)

### `<LoggedIn/>`

Components to display content based on logged in state

.tsx
```tsx
import { LoggedIn, LoggedOut } from '@hellocoop/nextjs'
```
.jsx
```jsx
const { LoggedIn, LoggedOut } = require('@hellocoop/nextjs')
```
In .tsx or .jsx file

```html
<LoggedIn>
    <b>content displayed if logged in</b>
</LoggedIn>
```

```html
<LoggedOut>
    <i>content displayed if logged out</i>
</LoggedOut>
```

### `<HelloProvider/>`

Wrapping component for passing context to all children components. See [`getServerSideProps()`](#getserversideprops)


## APIs


### `useAuth()` - Client Side

```typescript
import { useAuth } from '@hellocoop/nextjs'


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

### `getAuth()` - Server Side


```typescript
import { getAuth } from '@hellocoop/nextjs'

// returns same shape as useAuth().auth
const { 
    isLoggedIn, // always returned
    iat,        // returned if isLoggedIn == true
    sub,        // use as user identifier - returned if isLoggedIn == true
    // additional properties set in auth cookie - following are defaults
    name, 
    email,
    picture 
} = await getAuth( req )
```


### `getServerSideProps()`

`<HelloProvider auth={auth}> </HelloProvider>`

If you want to get the auth object from the auth cookie sever side, export `getServerSideProps()` and wrap your content in `<HelloProvider auth={auth}>`

```ts
// MyPage.tsx
import { HelloProvider, LoggedIn, LoggedOut, ContinueButton } from '@hellocoop/nextjs'
export default function MyPage = ({auth}) {
    const { name } = auth
    return(
        <HelloProvider auth={auth}> { // auth must be passed to HelloProvider }
            <LoggedIn>
                Hellō {name}
            </LoggedIn>
            <LoggedOut>
                <ContinueButton/>
            </LoggedOut>
        </HelloProvider>
    )
}
// This a convenience wrapper around `getAuth()`
export { getServerSideProps } from '@hellocoop/nextjs'
```


### `loggedInCallback()`

`loggedInCallback( LoggedInParams ): LoggedInResponse`

This is a callback you provide in the `pageAuth()` config that can do any logic you need when a user logs in. For example:

- Determine if the user has access
- Process the page yourself
- Add roles or other properties to the `auth` cookie

```typescript
// src/your-logged-in-logic.ts
import type { LoggedInParams, LoggedInResponse } from '@hellocoop/nextjs'

export default async loggedInCallback ({ 
        token,      // ID Token in compact, unparsed format
        payload,    // parsed ID Token payload
        req,        // NextApiRequest
        res         // NextApiResponse
    }:LoggedInParams): Promise<LoggedInResponse> => {

    // use sub claim as user identifier
    const { sub: id } = payload
    const user = async readUserTable(id)
    const authorizedUser: boolean = isUserAuthorized(user)

    // no auth cookie set - redirected to error page
    if (!authorizedUser) 
        return {accessDenied: true}

    // no auth cookie set - process response directly
    if (!authorizedUser) {
        res.end(ErrorResponse)
        return {
            accessDenied: true
            isProcessed: true
        }
    }

    // choose what to store in auth cookie
    return { auth: { email, name, picture }} = payload  // default values

    // process response and set auth cookie
    const { email, name, picture } = payload
    res.end(LoggedInPage({ email, name, picture }))
    return { 
        isProcessed: true,
        auth: { email, name, picture }
    }
} 
```

### `logOut()`

```typescript
import { logOut, logOutRoute } from '@hellocoop/nextjs'
```

`logOut()` - function to logout user, loads `logOutRoute`

`logOutRoute` - provides route to logout

### `pageAuth()`

See [pageAuth Config](#pageauth-config)

## Configuration

### Environment Variables

**Variables that MUST be set:**

These variables are added to the `.env` created by Quickstart for running locally.
You will need to add them to the environment of a deployed app.

- `HELLO_CLIENT_ID` the client_id from the  in `.env` set by Quickstart
- `HELLO_COOKIE_SECRET` a random 64 char hex string (32 bytes). Should be unique for each environment. Generate a secret with:

```sh
node -e console.log(crypto.randomBytes(32).toString('hex'))
```

**Variables that may be needed:**

- `HELLO_REDIRECT_URI` overrides dynamic redirect_uri discovery

**Testing Variables:**

- `HELLO_DOMAIN` - overrides 'hello.coop' - used for testing by Hellō team
- `HELLO_WALLET` - overrides default 'https://wallet.hello.coop' - used if mocking Hellō server

### `pageAuth()` Config

```typescript
// /api/hellocoop.ts
import loggedInCallback from '@/src/your-logged-in-logic' 

import pageAuth from '@hellocoop/nextjs'
export default pageAuth({
    scope: ['email','name','picture'], // default scopes
    callbacks: {
        loggedInCallback        // called when logged in
    },
    pages: {
        loggedIn: '/',          // default route after logged in
        loggedOut:'/',          // default route when logged out
        error:  '/auth/error',  // OAuth error parameters are passed in query string
    }
})
```
