# Using Hellō

## 1. App Registration

To use Hellō, register your application at [console.hello.dev](https://console.hello.dev/) You can start developing with just the **Client ID** and the defaults. Provide the **Name**, **Logo**, and URLs for **Terms of Service** & **Privacy Policy** when you are ready. The **Development Redirect URIs** `http://localhost:*` and `http://127.0.0.1:*` are enabled by default. Provide your **Production Redirect URI(s)** when you are ready for public access.

## 2. Hellō Buttons

The button to initiate registration / login is either charcoal (#303030) on white, or white on charcoal. While the `ō` is the Hellō logo -- it is a standard UTF-8 character.


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

<button style="background: #303030; border: 1px solid; color: white; padding: 0.6rem 1.2rem; border-radius: 0.4rem; font-size: 1rem; font-weight: 500;">
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

<button style="background: #303030; border: 1px solid; color: white; padding: 0.6rem 1.2rem; border-radius: 0.4rem; font-size: 1rem; font-weight: 500;">
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
  ?<span style="color: #f8c555">client_id</span>=<span style="color: #7ec699;">greenfielddemo</span><br>
  &<span style="color: #f8c555;">redirect_uri</span>=<span style="color: #7ec699;">https://greenfielddemo.com/</span><br>
  &<span style="color: #f8c555;">response_mode</span>=<span style="color: #7ec699;">fragment</span><br>
  &<span style="color: #f8c555;">nonce</span>=<span style="color: #7ec699;">10708056612481411767</span><br>
  &<span style="color: #f8c555;">scope</span>=<span style="color: #7ec699;">name+nickname+email+picture+openid</span>
</p>

There is no difference between a request to register the user, or log in the user. If the user has previously released the same requested scopes to your app, they will not be prompted to release it again. If the requested scopes have changed, or the `profile_update` is provided, the user will be prompted to select what to release.

Hellō only supports the [id_token](https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html#id_token) response type. The `response_type` parameter is ignored if provided.

Hellō does not support the [`UserInfo endpoint`](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo). All user information is included in the ID Token.

## 4. Make Request

Cause the user's browser to load the `request URL` you created in `Step 3`. You can do this in the following ways:
1. HTTP 302 redirect from the server to `requestURL`
1. Set `window.location.href = <requestURL>` with JavaScript
1. An href link to `<a>` tag  (`<a href=<requestURL>`) 

## 5. Receive Response

If successful, the user's browser will be redirected back to your app with an `id_token` parameter and the `state` if provided. See [Request Errors](errors.html#request-errors) for unsuccessful responses.

Example ID Token

<p style="background: #282c34; word-break: break-all; color: white; border-radius: 6px; padding:  1.25rem 1.5rem; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
<span style="color: #cc99cd;">eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJmZWQzOTBlLThkMmYtNDE3NC1iMTM2LTBhN2U1MmM5MWUxZSJ9<span style="color: white;">.</span></span><span style="color: #f8c555;">eyJpc3MiOiJodHRwczovL2lzc3Vlci5oZWxsby5jb29wIiwiYXVkIjoiMzU3NGYwMDEtMDg3NC00YjIwLWJmZmQtOGYzZTM3NjM0Mjc0Iiwibm9uY2UiOiJiOWE4YzFiNC0xMDJiLTQ4ZjUtYTc5OC1kYzlkZjc3MjkzMDMiLCJqdGkiOiIxZDhjMmU0Yy1lZDNiLTRiZGItOTFjMS1kOWFjZmRjNGY2MDYiLCJwdWJfaWQiOiJncmVlbmZpZWxkZGVtby5jb20iLCJzdWIiOiJmOWUyMWYwZi05ZjBlLTQxYjAtYTU4Yi1jMmQ2M2JjYzdiNGYiLCJzY29wZSI6WyJuYW1lIiwibmlja25hbWUiLCJwaWN0dXJlIiwiZW1haWwiLCJvcGVuaWQiXSwibmFtZSI6IkRpY2sgSGFyZHQiLCJuaWNrbmFtZSI6IkRpY2siLCJwaWN0dXJlIjoiaHR0cHM6Ly9jZG4uaGVsbG8uY29vcC9pbWFnZXMvZGVmYXVsdC1waWN0dXJlLnBuZyIsImVtYWlsIjoiZGljay5oYXJkdEBoZWxsby5jb29wIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlhdCI6MTY0NTYzNzYyNiwiZXhwIjoxNjQ1NjQxMjI2fQ<span style="color: white;">.</span></span><span style="color: #7ec699">p54dK2k8fsDIe2FfXXn2x0RGb0U-VRhapHUtzgCssGsK06M4VyUO7bMGtdfFZ6N5rPbeHgtV_y905hKhr05_TKISZb7cxM6TQYxQwR3JRyl3YSjVDWhRrMncpflf45tYYZToS-R7HcANoarsr8F8Oid146TnhcjuEO7FlC3rujJsnzSwV3cOHYNzCmf_RZw9IOFMXAJyHyPMp7kayKeT7h6Ei7KovtR2lQS5wULzgUHVLWYjMStaB8OXhBsuhbyhgpm15Xj0QgefkM0jK14Pl0PHXYyBVu5MZC7WRCNBjnWAMy2W56LD85aB9G7WHktnH3RL1RKhMNKlKubhxLEiDA</span>
</p>

The <span style="color: #cc99cd; font-weight: 600; background: ;">purple</span> section is the header, the <span style="color: #f8c555; font-weight: 600;">yellow</span> section is the payload, and the <span style="color: #7ec699; font-weight: 600;">green</span> section is the signature

Decoded ID Token (Payload)

<!-- <pre style="background: #282c34; word-break: break-all; color: white; border-radius: 6px; padding:  1.25rem 1.5rem; font-size: 0.92rem; color: #f8c555; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
    {
      "iss": "http://localhost:7002/",
      "aud": "hello_con_test",
      "nonce": "3789151173589091171",
      "jti": "8c1c7cb9-a05d-4832-9965-25457187927d",
      "sub": "1fdc3ae3-aeee-4314-a8ce-97363a16407d",
      "scope": [
        "email",
        "openid"
      ],
      "email": "john.smith@gmail.com",
      "email_verified": true,
      "iat": 1645019594,
      "exp": 1645023194
    }
</pre> -->
```json
{
    "header": {
        "alg": "RS256",
        "typ": "JWT",
        "kid": "bfed390e-8d2f-4174-b136-0a7e52c91e1e"
    },
    "payload": {
        "iss": "https://issuer.hello.coop",
        "aud": "greenfielddemo",
        "nonce": "169d01cf-3d0a-47dd-af9f-3408b18876db",
        "jti": "7e7f131a-aaf8-4a3f-ab5c-adea3f0fe8ce",
        "pub_id": "greenfielddemo.com",
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
        "iat": 1645586658,
        "exp": 1645590258
    }
}
```

## 6. Validate ID Token

You can validate the `id_token` with an introspection API call or perform validation yourself per [OpenID Connect 3.1.3.7](https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation)

Many OpenID Connect libraries will include ID Token validation.

### Introspection

Hellō provides an introspection API at `https://consent.hello.coop/oauth/introspect` that will validate the ID Token for your app.

```javascript
const client_id     // your apps client_id
const id_token      // the ID Token received
const nonce         // the nonce sent in the request

const url = 'https://consent.hello.coop/oauth/introspect'
const options = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({client_id: client_id, token: token, nonce: nonce})
}
const res = await fetch(url, options)
const results = await results.json()
```
#### Response

If successfully validated, you will receive the payload with `active:true` to indicate it is an active token. If unsuccessful, you will receive an [Introspection Error](errors.html#introspection-errors)

```json
{
    "iss": "https://issuer.hello.coop",
    "aud": "greenfielddemo",
    "nonce": "169d01cf-3d0a-47dd-af9f-3408b18876db",
    "jti": "7e7f131a-aaf8-4a3f-ab5c-adea3f0fe8ce",
    "pub_id": "greenfielddemo.com",
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
    "iat": 1645586658,
    "exp": 1645590258,
  "active": true
}
```

### Self Validation

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

### Signature Verification Keys

Hellō provides OpenId Provider configuration information per [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig) at:

`https://issuer.hello.coop/.well-known/open-configuration`

The `jwks_uri` property in the configuration file contains the URI for a JSON file containing the public keys in JSON Web Key format ([RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517)) for verifying the signature per step (6) above.