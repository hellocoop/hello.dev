Documentation[OpenID Connect](/docs/oidc/)Auth Request

# Authentication Request

*Hellō recommends using the [Code Flow (opens in a new tab)](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) with [PKCE](/docs/oidc/request/#pkce-code).*

*The [Implicit Flow (opens in a new tab)](https://openid.net/specs/openid-connect-core-1_0.html#ImplicitFlowAuth) is supported for backwards compatibility with software that only supports it.*

## Create Request URL[](#create-request-url)

> **ℹ️ Info:** 

The [`@hellocoop/core` (opens in a new tab)](https://www.npmjs.com/package/@hellocoop/nextjs) npm package has a `createAuthRequest()` function that simplifies creating an authorization request URL, including the PKCE code_verifier and code_challenge

The **request URL** is `https://wallet.hello.coop/authorize` and a query with the following standard [OpenID Connect (opens in a new tab)](https://openid.net/specs/openid-connect-core-1_0.html) parameters:

### OpenID Connect Parameters[](#openid-connect-parameters)

Parameters

Description

`client_id`  
*required*

The `client_id` for your app from [console.hello.coop (opens in a new tab)](https://console.hello.coop).

`redirect_uri`  
*required*

One of the redirect_uri values you registered for your app.

`scope`  
*required*

The `openid` scope and zero or more space delimited scopes listed at [Hellō Claims](/docs/scopes/).

`nonce`  
*required*

A unique string that will be included in the signed ID Token. This links the ID Token to your request.

`response_type`  
*optional*

`id_token` for *implicit flow*  
or  
`code` for *code flow* - default and recommended, but requires [PKCE - RFC7636 (opens in a new tab)](https://www.rfc-editor.org/rfc/rfc7636.html)).

`response_mode`  
*optional*

if *id_token flow* can be `fragment` or `form_post` (default)  
if *code flow* can be `fragment`, `form_post`, or `query` (default).

`state`  
*optional*

A value representing the state of your application that will be returned as a parameter in the response.

`code_challenge`

REQUIRED if *code flow* and not using a client secret to authenticate to the token endpoint. See PKCE below.

`code_challenge_method`

MAY be provided if `code_challenge` is included.  
MUST have value of `S256` if included. See PKCE below.

`login_hint`  
*optional*

A hint (`email` or `sub`) for which user account to use.  
Valid formats:  
\- `login_hint=name@domain.example`  
\- `login_hint=mailto:name@domain.example`  
\- `login_hint=sub_01234567abcdefghABCDEFGH_XXX`

`prompt`  
*optional*

A space delimited list. Accepted values include:

\- `login` will require the user to re-authenticate at their login provider

\- `consent` will require the user to review, and potentially change, released claims

### Hellō Parameters[](#hellō-parameters)

Hellō Parameters

Description

`provider_hint`  
*optional*

See [Wallet API | provider_hint](/docs/apis/wallet/#provider_hint) for details.

`domain_hint`  
*optional*

A hint for which domain or type of account:

\- `domain.example` to request the user logs in with a specific managed account

\- `managed` to request a managed account

\- `personal` to request a personal (non-managed) account

### PKCE Code[](#pkce-code)

> [RFC 7636 (opens in a new tab)](https://datatracker.ietf.org/doc/html/rfc7636) *(Proof Key for Code Exchange by OAuth Public Clients)* enables your application to prove it made the authorization request that received the authorization code when it calls the token endpoint.
> 
> This is done by generating a random `code_verifier` and then a `code_challenge` which is a SHA256 cryptographic hash `code_verifier`.
> 
> The `code_challenge` is part of the authorization request, and the `code_verifier` is presented with the `code` to Hellō which verifies the `code` was requested with the `code_challenge`. This allows an application to not have to manage a client secret when using a `code` flow.

**Here is a sample `id_token` (implicit flow) request from the [GreenfieldDemo (opens in a new tab)](https://greenfielddemo.com) app**  
*(line feeds added for readability)*

```
https://wallet.hello.coop/authorize
?client_id=3574f001-0874-4b20-bffd-8f3e37634274
&redirect_uri=https://greenfielddemo.com/
&scope=name+nickname+email+picture+openid
&nonce=b957cea0-f159-4390-ba48-5c5d7e943ea4
&response_mode=fragment
```

**Here is a sample `code` flow request from the [Hellō Next.js Sample (opens in a new tab)](https://hello-nextjs-sample.vercel.app/) app**  
*(line feeds added for readability)*

```
https://wallet.hello.coop/authorize
?client_id=db4ad0b8-c589-4328-8094-f2d0e2cd3aaa
&redirect_uri=https://hello-nextjs-sample.netlify.app/api/hellocoop
&scope=openid+name+email+picture
&nonce=ecc855c9-41e3-46a0-a99a-d1fa3e3c1d3f
&response_type=code
&response_mode=query
&code_challenge=F_xW4_XNddm_XXZgMQAnHBWZRAtc3ZXxb-kcL_rvDns
&code_challenge_method=S256
```

## Make Request[](#make-request)

Cause the user's browser to load the `request URL` you created in `Step 2`. Here are some examples:

-   Set `window.location.href` with JavaScript

```
window.location.href = "https://wallet.hello.coop/authorize?..."
```

-   An `<a>` tag with an `href` to the `requestURL`

```
<a href="https://wallet.hello.coop/authorize?..." /> ... </a>
```

-   HTTP 302 redirect from the server

```
HTTP/1.1 302 Found
Location: https://wallet.hello.coop/authorize?...
```

The user will then interact with Hellō. When finished they will be redirected back to your application with either an ID Token, an authorization code, or an error response.

[OpenID Connect](/docs/oidc/ "OpenID Connect")[Auth Response](/docs/oidc/response/ "Auth Response")