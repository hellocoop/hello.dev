DocumentationHellō Mockin

# Hellō Mockin

*A mock login server for Hellō*

## Overview[](#overview)

Registration and login are one of the first interactions your users will have with your app. It is usually the start of their user journey. Flowing through a production provider during development is tedious, and is impractical in automated testing.

Mockin is a mock of the Hellō OpenID Connect Login Service and implements the authorization, token, introspection, and userinfo endpoints.

-   Development - speeds up development as you won't be redirecting through the Hellō production server.
-   Testing - simplifies creating end to end tests, and with the [`/mock`](/docs/mockin/#mock-api) APIs, can simulate expired and invalid responses allowing you to ensure your app properly handles all exceptions, improving your security posture.

Mockin simplifies development. Start the login flow by clicking on the `[ ō Continue with Hellō ]` button. Your browser will redirect to Mockin and then back to your app which will then complete the login flow.

You can call the `/mock` APIs while testing to change the user or claims returned, simulate errors, and provide invalid or expired tokens, allowing you to ensure your app properly handles all exceptions, improving your security posture.

## Nodejs Usage[](#nodejs-usage)

Add mockin as a development dependency:

npmpnpmyarnbun

```
npm i -D @hellocoop/mockin
```

Run mockin

```
npx @hellocoop/mockin
```

> **ℹ️ Info:** 

Your app does not need to be a Nodejs app. If you have Nodejs 18+ installed, you can run  
`npx @hellocoop/mockin`

## Docker Usage[](#docker-usage)

`docker run -d -p 3333:3333 hellocoop/mockin:latest`

If you are running Mockin with `docker-compose` or `Kubernetes`, you will need to set the environment variables for the Mockin service to the hostname the service is running at, and similarly will need to configure your app to redirect to that service when the the `[ ō Continue with Hellō ]` button is pressed. See [https://github.com/hellocoop/packages-js/tree/main/express/tests (opens in a new tab)](https://github.com/hellocoop/packages-js/tree/main/express/tests) for a `docker-compose` example using Playwright.

## Playing with Mockin[](#playing-with-mockin)

You can use Mocking with the [Hellō Playground (opens in a new tab)](https://playground.hello.dev). Run Mockin with either:

-   `npx @hellocoop/mockin`, or
-   `docker run -d -p 3333:3333 hellocoop/mockin:latest`

and then in [https://playground.hello.dev (opens in a new tab)](https://playground.hello.dev) add `http://127.0.0.1:3333/authorize` as an Authorization Server. You can then play with the different parameters and see the responses returned.

You can make `curl` commands to the `/mockin` API to set mock return values. For example

```
curl -X PUT "http://127.0.0.1:3333/mock/authorization?error=access_denied" 
```

will return the current value of MOCK and when using Playground will return the `access_denied` error as if the user had denied access.

## Configuring Your App[](#configuring-your-app)

You will need to have your app configured to use the URL where Mockin is running. For example, your app will need to redirect the user to `http://127.0.0.1/3333/authorize` if you are using the Mockin defaults instead of `https://wallet.hello.coop/authorize`.

## Environment Variables[](#environment-variables)

Set these environment variables to change where Mockin listens and what `iss` is set to in the ID Token:

### `IP`[](#ip)

-   IP that Mockin will listen on. Defaults to `127.0.0.1`

### `PORT`[](#port)

-   port that Mockin will listen on. Defaults to `3333`

### `ISSUER`[](#issuer)

-   Issuer that Mockin will use as the `iss` value. Defaults to `http:${IP}:${PORT}` which is `http://127.0.0.1:3333` if other defaults are used. Note that the ISSUER value does not need to be the same as IP:PORT, and can be any value except the production ISSUER value (setting it to `https://issuer.hello.coop` will generate an error). It needs to be an address that will resolve to Mockin if your app is fetching up `ISSUER/.well-known/openid-configuration`

> **ℹ️ Info:** 

If you are using one of the SDKs from [https://github.com/hellocoop/packages (opens in a new tab)](https://github.com/hellocoop/packages) you set `HELLO_WALLET` to be where the browser and server can reach Mockin which is `http://127.0.0.1:3333` by default.

-   `client_id` You can use any string as the `client_id` parameter. The same vale must be used in the authorization request when calling the `token` endpoint. The `aud` value in the ID Token will be the same value
    
-   `redirect_uri` There is no check on a valid `redirect_uri`.
    

## Testing with Playwright[](#testing-with-playwright)

[Playwright (opens in a new tab)](https://playwright.dev/) is a popular end-to-end testing tool for modern web apps that uses Nodejs, and works well with Mockin. Playwright allows you to start one or more local servers when running Playwright tests, which makes it easy to start your app and Mockin at the same time.

In your playwright.config.ts

playwright.config.ts

```
export default defineConfig({
    /* ... other settings */
  webServer: [{
    // adjust to be command to start your web app
    command: 'npm start',
    // adjust to be URL Playwright can call to confirm your app is running
    url: 'http://127.0.0.1:3000',
  },{
    // Mockin default config
    command: 'npx @hellocoop/mockin',
    url: 'http://127.0.0.1:3333/',
  }]
});
```

See [https://github.com/hellocoop/packages/tree/main/express (opens in a new tab)](https://github.com/hellocoop/packages/tree/main/express) for an example

## Mock API[](#mock-api)

All Mock APIs return 200 (302 for authorization requests) along with the current value of MOCK if successful, a 404 response with an explanation if an invalid request.

### `GET /authorize`[](#get-authorize)

See [Auth Request](/docs/oidc/request/) for the query parameters of an authorization request.

Mockin supports the `login_hint` and `domain_hint` query parameters:

-   `login_hint` can be either the `email` or the `sub` of a mock user. Mockin returns the user whose `email` or `sub` matches the provided `login_hint`.
-   `domain_hint` should be the domain of an email (e.g., example.net). Mockin returns users whose email belongs to the specified domain.

See the list of builtin mock users [here (opens in a new tab)](https://github.com/hellocoop/mockin/blob/main/src/users.js).

> If both login_hint and domain_hint are passsed, login_hint takes precedence.

### `PUT /mock/token`[](#put-mocktoken)

Changes the ID Token to be invalid in some way. Pass one or more of the following query parameters:

-   `iss=<value>` sets the value of the `iss` claim to be the passed value
-   `aud=<value>` sets the value of the `aud` claim to be the passed value
-   `expired=true` returns an ID token that has expired
-   `wrong_key=true` signs the ID token with the wrong key

Example: `PUT /mock/token?expired=true`

### `PUT /mock/authorize`[](#put-mockauthorize)

Changes the response from `/authorize`, the `authorization_endpoint`:

-   `error=<error_code>` sets the OAuth error code to be returned.
-   `wildcard_domain=<domain>` sets the `wild_card_domain` parameter, part of the [Hellō Auto Config process (opens in a new tab)](https://www.hello.dev/docs/apis/wallet/#wildcard_domain)
-   `state=<value>` sets the `state` parameter to be returned. Use to test getting back the wrong `state` parameter.

Example: `PUT /mock/authorize?error=access_denied` will direct Mockin to simulate the user canceling requests in subsequent flows.

### `PUT /mock/oauth/token`[](#put-mockoauthtoken)

Changes the response from `/oauth/token`, the `token_endpoint`, to return an error:

-   `error=<error_code>` sets the OAuth error code to be returned. The status code will be changed as well unless set separately.
-   `status=<code>` sets the 3 digit HTTP status code returned.

### `PUT /mock/oauth/introspect`[](#put-mockoauthintrospect)

Changes the response from `/oauth/introspection`, the `introspection_endpoint`, to return an error:

-   `error=<error_code>` sets the OAuth error code to be returned. The status code will be changed as well unless set separately.
-   `status=<code>` sets the 3 digit HTTP status code returned.

### `PUT /mock/oauth/userinfo`[](#put-mockoauthuserinfo)

Changes the response from `/oauth/userinfo`, the `userinfo_endpoint`, to return an error:

-   `error=<error_code>` sets the OAuth error code to be returned. The status code will be changed as well unless set separately.
-   `status=<code>` sets the 3 digit HTTP status code returned.

### `PUT /mock/user/:user`[](#put-mockuseruser)

Change which user is returned.`:user` can be `0, 1 or 2` per user array in `src/users.js`. `0` is default.

### `PUT /mock/claims`[](#put-mockclaims)

Change a claim to be returned in the ID Token.

Example: `PUT /mock/claims?email=mock@mock.example` will then have `"email"="mock@mock.example"` in subsequent ID Token responses. Useful to test a user changing a value such as their email address.

### `DELETE /mock`[](#delete-mock)

Deletes all mock values that have been set. Call before / after tests to clear any mock values that have been set

### Mock Limitations[](#mock-limitations)

The Mock data is stored in memory and stateful. All requests will get the same result given the state. Keep this in mind if running multiple tests at the same time.

When using `response_mode=code` the state of the result is stored in memory for providing the subsequent call to the token endpoint. This prevents Mockin from using this flow in a serverless deployment.

## Contributions[](#contributions)

We welcome contributions, feedback, and filing issues.  
See the Mockin repo [https://github.com/hellocoop/mockin (opens in a new tab)](https://github.com/hellocoop/mockin)

[Unsupported Features](/docs/oidc/unsupported/ "Unsupported Features")[Hellō MCP Server](/docs/mcp/ "Hellō MCP Server")