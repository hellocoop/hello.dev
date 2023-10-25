# SDK Reference

## Next.js

> Check out our [Hellō Next.js Starter](https://github.com/hellocoop/hello-nextjs-starter) where you will be logging in with [Hellō](https://hello.coop/) in less than a minute.

This package provides all the endpoints your application needs to use Hellō. The login result is stored in an encrypted cookie, the contents are retrieved client side with `useAuth()` and server side with `getAuth()`. 

### Setup

To add Hellō to your Next.js application, in your project directory:

#### 1) Install the package:

```sh
npm install @hellocoop/nextjs
```

#### 2) Create or update your `.env` with:

```sh
npx @hellocoop/quickstart -s -w -f '.env' -x 'Next.js Starter' -p 'github gitlab google email--' -i 'hello-nextjs-starter'
 ```
If not already installed, this will prompt to temporarily install the `@hellocoop/quickstart` package, and then launch the Hellō Quickstart web app with Next.js parameters. 

After logging into Hellō you will create or select an application, and then the application's `client_id` and a generated secret for encrypting cookies will be added to the local `.env` file as `HELLO_CLIENT_ID` and `HELLO_COOKIE_SECRET`. 

> You will need to add the `HELLO_CLIENT_ID` and a new `HELLO_COOKIE_SECRET` that can be generated with 
> ```sh
> node -e console.log(crypto.randomBytes(32).toString('hex'))
> ``` 
> to your deployed environments.

#### 3) Add Hellō stylesheet

To provide the button styling, add the below code to the `<Head>` section of the `_document`:

```html
<link rel="stylesheet" href="https://cdn.hello.coop/css/hello-btn.css"/>
```

See [hello-nextjs-starter _document.tsx](https://github.com/hellocoop/hello-nextjs-starter/blob/main/pages/_document.tsx) for reference.

> To ensure the button styles are available, client-side rendered buttons check if the stylesheet has been included in the document head, and if not the stylesheet is injected. Injecting into the head is [not recommended](https://nextjs.org/docs/messages/no-stylesheets-in-head-component) and creates a button rendering glitch.


#### 4) Create API route

Create a `hellocoop.js` file in the `/pages/api` directory that contains:

```typescript
import { pageAuth } from '@hellocoop/nextjs'
export default pageAuth({})
```
> See the next section for configuration options that can be passed to `pageAuth()`

You can now add components and use the APIs.


### Configuration

#### Environment Variables

**Variables that MUST be set**

These variables are added to the `.env` created by Quickstart for running locally.
You will need to add them to the environment of a deployed app.

- `HELLO_CLIENT_ID` the client_id from the  in `.env` set by Quickstart
- `HELLO_COOKIE_SECRET` a random 64 char hex string (32 bytes). Should be unique for each environment. Generate a secret with:

```sh
node -e console.log(crypto.randomBytes(32).toString('hex'))
```

**Variables that may be needed**

- `HELLO_REDIRECT_URI` overrides dynamic redirect_uri discovery

**Testing Variables**

- `HELLO_DOMAIN` - overrides 'hello.coop' - used for testing by Hellō team
- `HELLO_WALLET` - overrides default 'https://wallet.hello.coop' - used if mocking Hellō server

#### pageAuth configuration

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

### Components

#### Buttons

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

**Optional properties:**

- `scope` - Array of [Hellō scope values](./hello-claims.html#current-scopes). Default `['openid', 'email', 'name', 'picture']`.
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

#### Auth Status

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




### APIs

#### Log out

```typescript
import { logOut, logOutRoute } from '@hellocoop/nextjs'
```

`logOut()` - function to logout user, loads `logOutRoute`

`logOutRoute` - provides route to logout


#### Auth Data - Client Side
`useAuth()`

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

#### Auth Data - Server Side
`getAuth()`

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


#### Get Server Side Properties 
`getServerSideProps()`

`<HelloProvider auth=({auth})> </HelloProvider`

If you want to get the auth object from the auth cookie sever side, export `getServerSideProps()` and wrap your content in `<HelloProvider auth=({auth})>`

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


#### loggedInCallback

`loggedInCallback( LoggedInParams ): LoggedInResponse`

You can supply a callback in the `pageAuth()` that can do any logic you need when a user logs in. For example:

- Determine if the user has access
- Process the page yourself
- Add roles or other properties to the `auth` cookie

```typescript
// src/your-logged-in-logic.ts
import type { LoggedInParams, LoggedInResponse } from '@hellocoop/nextjs'

export default async loggedInCallback ({ token, payload, req, res }:LoggedInParams)
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

**Hellō Core Package**

A collection of Node.js helper functions for integrating Hellō

**Installation**
```bash
npm install @hellocoop/core
```
**Usage**
```typescript
// typescript
import const { createAuthRequest, fetchToken, parseToken } from '@hellocoop/core'
```
```javascript
// javascript
const { createAuthRequest, fetchToken, parseToken } = require('@hellocoop/core')
```


### createAuthRequest
`const { url, nonce, code_verifier } = await createAuthRequest(config)`

A helper function to create the url to load in the browser to make the request to Hellō.

```typescript
config = {
    client_id: OAuth "client_id" parameter - REQUIRED
    redirect_uri: OAuth "redirect_uri" parameter - REQUIRED
    scope?: array of zero or more scopes to request - default ['openid','name','email','picture']
    response_type?: 'id_token'|'code' - default 'code'
    response_mode?: 'fragment'|'query'|'form_post' - default 'query'
    nonce?: OpenID Connect "nonce" parameter override. 
    state?: OAuth "state" parameter
    provider_hint?: array of provider hint update values (see below)
    wallet?: alternative mock wallet URL for testing
}
```
- [supported scopes](./hello-claims)
- [provider hint](./ux-reference#provider-hint) documentation

Returns
```typescript
{
    url: URL to load in the browser to make the authorization request
    nonce: nonce to remember for verifying the returned ID Token
    code_verifier: returned if a "code" flow
}
```

If the request is approved by the user, the `redirect_uri` will receive the response per the `response_mode` as `'fragment'|'query'|'form_post'` parameters (`query` is default). The response will be per the `response_mode` and either an `id_token` or a `code` (`code` is default).



### fetchToken
`const token = await fetchToken(config)`

A helper function to fetch an ID Token after a `code` flow. 

```typescript
config = {
    client_id: OAuth "client_id" parameter used in request - REQUIRED
    redirect_uri: OAuth "redirect_uri" parameter used in request - REQUIRED
    code_verifier: OAuth "code_verifier" created with `createAuthRequest()`
    code: OAuth "code" parameter returned from request
    wallet?: string; alternative mock wallet host for testing
} 
```

returns an ID Token in the JWT compact format (a string). Note that the ID Token does not require validation as it came directly from Hellō and is bound to the provided `code_verifier` used in the request

### parseToken
`const { header, payload } = parseToken(token)`

Parses the header and payload from an ID Token. Does not verify the ID Token.

```typescript
// server login endpoint 

const { url, nonce, code_verifier } = await createAuthRequest({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI // the callback endpoint
})

// store nonce & code_verifier in server session storage

res.redirect(url) // redirect browser to make auth request
```

### Sample Code

```typescript
// server callback endpoint

const { code, error } = res.query
// process error if returned

// get nonce, code_verifier from session
try {
    const token = await fetchToken({
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI, // the callback endpoint
        code_verifier,
        code
    })
    const { payload } = parseToken(token)
    if (payload.nonce !== nonce)
        // process error
    const { sub, name, email, picture } = payload
    // make use of user data
} catch (err) {
    // deal with error
}

```

## Quickstart

### CLI

You can run the following command to create or retrieve the `client_id` for a Hellō Application. 
```sh
npx @hellocoop/quickstart@latest
```

This will open up a browser window, where you will need to login with Hellō, and then choose to create a new app, or return the `client_id`.

#### Options

- --provider_hint (-p) - space separated string of provider_hint 
- --suffix (-x) - suffix to add to generated app name
- --integration (-i) - integration name shown in console
- --file (-f) - file to write out HELLO_CLIENT_ID
- --secret (-s) - boolean to generate a HELLO_COOKIE_SECRET value
- --wildcard (-w) - boolean to set the wildcard domain Development Redirect URI
- --debug (-d) - output debug info


### API
`quickstart(config)`

You can incorporate Quickstart in a Node.js script as part of your installer

To install in another package

```sh
npm i --save-dev @hellocoop/quickstart
```

You can then use call Quickstart from a configuration script, example:
```typescript
// typescript
import quickstart from '@hellocoop/quickstart';

...
const config = {
    response_uri: 'http://localhost:8080',

}

const client_id = await quickstart(config)
```
All the options are strings that are passed as query parameters to the Quickstart Web App. See the [Quickstart API](./api-reference#quickstart-api) for details.


## Future?

See our [Roadmap | Quickstarts & SDKs](./roadmap#quickstarts--sdks) for what is next and to let us know what you would like to see next.