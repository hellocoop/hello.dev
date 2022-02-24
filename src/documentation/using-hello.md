# Using Hellō

## 1. App Registration

To use Hellō, register your application at [console.hello.dev](https://console.hello.dev/) You can start developing with just the **Client ID** and the defaults. Provide the **Name**, **Logo**, and URLs for **Terms of Service** & **Privacy Policy** when you are ready to preview what is presented to users. The **Development Redirect URIs** `http://localhost:*` and `http://127.0.0.1:*` are enabled by default. Provide your **Production Redirect URI(s)** when you are ready for public access.

## 2. Hellō Buttons

The button to initiate registration / login is either charcoal (#303030) on white, or white on charcoal. Note that the Hellō logo `ō` is a `o` with a [macron](https://en.wikipedia.org/wiki/Macron_(diacritic)). You can use the `ō` character if you have `<meta charset="UTF-8">` in your page `<head>` element (best practice for HTML documents). For reference, the UTF-8 encoding is`0xC5 0x8D` and the HTML markup is `&omacr`.


<button style="background: #303030; border: none; color: white; padding: 0.6rem 1.2rem; border-radius: 0.4rem; font-size: 1rem; font-weight: 500;">
  ō Continue with Hellō 
</button>

```html
<button
  style="background: #303030;
    border: none;
    color: white;
    padding: 0.6rem 1.2rem;
    border-radius: 0.4rem;
    font-size: 500"
>
  ō Continue with Hellō 
</button>
```

---

<button style="background: white; border: 1px solid #303030; color: #303030; padding: 0.6rem 1.2rem; border-radius: 0.4rem; font-size: 1rem; font-weight: 500;">
  ō Continue with Hellō 
</button>

```html
<button
  style="background: white;
    border: 1px solid;
    color: #303030;
    padding: 0.6rem 1.2rem;
    border-radius: 0.4rem;
    font-size: 500"
>
  ō Continue with Hellō 
</button>
```

---

You can let users update their profile at Hellō as well. Don't forget to set the `profile_update` scope which will prompt the user to decide what information to change.

<button style="background: white; border: 1px solid #303030; color: #303030; padding: 0.6rem 1.2rem; border-radius: 0.4rem; font-size: 1rem; font-weight: 500;">
  ō Update Profile with Hellō 
</button>

## 3. Create Request URL

The **request URL** is `https://consent.hello.coop/` and a query with the following parameters

|Param|Description|
|---|---|
|`client_id`|The `client_id` for your app from [console.hello.dev](https://console.hello.dev) |
|`redirect_uri`|One of the redirect_uri values you registered for your app |
|`scope`|One or more scopes from [Hellō Scopes](#scopes)|
|`nonce`<br><span style="margin-top: 16px; display: inline-block;">(optional)</span>|A unique string that will be included in the ID Token|
|`state`<br><span style="margin-top: 16px; display: inline-block;">(optional)</span>|A value representing the state of your application that will be returned as a parameter in the response|
|`response_mode`<br><span style="margin-top: 16px; display: inline-block;">(optional)</span>|One of fragment query form_post- defaults to fragment. This is how you would like Hellō will send the response.|

Here is an example request for the GreenFieldDemo app:

<p style="background: #282c34; color: white; border-radius: 6px; padding:  1.25rem 1.5rem; font-weight: 500; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
  https://consent.hello.coop/<br>
  ?<span style="color: #f8c555">client_id</span>=<span style="color: #7ec699;">3574f001-0874-4b20-bffd-8f3e37634274</span><br>
  &<span style="color: #f8c555;">redirect_uri</span>=<span style="color: #7ec699;">https://greenfielddemo.com/</span><br>
  &<span style="color: #f8c555;">response_mode</span>=<span style="color: #7ec699;">fragment</span><br>
  &<span style="color: #f8c555;">nonce</span>=<span style="color: #7ec699;">b957cea0-f159-4390-ba48-5c5d7e943ea4</span><br>
  &<span style="color: #f8c555;">scope</span>=<span style="color: #7ec699;">name+nickname+email+picture+openid</span>
</p>

There is no difference between a request to register the user, or log in the user. If the user has previously released the same requested scopes to your app, they will not be prompted to release it again. If the requested scopes have changed, or the `profile_update` is provided, the user will be prompted to select what to release.

Hellō only supports the [id_token](https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html#id_token) response type. The `response_type` parameter is ignored if provided.

Hellō does not support the [`UserInfo endpoint`](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo). All user information is included in the ID Token.

## 4. Make Request

Cause the user's browser to load the `request URL` you created in `Step 3`. Here are some examples:
- Set `window.location.href` with JavaScript
```javascript
window.location.href = "https://consent.hello.coop/?..."
```
- An `<a>` tag with an `href` to the `requestURL`  
```html
<a href="https://consent.hello.coop/?..." /> ... </a> 
```
- HTTP 302 redirect from the server
```
HTTP/1.1 302 Found
Location: https://consent.hello.coop/?...
```

## 5. Receive Response

If successful, the user's browser will be redirected back to your app with an `id_token` parameter and the `state` if provided. See [Request Errors](errors.html#request-errors) for unsuccessful responses.


An ID Token is a JSON Web Token (JWT) [RFC 7519](https://www.rfc-editor.org/rfc/rfc7519.html) that has claims per [OpenId Connect §2](https://openid.net/specs/openid-connect-core-1_0.html#IDToken). In the following example, the <span style="color: #cc99cd; font-weight: 600; background: ;">purple</span> section is the header, the <span style="color: #f8c555; font-weight: 600;">yellow</span> section is the payload, and the <span style="color: #7ec699; font-weight: 600;">green</span> section is the signature.

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
        "iat": 1645641287,
        "exp": 1645644887
    }
}
```

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
|`email_verified`|Indicates email was verified. Will allways be `true` from Hellō|
|`iat`|The time the ID Token was issued in [Epoch time](https://en.wikipedia.org/wiki/Unix_time)|
|`exp`|The time the ID Token expires. Currently 5 minutes after `iat`|

Your application now has an ID Token for the user, but before using it, you need to ensure it is valid, and not an ID Token an attacker has passed to your application. The ID Token header and signature are part of the validation procedure.


## 6. Validate ID Token

You can validate the `id_token` by:
1. sending it back to the Hellō introspection API, or 
2. perform validation yourself per [OpenID Connect 3.1.3.7](https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation)


### 6.1 Introspection

Hellō provides an introspection API per [RFC 7662](https://www.rfc-editor.org/rfc/rfc7662.html) at`https://consent.hello.coop/oauth/introspect` that will examine the token, ensure it was from Hellō, has not expired, and return the payload. 

No authentication is required to call the introspection endpoint. You MUST pass your `client_id`, and if you provided a `nonce` in the `request URL`, you MUST provide the nonce. The `token`, `client_id`, and optional `nonce` are sent as JSON.

**Example Instrospection JSON for earlier ID Token**

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

const url = 'https://consent.hello.coop/oauth/introspect'
const options = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
      token: id_token, 
      client_id: client_id, 
      nonce: nonce
    })
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
  "iat": 1645641287,
  "exp": 1645644887
  "active": true
}
```

### 6.2 Self Validation

There are many OpenID Connect libraries that include ID Token validation. The OpenID Foundation maintains a list [here](https://openid.net/developers/libraries/). Getting security right is HARD. We recommend you use a proven library and NOT write your own validation. We include the information below for reference.

### Signature Verification Keys

Hellō provides OpenId Provider configuration information per [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig) at:

`https://issuer.hello.coop/.well-known/open-configuration`

The `jwks_uri` property in the configuration file contains the URI for a JSON file containing the public keys in JSON Web Key format ([RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517)) for verifying the signature per step (6) above.

### Signature Verification Steps

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

