Documentation[API References](/docs/apis/)Web Client

# Web Client API

The Web Client API abstracts logging into Hellō with web applications. The [Express](/docs/sdks/express/), [Fastify](/docs/sdks/fastify/), and [Next.js](/docs/sdks/nextjs/) SDKs all expose the Web Client API through the Hellō Endpoint. It is usually mounted at `/api/hellocoop`, but can be mounted at any route. Set the `API_ROUTE` environment variable to this value.

The Hellō Endpoint is also the OpenID Connect `redirect_uri` for your application. IE, this is where Hellō sends the authorization response. The response is processed by endpoint and an encrypted cookie is set containing the auth state.

## Operations[](#operations)

The `op` query parameter is passed to the Hellō Endpoint to indicate the operation to be performed. Valid values are `login`, `auth`, `logout`, and `invite`.

### Login[](#login)

Load this endpoint in the browser to login the user. Loading this endpoint will create and load an authorization request to the Hellō Wallet. The authorization response will be sent to the Hellō Endpoint and processed. If successful, the optional `loginSync` function will be called, and then the browser will be redirected to the `target_uri` if provided, the `route.loggedIn` value in [`hello.config.js`](/docs/sdks/config/), or the `/` route.

Optional Parameter

Description

`target_uri`

overrides where the user will be redirected to after a successful login.

`scope`

overrides the default scope to request from Hellō.

`login_hint`

provide a [login_hint](/docs/oidc/request/#openid-connect-parameters) of which user to log in. Set to the user's email address.

`domain_hint`

provide a [domain_hint](/docs/apis/wallet/#domain_hint) of the domain the user will log in at.

`provider_hint`

overrides the default [provider_hint](/docs/apis/wallet/#provider_hint) of which providers to show a new user.

`prompt`

\- `login` will require a fresh login for the user.  
\- `consent` will present the user with the consent screen. Allows user  
to update their profile.

*Example:*

```
https://your-app.com/api/hellocoop
?op=login
&target_uri=/profile
&scope=profile+nickname
&provider_hint=github+gitlab
```

*Error Response*

If there is an error response from Hello, the browser will be redirected to the error page with the `error` parameter. See [Error Response](/docs/oidc/errors/) for details on error response values. See [`hello.config.js`](/docs/sdks/config/) for overriding the default error page.

### Auth[](#auth)

This operation is to be called by your app and returns a JSON object containing the auth object in the encrypted cookie.

*Example:*

```
https://your-app.com/api/hellocoop?op=auth
```

*Logged In Example Response:*

```
{
  "isLoggedIn": true,
  "sub": "sub_vvCgtpv35lDgQpHtxmpvmnxK_2nZ",
  "iat": 1699234659,
  "name": "Dick Hardt",
  "picture": "https://pictures.hello.coop/r/7a160eed-46bf-48e2-a909-161745535895.png",
  "email": "dick.hardt@hello.coop"
}
```

*Logged Out Example Response:*

```
{
  "isLoggedIn":false
}
```

### Logout[](#logout)

Logs out the user by clearing the cookies and calling the optional logoutSync, and then redirects to the logged out route.

*Example:*

```
https://your-app.com/api/hellocoop?op=logout
```

### Invite[](#invite)

Starts an invite flow to `https://wallet.hello.coop/invite`. See [Invite API (BETA)](/docs/apis/invite/)

*Example:*

```
https://your-app.com/api/hellocoop?op=invite
```

[API References](/docs/apis/ "API References")[Wallet](/docs/apis/wallet/ "Wallet")