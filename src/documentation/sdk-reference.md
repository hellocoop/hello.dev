# SDK Reference

## Next.js

# Next.js module for Hellō

##  NOTE - the Next.js SDK API is under development and will change

> Check out our [Hellō Next.js Starter](https://github.com/hellocoop/hello-nextjs-starter) where you will be logging in with [Hellō](https://hello.coop/) in less than a minute.

To add Hellō to your Next.js application, in your project directory:

## 1) Install the package:

```sh
npm install @hellocoop/nextjs
```

## 2) Create or update your `.env` with:

```sh
npm run quickstart
```

This will launch the Hellō Quickstart web app. After logging into Hellō you will create or select an application, and the application's`client_id` and a generated secret for encrypting cookies will be added to the local `.env` file as `HELLO_CLIENT_ID` and `HELLO_COOKIE_SECRET`. 

> You will need to add the `HELLO_CLIENT_ID` and a new `HELLO_COOKIE_SECRET` that can be generated with `npm run secret` to your deployed environments.


## 3) Create API route

Create a `hellocoop.js` file in the `/pages/api` directory that contains:

```typescript
import { pageAuth } from '@hellocoop/nextjs'
export default pageAuth({})
```

## 4) Add Hellō stylesheet

To provide the button styling, add the below code to the `<Head>` section of the `_document`:

```html
<link rel="stylesheet" href="https://cdn.hello.coop/css/hello-btn.css"/>
```

See [hello-nextjs-starter _document.tsx](https://github.com/hellocoop/hello-nextjs-starter/blob/main/pages/_document.tsx) for reference.

> To ensure the button styles are available, client-side rendered buttons check if the stylesheet has been included in the document head, and if not the stylesheet is injected. Injecting into the head is [not recommended](https://nextjs.org/docs/messages/no-stylesheets-in-head-component) and creates a button rendering glitch.

## 5) Add Hellō buttons

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

`<ContinueButton/>` - provides \[ ō Continue with Hellō \]

`<LoginButton/>` - provides \[ ō Login with Hellō \]

### Optional properties:

- `scope` - Array of [Hellō scope values](https://www.hello.dev/documentation/hello-claims.html#current-scopes). Default `['openid', 'email', 'name', 'picture']`.
- `targetURI` - defaults to `HELLO_DEFAULT_TARGET_ROUTE` or '/'
- `providerHint` - Array of [provider hints](https://www.hello.dev/documentation/provider-hint.html#recommended-provider-defaults). Example `['github', 'gitlab', 'email--', 'apple--', 'microsoft--']` would always recommend GitHub, GitLab, and Google.

`<UpdateEmailButton/>` - provides \[ ō Update Email with Hellō \]

`<UpdatePictureButton/>` - provides \[ ō Update Picture with Hellō \]

`<UpdateDiscordButton/>` - provides \[ ō Update Discord with Hellō \]

`<UpdateTwitterButton/>` - provides \[ ō Update Twitter with Hellō \]

`<UpdateGitHubButton/>` - provides \[ ō Update GitHub with Hellō \]

`<UpdateGitLabButton/>` - provides \[ ō Update GitLab with Hellō \]

### Optional button styling properties:
- `color` - white | black
- `theme` - ignore-light | ignore-dark | aware-invert | aware-static
- `hover` - pop | glow | flare | none

Explore styling with the [button playground](https://www.hello.dev/documentation/getting-started.html#_2-standard-hello-buttons)

## 6) Add Log out

```typescript
import { logOut, logOutRoute } from '@hellocoop/nextjs'
```

`logOut()` - function to logout user, loads `logOutRoute`

`logOutRoute` - provides route to logout

## 7) Use Logged In State to Select Content to Display

```tsx
import { LoggedIn, LoggedOut } from '@hellocoop/nextjs'
```

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

## 8) Auth Data - Client Side

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

## 9) Auth Data - Server Side

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


## 10) Get Server Side Properties 
If you want to show get the auth object from the auth cookie sever side, export `getServerSideProps()` and wrap your content in `<HelloProvider auth=({auth})>`

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

# Advanced Configuration

## Environment Variables

### Variables to be set

These variables are added to the `.env` created by Quickstart for running locally.
You will need to add them to the environment of a deployed app.

- `HELLO_CLIENT_ID` the client_id from the  in `.env` set by Quickstart
- `HELLO_COOKIE_SECRET` a random 64 char hex string (32 bytes). should be different for each environment

### Variables that may be needed

- `HELLO_REDIRECT_URI` overrides dynamic redirect_uri discovery

### Testing Variables

- `HELLO_DOMAIN` - overrides 'hello.coop' - used for testing by Hellō team
- `HELLO_WALLET` - overrides default 'https://wallet.hello.coop' - used if mocking Hellō server

## pageAuth configuration

```typescript
// /api/hellocoop.ts
import loggedIn from '@/src/your-logged-in-logic' 

import pageAuth from '@hellocoop/nextjs'
export default pageAuth({
    scope: ['email','name','picture'], // default scopes
    callbacks: {
        loggedIn                // called when logged in
    },
    pages: {
        loggedIn: '/',          // default route after logged in
        loggedOut:'/',          // default route when logged out
        error:  '/auth/error',  // OAuth error parameters are passed in query string
    }
})
```

## Add Server Side isLoggedIn Logic


```typescript
// src/your-logged-in-logic.ts
import type { LoggedInParams, LoggedInResponse } from '@hellocoop/nextjs'

export default async loggedIn ({ token, payload, req, res }:LoggedInParams)
        : Promise<LoggedInResponse> => {


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

## Core



## Quickstart

## Future?

See our [Roadmap | Quickstarts & SDKs] for what is next and to let us know what you would like to see next.