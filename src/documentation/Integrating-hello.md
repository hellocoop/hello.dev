# Integrating Hellō

Now that you have registered your application at Hellō and added the button to your page, let's complete the integration.

1. Connect the button click to creating a Request URL
2. Create a Request URL
3. Make the request by redirecting the user's browser to the Request URL
4. Receive the response
5. Validate the ID Token

At this point, you know which user you are interacting with, and have any of the claims you requested.

## 1. Respond to Button Click

The button to initiate registration / login is either charcoal (#303030) on white, or white on charcoal. Note that the Hellō logo `ō` is a `o` with a [macron](https://en.wikipedia.org/wiki/Macron_(diacritic)). You can use the `ō` character if you have `<meta charset="UTF-8">` in your page `<head>` element (best practice for HTML documents). For reference, the UTF-8 encoding is`0xC5 0x8D` and the HTML markup is `&omacr;`.


### Client side redirection
```html
<button onclick="login(event)" class="hello-btn hello-btn-black-on-light"></button>

<script>
  async function login(event){
    event.target.classList.add('hello-btn-loader') // Show spinner
    event.target.disabled = true // Disable button
    const requestURL = await fetch()  // Fetch the request URL from your backend
    window.location.href = requestURL // See next step for creating request URL
  }
</script>
```
### Server side redirection

```html
<button onclick="login(event)" class="hello-btn hello-btn-black-on-light"></button>

<script>
  async function login(event){
    event.target.classList.add('hello-btn-loader') // Show spinner
    event.target.disabled = true // Disable button
    window.location.href = LOGIN_ENDPOINT // The server endpoint does the redirect
  }
</script>
```


## 2. Create Request URL

*The [`@hellocoop/core`](https://www.npmjs.com/package/@hellocoop/nextjs) npm package has a `createAuthRequest()` function that simplifies creating an authorization request URL, including the PKCE code_verifier and code_challenge*

The **request URL** is `https://wallet.hello.coop/authorize` and a query with the following standard [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html) parameters:

|Parameter|Description|
|---|---|
|`client_id`|The `client_id` for your app from [console.hello.coop](https://console.hello.coop) |
|`redirect_uri`|One of the redirect_uri values you registered for your app |
|`scope`|The `openid` scope and zero or more scopes listed at [Hellō Claims](/documentation/hello-claims.html)|
|`nonce`<br><span style="margin-top: 16px; display: inline-block;"></span>|A unique string that will be included in the signed ID Token. This links the ID Token to your request|
|`response_type`<br><span style="margin-top: 16px; display: inline-block;">(optional)</span>| `id_token` flow or<p/> `code` flow (default and recommended, but requires [PKCE - RFC7636](https://www.rfc-editor.org/rfc/rfc7636.html)). |
|`response_mode`<br><span style="margin-top: 16px; display: inline-block;">(optional)</span>|if `id_token` flow `fragment` or `form_post` (default) <p/>if `code` flow `fragment`, `form_post`, or `query` (default)|
|`state`<br><span style="margin-top: 16px; display: inline-block;">(optional)</span>|A value representing the state of your application that will be returned as a parameter in the response|
|`code_challenge`|REQUIRED if `code` flow|
|`code_challenge_method`|REQUIRED if `code` flow<p/>MUST have value of `S256`|

### PKCE Code
TBD - explain code_verifier and code_challenge
Allows an app to not have to manage a client secret

**Here is a sample `id_token` flow request from the[ GreenfieldDemo](https://greenfielddemo.com) app**<br>
*(line feeds added for readability)*

<p style="background: #282c34; color: white; word-break: break-all; border-radius: 6px; padding:  1.25rem 1.5rem; font-weight: 500; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
  https://wallet.hello.coop/authorize<br>
  ?<span style="color: #f8c555;">client_id</span>=<span style="color: #7ec699;">3574f001-0874-4b20-bffd-8f3e37634274</span><br>
  &<span style="color: #f8c555;">redirect_uri</span>=<span style="color: #7ec699;">https://greenfielddemo.com/</span><br>
  &<span style="color: #f8c555;">scope</span>=<span style="color: #7ec699;">name+nickname+email+picture+openid</span><br>
  &<span style="color: #f8c555;">nonce</span>=<span style="color: #7ec699;">b957cea0-f159-4390-ba48-5c5d7e943ea4</span><br>
  &<span style="color: #f8c555;">response_mode</span>=<span style="color: #7ec699;">fragment</span><br>
</p>

**Here is a sample `code` flow request from the[ Hellō Next.js Starter](https://hello-nextjs-starter.vercel.app/) app**<br>
*(line feeds added for readability)*

<p style="background: #282c34; color: white; word-break: break-all; border-radius: 6px; padding:  1.25rem 1.5rem; font-weight: 500; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
  https://wallet.hello.coop/authorize<br>
  ?<span style="color: #f8c555;">client_id</span>=<span style="color: #7ec699;">db4ad0b8-c589-4328-8094-f2d0e2cd3aaa</span><br>
  &<span style="color: #f8c555;">redirect_uri</span>=<span style="color: #7ec699;">https://hello-nextjs-starter.netlify.app/api/hellocoop</span><br>
  &<span style="color: #f8c555;">scope</span>=<span style="color: #7ec699;">openid+name+email+picture</span><br>
  &<span style="color: #f8c555;">nonce</span>=<span style="color: #7ec699;">ecc855c9-41e3-46a0-a99a-d1fa3e3c1d3f</span><br>
  &<span style="color: #f8c555;">response_type</span>=<span style="color: #7ec699;">code</span><br>
  &<span style="color: #f8c555;">response_mode</span>=<span style="color: #7ec699;">query</span><br>
  &<span style="color: #f8c555;">code_challenge</span>=<span style="color: #7ec699;">F_xW4_XNddm_XXZgMQAnHBWZRAtc3ZXxb-kcL_rvDns</span><br>
  &<span style="color: #f8c555;">code_challenge_method</span>=<span style="color: #7ec699;">S256</span><br>
</p>

### Advanced Features
See the [Authorization Request](./api-reference.md) reference for additional functionality including how to change the recommended providers.

## 3. Make Request

Cause the user's browser to load the `request URL` you created in `Step 2`. Here are some examples:
- Set `window.location.href` with JavaScript
```javascript
window.location.href = "https://wallet.hello.coop/authorize?..."
```
- An `<a>` tag with an `href` to the `requestURL`
```html
<a href="https://wallet.hello.coop/authorize?..." /> ... </a>
```
- HTTP 302 redirect from the server
```
HTTP/1.1 302 Found
Location: https://wallet.hello.coop/authorize?...
```

The user will then interact with Hellō. When finished they will be redirected back to your application with either an ID Token, an authorization code, or an error response.

## 4. ID Token Response

Your app will receive the response as either fragment query parameters to the provided `redirect_uri` if `response_mode=fragment`, or in `application/x-www-form-urlencoded` format in an HTTP POST to the provided `redirect_uri` if `response_mode=form_post`. If the user approved the request, the response will contain an `id_token` parameter, and a `state` parameter if provided. See [Request Errors](errors.html#request-errors) for unsuccessful responses.

Fragment Example (`response_mode=fragment`)
<p style="background: #282c34; color: white; overflow-x: auto; border-radius: 6px; padding:  1.25rem 1.5rem; font-weight: 500; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
https://greenfielddemo.com/#<span style="color: #f8c555">id_token</span>=<span style="color: #7ec699;">eyJhbGciOiJSUzI1...rest_of_ID_Token</span></p>


The following sample JavaScript will acquire the `id_token` from the fragment

```javascript
const params = new URLSearchParams(window.location.hash.substring(1))
const id_token = params.get('id_token') // eyJhbGciOiJSUzI1...rest_of_ID_Token
```


Form Post Example (`response_mode=form_post`)


```
POST / HTTP/1.1
Host: greenfielddemo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: XX

id_token=eyJhbGciOiJSUzI1...rest_of_ID_Token
```

Note that a `fragment` response is limited to the maximum URL length supported by the user's browser. Using `form_post` does not have that constraint, and a larger ID Token can be returned to your application.

An ID Token is a JSON Web Token (JWT) [RFC 7519](https://www.rfc-editor.org/rfc/rfc7519.html) that has claims per [OpenID Connect §2](https://openid.net/specs/openid-connect-core-1_0.html#IDToken).<br>In the following example of a raw ID Token:
- <span style="color: #cc99cd; font-weight: 600; background: #282c34; padding: 2px 5px; border-radius: 4px;">purple</span> is the **header** that describes the JWT;
- <span style="color: #f8c555; font-weight: 600; background: #282c34; padding: 2px 5px; border-radius: 4px;">yellow</span> is the **payload** of the ID Token; and
- <span style="color: #7ec699; font-weight: 600; background: #282c34; padding: 2px 5px; border-radius: 4px;">green</span> is the **signature** of the JWT.

**Example ID Token**

<p style="background: #282c34; word-break: break-all; color: white; border-radius: 6px; padding:  1.25rem 1.5rem; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
<span style="color: #cc99cd;">eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJmZWQzOTBlLThkMmYtNDE3NC1iMTM2LTBhN2U1MmM5MWUxZSJ9<span style="color: white;">.</span></span><span style="color: #f8c555;">eyJpc3MiOiJodHRwczovL2lzc3Vlci5oZWxsby5jb29wIiwiYXVkIjoiMzU3NGYwMDEtMDg3NC00YjIwLWJmZmQtOGYzZTM3NjM0Mjc0Iiwibm9uY2UiOiJiOTU3Y2VhMC1mMTU5LTQzOTAtYmE0OC01YzVkN2U5NDNlYTQiLCJqdGkiOiI4YWQxNjdkMS1kMTcwLTQ2YzktYjNjNi00N2RkYTczNWE0ZTMiLCJzdWIiOiJmOWUyMWYwZi05ZjBlLTQxYjAtYTU4Yi1jMmQ2M2JjYzdiNGYiLCJzY29wZSI6WyJuYW1lIiwibmlja25hbWUiLCJwaWN0dXJlIiwiZW1haWwiLCJvcGVuaWQiXSwibmFtZSI6IkRpY2sgSGFyZHQiLCJuaWNrbmFtZSI6IkRpY2siLCJwaWN0dXJlIjoiaHR0cHM6Ly9jZG4uaGVsbG8uY29vcC9pbWFnZXMvZGVmYXVsdC1waWN0dXJlLnBuZyIsImVtYWlsIjoiZGljay5oYXJkdEBoZWxsby5jb29wIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlhdCI6MTY0NTY0MTI4NywiZXhwIjoxNjQ1NjQ0ODg3fQ<span style="color: white;">.</span></span><span style="color: #7ec699">vppFPOM1kE6qs4s0DbWVGn80P0TOHmE4tmzg78RrJyz4732n5PH4aEgVIqQrKHkSYO8CptA1BhOBW1oRg8YrbWnJP2o8O__tLW8W1j8BzasW1td_Q_zuWqzz1XemqpLbPVKcS5MNZkYbJXLwXUAgmCOyiWgVlsXRV5D2bWhe-MesbmIaW-Rdnhf_WFuLBjNM0FO3HpdeHkJ4-wFuzGQhgyputw1-V9yeUWkyqt-9uW09fJCHN6oE3ATA0BA3uGWoFpPRaMb4JKxNdlQkR7OAkofIe_dCLnM9xR5_zDSdGA8j45ufGaIy1poqbq8PIg52thaWunpwuc8zo9-kiMYuZw</span>
</p>


**Decoded ID Token (Header & Payload)**

```json
{
    "header": {
        "alg": "RS256",
        "typ": "JWT",
        "kid": "bfed390e-8d2f-4174-b136-0a7e52c91e1e"
    },
    "payload": {
        "iss": "https://issuer.hello.coop",
        "aud": "3574f001-0874-4b20-bffd-8f3e37634274",
        "nonce": "b957cea0-f159-4390-ba48-5c5d7e943ea4",
        "jti": "8ad167d1-d170-46c9-b3c6-47dda735a4e3",
        "sub": "f9e21f0f-9f0e-41b0-a58b-c2d63bcc7b4f",
        "scope": [
            "name",
            "nickname",
            "picture",
            "email",
            "openid"
        ],
        "name": "Dick Hardt",
        "nickname": "Dick",
        "picture": "https://cdn.hello.coop/images/default-picture.png",
        "email": "dick.hardt@hello.coop",
        "email_verified": true,
        "iat": 1669399110,
        "exp": 1669399410
    }
}
```
**Payload Explanation**
|Claim|Description|
|---|---|
|`iss`|Issuer of ID Token. Will always be `https://issuer.hello.coop`|
|`aud`|Audience of ID Token. Will be your `client_id`|
|`nonce`|The nonce that you optionally included in your request|
|`jti`|A unique identifier for this ID Token generated by Hellō|
|`sub`|The subject of the ID Token. A unique identifier for the user. We recommend you use this to identify your users. [See FAQ 10](/faqs/#_10-why-should-i-use-the-sub-claim-to-identify-my-users) for details.|
|`scope`|The scopes returned by Hellō. [See FAQ 11](/faqs/#_11-what-scopes-will-i-receive-back) for  details.|
|`name`|The user's full name or legal name.|
|`nickname`|The user's preferred name, nickname, or username.|
|`picture`|A user's profile picture URL. [See FAQ 12](/faqs/#_12-what-can-i-do-with-the-picture-url-i-receive) for details.|
|`email`|The user's email address.|
|`email_verified`|Indicates email was verified. Will always be `true` from Hellō|
|`iat`|The time the ID Token was issued in [Epoch time](https://en.wikipedia.org/wiki/Unix_time)|
|`exp`|The time the ID Token expires.<br>Hellō sets the expiry to be 5 minutes (300 seconds) after `iat`|

Your application now has an ID Token for the user, but before using it, you need to ensure it is valid, and not an ID Token an attacker has passed to your application. The ID Token header and signature are part of the validation procedure.


### Validate ID Token

You can validate the `id_token` by:
1. Sending it back to the Hellō introspection API; or
2. Perform validation yourself per [OpenID Connect 3.1.3.7](https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation)


#### Introspection

Hellō provides an introspection API per [RFC 7662](https://www.rfc-editor.org/rfc/rfc7662.html) at`https://wallet.hello.coop/oauth/introspect` that will examine the token, ensure it was from Hellō, has not expired, and return the payload.

No authentication is required to call the introspection endpoint. You MUST pass your `client_id`, and if you provided a `nonce` in the `request URL`, you MUST provide the nonce. The `token`, `client_id`, and optional `nonce` are sent as JSON.

**Example Introspection JSON for earlier ID Token**

```json
{
  "token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJmZWQzOTBlLThkMmYtNDE3NC1iMTM2LTBhN2U1MmM5MWUxZSJ9.eyJpc3MiOiJodHRwczovL2lzc3Vlci5oZWxsby5jb29wIiwiYXVkIjoiMzU3NGYwMDEtMDg3NC00YjIwLWJmZmQtOGYzZTM3NjM0Mjc0Iiwibm9uY2UiOiJiOTU3Y2VhMC1mMTU5LTQzOTAtYmE0OC01YzVkN2U5NDNlYTQiLCJqdGkiOiI4YWQxNjdkMS1kMTcwLTQ2YzktYjNjNi00N2RkYTczNWE0ZTMiLCJzdWIiOiJmOWUyMWYwZi05ZjBlLTQxYjAtYTU4Yi1jMmQ2M2JjYzdiNGYiLCJzY29wZSI6WyJuYW1lIiwibmlja25hbWUiLCJwaWN0dXJlIiwiZW1haWwiLCJvcGVuaWQiXSwibmFtZSI6IkRpY2sgSGFyZHQiLCJuaWNrbmFtZSI6IkRpY2siLCJwaWN0dXJlIjoiaHR0cHM6Ly9jZG4uaGVsbG8uY29vcC9pbWFnZXMvZGVmYXVsdC1waWN0dXJlLnBuZyIsImVtYWlsIjoiZGljay5oYXJkdEBoZWxsby5jb29wIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlhdCI6MTY0NTY0MTI4NywiZXhwIjoxNjQ1NjQ0ODg3fQ.vppFPOM1kE6qs4s0DbWVGn80P0TOHmE4tmzg78RrJyz4732n5PH4aEgVIqQrKHkSYO8CptA1BhOBW1oRg8YrbWnJP2o8O__tLW8W1j8BzasW1td_Q_zuWqzz1XemqpLbPVKcS5MNZkYbJXLwXUAgmCOyiWgVlsXRV5D2bWhe-MesbmIaW-Rdnhf_WFuLBjNM0FO3HpdeHkJ4-wFuzGQhgyputw1-V9yeUWkyqt-9uW09fJCHN6oE3ATA0BA3uGWoFpPRaMb4JKxNdlQkR7OAkofIe_dCLnM9xR5_zDSdGA8j45ufGaIy1poqbq8PIg52thaWunpwuc8zo9-kiMYuZw",
  "client_id":"3574f001-0874-4b20-bffd-8f3e37634274",
  "nonce":"b957cea0-f159-4390-ba48-5c5d7e943ea4"
}
```

**Sample code to make API call**

```javascript
const id_token      // the ID Token received
const client_id     // your apps client_id
const nonce         // the nonce sent in the request

const url = 'https://wallet.hello.coop/oauth/introspect'
const params = {
  token: id_token,
  client_id: client_id,
  nonce: nonce
}
const options = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {'Content-type': 'application/x-www-form-urlencoded'},
    body: new URLSearchParams(params).toString()
}
const response = await fetch(url, options)
const json = await response.json()
```

#### Response JSON

If successfully validated, you will receive the ID Token payload with `active:true` to indicate it is an active token. If unsuccessful, you will receive an [Introspection Error](errors.html#introspection-errors).

**Sample Introspection Response**

```json
{
  "iss": "https://issuer.hello.coop",
  "aud": "3574f001-0874-4b20-bffd-8f3e37634274",
  "nonce": "b957cea0-f159-4390-ba48-5c5d7e943ea4",
  "jti": "8ad167d1-d170-46c9-b3c6-47dda735a4e3",
  "sub": "f9e21f0f-9f0e-41b0-a58b-c2d63bcc7b4f",
  "scope": [
      "name",
      "nickname",
      "picture",
      "email",
      "openid"
  ],
  "name": "Dick Hardt",
  "nickname": "Dick",
  "picture": "https://cdn.hello.coop/images/default-picture.png",
  "email": "dick.hardt@hello.coop",
  "email_verified": true,
  "iat": 1669399110,
  "exp": 1669399410,
  "active": true
}
```

#### Self Validation

There are many OpenID Connect libraries that include ID Token validation. The OpenID Foundation maintains a list [here](https://openid.net/developers/libraries/). Getting security right is HARD. We recommend you use a proven library and NOT write your own validation. We include the information below for reference.

#### Signature Verification Keys

Hellō provides OpenId Provider configuration information per [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig) at:

[`https://issuer.hello.coop/.well-known/openid-configuration`](https://issuer.hello.coop/.well-known/openid-configuration)

The `jwks_uri` property in the configuration file contains the URI for a JSON file containing the public keys in JSON Web Key format ([RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517)) for verifying the signature per step (6) above.

#### Signature Verification Steps

Following are details for each ID Token validation step per [OpenID Connect 3.1.3.7](https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation)

1. N/A - The ID Token is not encrypted
1. The `iss` value MUST be `https://issuer.hello.coop`
1. The `aud` value MUST be the `client_id` value provided in the request
1. N/A - The ID Token will not contain multiple audiences
1. There will not be an `azp` claim
1. The ID Token is signed per JWS. The certificates are XXX
1. The `alg` value will be `RS256`
1. N/A - the `alg` is always `RS256`
1. The current time must be before `exp`. Note the time is seconds since the Epoch, not milliseconds. ID Tokens expire after one hour.
1. The `iat` may be used by the client if the one hour expiry is longer than is desirable by the client.
1. The `nonce` is included if provided in the request.
1. The `acr` Claim is not supported at this time.
1. The `auth_time` Claim is not supported at this time.

