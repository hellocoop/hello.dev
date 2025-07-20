Documentation[SDK References](/docs/sdks/)hello.config.js

# `hello.config.js`

This file contains the configuration for the [Express](/docs/sdks/express/), [Fastify](/docs/sdks/fastify/), and [Next.js](/docs/sdks/nextjs/) SDKs. It is used by the `hellocoop.js` file that provides the Hellō endpoint.

A sample:

hello.config.js

```
const loginSync = require('./path-to-your-callback-function')
 
const config = {
    client_id: 'YOUR_CLIENT_ID',
    scope: ['openid','name','email'], // default - openid name email picture
    provider_hint: ['github'],         
    routes: {
        loggedIn:  '/dashboard', // defaults to '/'
        loggedOut: '/logout',    // defaults to '/'
        error:     '/error'      // defaults to built in error page
    },
    loginSync,  // (params: LoginSyncParams) => Promise<LoginSyncResponse>
                // defaults to undefined
    logoutSync, // (params: LogoutSyncParams) => Promise<LogoutSyncResponse>
}
module.exports = config
```

### `client_id`[](#client_id)

-   required unless provided by a the `HELLO_CLIENT_ID` environment variable

### `scope`[](#scope)

-   override default scope request (openid name email picture), see [Hellō Scopes](/docs/scopes/) for options

### `provider_hint`[](#provider_hint)

-   override providers recommended to users, see [API Reference | provider_hint](/docs/apis/wallet/#provider_hint)

### `routes`[](#routes)

-   override routes to redirect user on log in, log out, and error

### `loginSync`[](#loginsync)

-   optional function called on each successful login

### `logoutSync`[](#logoutsync)

-   optional function called on logout

Here is how your `loginSync` function will be called if provided:

```
const {accessDenied, target_uri, updatedAuth} = await loginSync( { token, payload, cbReq, cbRes } )
```

-   `accessDenied` - optional boolean returned if the user should not be logged in
    
-   `target_uri` - optional URL to override where to redirect the user
    
-   `updated_auth` - an optional object that will to extend the auth object stored in the encrypted cookie. Use this to set roles or groups or other app specific user properties you want readily available. You cannot change the `iat`, `sub`, or `isLoggedIn` values
    
-   `token` - the [ID Token](/docs/oidc/token/) in compact format
    
-   `payload` - the full payload of the ID Token.
    
-   `cbReq.getHeaders()` - returns the request headers
    
-   `cbRes.getHeaders()` - returns the response headers
    
-   `cbRes.setHeader( name, value | [value] )` - will set a response header
    
-   `cbRes.setCookie( name, value, options )` - will set a cookie value with options per [cookie (opens in a new tab)](https://www.npmjs.com/package/cookie) `serialize`
    

Here is how your `logoutSync` function will be called if provided:

```
 await logoutSync( { cbReq, cbRes } )
```

-   `cbReq.getHeaders()` - returns the request headers
    
-   `cbRes.getHeaders()` - returns the response headers
    
-   `cbRes.setHeader( name, value | [value] )` - will set a response header
    
-   `cbRes.setCookie( name, value, options )` - will set a cookie value with options per [cookie (opens in a new tab)](https://www.npmjs.com/package/cookie) `serialize`
    

[Quickstart](/docs/sdks/quickstart/ "Quickstart")[Environment Vars](/docs/sdks/environment/ "Environment Vars")