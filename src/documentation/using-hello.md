# Using Hellō

To use Hellō, you first register your app at [console.hello.dev](https://console.hello.dev/).

## Hellō Buttons

The button to initiate registration / login is either charcoal (#303030) on white, or white on charcoal. While the `ō` is the Hellō logo -- it is a standard UTF-8 character.

**Continue with Hellō**

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

<button style="background: #303030; border: none; color: white; padding: 0.6rem 1.2rem; border-radius: 0.4rem; font-size: 1rem; font-weight: 500;">
  ō Continue with Hellō 
</button>

---

**Update Profile with Hellō**

```html
<button
  style="background: #303030;
    border: none;
    color: white;
    padding: 0.6rem 1.2rem;
    border-radius: 0.4rem;
    font-size: 1rem;
    font-weight: 500"
>
  ō Update Profile with Hellō 
</button>
```

<button style="background: #303030; border: none; color: white; padding: 0.6rem 1.2rem; border-radius: 0.4rem; font-size: 1rem; font-weight: 500">
  ō Update Profile with Hellō 
</button>

## Create Request

The request URL is `https://consent.hello.coop/` and a query with the following parameters

|Param|Description|
|---|---|
|`client_id`|The `client_id` for your app from [console.hello.dev](https://console.hello.dev) |
|`redirect_uri`|One of the redirect_uri values you registered for your app |
|`scope`|One or more scopes from [Hellō Scopes](#scopes)|
|`nonce`<br><span style="margin-top: 16px; display: inline-block;">(optional)</span>|A unique string that will be included in the ID Token|
|`state`<br><span style="margin-top: 16px; display: inline-block;">(optional)</span>|A value representing the state of your application that will be returned as a parameter in the response|
|`response_mode`<br><span style="margin-top: 16px; display: inline-block;">(optional)</span>|One of fragment query form_post- defaults to fragment. This is how you would like Hellō will send the response.|

Here is an example request for the GreenFieldDemo app:

<p style="background: #282c34; color: white; border-radius: 6px; padding:  1.25rem 1.5rem; font-weight: 500;">
  https://consent.hello.coop/<br>
  ?<span style="background: #e7e8e8; padding: 0 0.16rem; border-radius: 4px; color: #303030; font-weight: 600;">client_id</span>=greenfielddemo<br>
  &<span style="background: #e7e8e8; padding: 0 0.16rem; border-radius: 4px; color: #303030; font-weight: 600;">redirect_uri</span>=https://greenfielddemo.com/<br>
  &<span style="background: #e7e8e8; padding: 0 0.16rem; border-radius: 4px; color: #303030; font-weight: 600;">response_mode</span>=fragment<br>
  &<span style="background: #e7e8e8; padding: 0 0.16rem; border-radius: 4px; color: #303030; font-weight: 600;">nonce</span>=10708056612481411767<br>
  &<span style="background: #e7e8e8; padding: 0 0.16rem; border-radius: 4px; color: #303030; font-weight: 600;">scope</span>=name+nickname+email+picture+openid
</p>

There is no difference between a request to register the user, or log in the user. Both will return the same results. If the user has previously released the same request to your app, they will not be prompted to release it again. But the `profile_update` scope changes this behavior so that users can update their profile.

Hellō only supports the [id_token](https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html#id_token) response type. The `response_type` parameter is ignored.

Hellō does not support the [`UserInfo endpoint`](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo). All user information is included in the ID Token.

## Make Request

Cause the user's browser to load the request URL you created in `Step 1`. You can do this in the following ways:
1. HTTP 302 redirect from the server
1. Set `window.location.href = <requestURL>` with JavaScript
1. Add href link to `<a>` tag with JavaScript (`<a href=<requestURL>`) 

## Receive Response

If successful, the user's browser will be redirected back to your app with an `id_token` parameter and the `state` if provided. See [Errors](#errors) for unsuccessful responses.

Example ID Token

<p style="background: #282c34; word-break: break-all; color: white; border-radius: 6px; padding:  1.25rem 1.5rem; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
<span style="color: #cc99cd;">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.</span><br>
<span style="color: #f8c555;">eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjcwMDIvIiwiYXVkIjoiaGVsbG9fY29uX3Rlc3QiLCJub25jZSI6IjM3ODkxNTExNzM1ODkwOTExNzEiLCJqdGkiOiI4YzFjN2NiOS1hMDVkLTQ4MzItOTk2NS0yNTQ1NzE4NzkyN2QiLCJzdWIiOiIxZmRjM2FlMy1hZWVlLTQzMTQtYThjZS05NzM2M2ExNjQwN2QiLCJzY29wZSI6WyJlbWFpbCIsIm9wZW5pZCJdLCJlbWFpbCI6ImpvaG4uc21pdGhAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlhdCI6MTY0NTAxOTU5NCwiZXhwIjoxNjQ1MDIzMTk0fQ.</span><br>
<span style="color:  #7ec699">qFtJ9E9Cv-9WX9NPhnaIyXde9AVZ6KZ1Wo1kCeVPWw4</span>
</p>

Decoded ID Token (Payload)

<pre style="background: #282c34; word-break: break-all; color: white; border-radius: 6px; padding:  1.25rem 1.5rem; font-size: 0.92rem; color: #f8c555; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
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
</pre>

## Validate ID Token

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
#### results

```json
{
  "iss": "https://issuer.hello.coop/",
  "aud": "greenfielddemo",
  "nonce": "10708056612481411767",
  "jti": "8bdc9d9a-7fc7-48bf-adf3-5346524ae11a",
  "pub_id": "greenfielddemo.com",
  "sub": "ae9aebbc-a28b-4e9d-b0bb-68466b1862ba",
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
  "iat": 1644884733,
  "exp": 1644888333,
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

      https://issuer.hello.coop/.well-known/open-configuration

The `jwks_uri` property in the configuration file contains the URI for a JSON file containing the public keys in JSON Web Key format ([RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517)) for verifying the signature per step (6) above.