Documentation[SDK References](/docs/sdks/)Helper

# Helper

A collection of JS helper functions for browsers and servers integrating Hellō.

-   `@hellocoop/helper-browser` is a browser optimized package
-   `@hellocoop/helper-server` is a Node.js npm package

The APIs are the same except where noted.

## Installation[](#installation)

#### Node.js[](#nodejs)

npmpnpmyarnbun

```
npm i @hellocoop/helper-server
```

#### Browser[](#browser)

npmpnpmyarnbun

```
npm i @hellocoop/helper-browser
```

## Usage[](#usage)

#### Node.js[](#nodejs-1)

TypeScriptJavaScript

```
import { createAuthRequest, fetchToken, parseToken } from '@hellocoop/helper-server'
```

#### Browser[](#browser-1)

```
import { createAuthRequest, fetchToken, parseToken, validateToken } from '@hellocoop/helper-browser'
```

## `createAuthRequest()`[](#createauthrequest)

`const { url, nonce, code_verifier } = await createAuthRequest(config)`

A helper function to create the url to load in the browser to make the request to Hellō.

```
config = {
    client_id: OAuth "client_id" parameter - REQUIRED
    redirect_uri: OAuth "redirect_uri" parameter - REQUIRED
    scope?: array of zero or more scopes to request - default ['openid','name','email','picture']
    response_type?: 'id_token'|'code' - default 'code'
    response_mode?: 'fragment'|'query'|'form_post' - default 'query'
    nonce?: OpenID Connect "nonce" parameter override. 
    state?: OAuth "state" parameter
    login_hint?: a hint for which user account to use.
    domain_hint?: a hint for which domain or type of account (see below)
    provider_hint?: array of provider hint update values (see below)
    prompt?: - 'login' | 'consent' (see below)
    wallet?: alternative mock wallet URL for testing
}
```

-   [supported scopes](/docs/scopes/)
-   [domain hint](/docs/apis/wallet/#domain_hint) documentation
-   [provider hint](/docs/apis/wallet/#provider_hint) documentation
-   [prompt](/docs/apis/web-client/#login) documentation

Returns

```
{
    url: URL to load in the browser to make the authorization request
    nonce: nonce to remember for verifying the returned ID Token
    code_verifier: returned if a "code" flow
}
```

If the request is approved by the user, the `redirect_uri` will receive the response per the `response_mode` as `'fragment'|'query'|'form_post'` parameters (`query` is default). The response will be per the `response_mode` and either an `id_token` or a `code` (`code` is default).

## `fetchToken()`[](#fetchtoken)

`const token = await fetchToken(config)`

A helper function to fetch an ID Token after a `code` flow.

```
config = {
    client_id: OAuth "client_id" parameter used in request - REQUIRED
    redirect_uri: OAuth "redirect_uri" parameter used in request - REQUIRED
    code_verifier: OAuth "code_verifier" created with `createAuthRequest()`
    code: OAuth "code" parameter returned from request
    wallet?: string; alternative mock wallet host for testing
} 
```

returns an ID Token in the JWT compact format (a string). Note that the ID Token does not require validation as it came directly from Hellō and is bound to the provided `code_verifier` used in the request

## `parseToken()`[](#parsetoken)

`const { header, payload } = parseToken(token)`

Parses the header and payload from an ID Token. Does not verify the ID Token.

## `createInviteRequest()` (BETA)[](#createinviterequest-beta)

`const { url } = createInviteRequest(config)`

A helper function to create the url to load in the browser to make the invite request to Hellō.

```
config = {
    inviter: `sub` provided by Hellō of the inviter - REQUIRED
    client_id: `client_id` for your application - REQUIRED
    initiate_login_uri: path where the invitee is sent upon accepting the invitation - REQUIRED
    return_uri: URI for Hellō to return the inviter when they are done - REQUIRED
    wallet?: string; alternative mock wallet host for testing
    app_name?: override the name of the app - defaults to the name registered for the `client_id`
    prompt?: override the prompt string shown to the invitee (see below)
    role?: identifier string passed back to the app in the event JWT as the `role` property
    tenant?: identifier string passed back to the app in the event JWT as the `tenant` property
    state?: identifier string passed back to the app in the event JWT as the `state` property
    events_uri?: The webhook where event JWTs are posted (see below)
}
```

-   [Invite API](/docs/apis/invite/) documentation
-   [prompt](/docs/apis/invite/#optional-parameters) documentation
-   [events_uri](/docs/apis/invite/#query-parameters) documentation

Returns

```
{
    url: URL to load in the browser to make the invite request
}
```

## Server Code Sample[](#server-code-sample)

Using:

-   `response_type=code`
-   `response_mode=query`

```
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

## Client Code Sample[](#client-code-sample)

Using:

-   `response_type=id_token`
-   `response_mode=fragment`

```
const params = new URLSearchParams(window.location.hash.substring(1))
const token = params.get('id_token')
if (!token || params.has('error')) {
    // process error
}
// get nonce from sessionStorage
try {
    const response = validateToken({
        client_id: HELLO_CLIENT_ID,
        token, 
        nonce
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

[Vue](/docs/sdks/vue/ "Vue")[Quickstart](/docs/sdks/quickstart/ "Quickstart")