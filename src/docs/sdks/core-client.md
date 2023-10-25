# Core / Client

A collection of Node.js helper functions for integrating Hellō.

- `@hellocoop/core` is a Node.js package
- `@hellocoop/client` is a browser optimized package

The APIs are the same except where noted.

## Installation

#### Node.js
```sh
npm install @hellocoop/core
```
or
```sh
yarn add @hellocoop/core
```
or
```sh
pnpm add @hellocoop/core
```
#### Browser 

```sh
npm install @hellocoop/client
```
or
```sh
yarn add @hellocoop/client
```
or
```sh
pnpm add @hellocoop/client
```


## Usage

#### Node.js

```typescript
// typescript
import { createAuthRequest, fetchToken, parseToken } from '@hellocoop/core'
```
or
```javascript
// javascript
const { createAuthRequest, fetchToken, parseToken } = require('@hellocoop/core')
```

#### Browser
```typescript
// typescript
import { createAuthRequest, fetchToken, parseToken } from '@hellocoop/client'
```
or
```javascript
// javascript
const { createAuthRequest, fetchToken, parseToken } = require('@hellocoop/client')
```


## `createAuthRequest()`
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
- [supported scopes](./hello-scopes)
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


## `fetchToken()`
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

## `parseToken()`
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

token, client_id, nonce, wallet

## `validateToken()`
*only in `@hellocoop/client`*

Useful when:
- `response_type=id_token`
- `response_mode=fragment`

This is a helper function for the `https://wallet.hello.coop/oauth/introspection` API as described [here](../Integrating-hello#id-token). 

`const response = await validateToken(params)`

```typescript
params = {
    token: `id_token` from fragment
    client_id: OAuth "client_id" parameter used in request
    nonce?: OAuth "nonce" provided in authorization request - MUST be provided if in request
    wallet?: alternative mock wallet host for testing
} 
```

This will call the wallet's introspection endpoint that will examine the token, ensure it was from Hellō, has not expired, and return the payload.

If successfully validated, you will receive the full [ID Token payload](../Integrating-hello#introspection-response) with `active: true` to indicate it is an active token. If unsuccessful, you will receive an [Introspection Errors](./errors#introspection).


## Server Code Sample

Using:
- `response_type=code`
- `response_mode=query` 

```typescript
// server callback endpoint
const { code, error } = res.query
if (error) {
    // process error
}
// get nonce, code_verifier from server session data
try {
    const token = await fetchToken({
        client_id: HELLO_CLIENT_ID,
        redirect_uri: REDIRECT_URI, // the callback endpoint
        code_verifier,
        code
    })
    const { payload } = parseToken(token)
    if (payload.nonce !== nonce) {
        // process error
    }
    const { sub, name, email, picture } = payload
    // make use of user data
} catch (err) {
    // deal with error
}
```


## Client Code Sample

Using:
- `response_type=id_token`
- `response_mode=fragment`

```typescript
const params = new URLSearchParams(window.location.hash.substring(1))
const token = params.get('id_token')
if (!id_token || params.has('error')) {
    // process error
}
// get nonce from sessionStorage
try {
    const response = validateToken({
        token, 
        nonce,
        HELLO_CLIENT_ID
    })
    if (!response.active) {
        // process error
    }
    const { sub, name, email, picture } = response
    // make use of user data
} catch (err) {
    // deal with error
}
```
