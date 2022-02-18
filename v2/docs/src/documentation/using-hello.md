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
    padding: 0.6rem 1.6rem;
    border-radius: 0.4rem;
    font-size: 500"
>
  ō Continue with Hellō 
</button>
```

<button style="background: #303030; border: none; color: white; padding: 0.6rem 1.6rem; border-radius: 0.4rem; font-size: 1rem; font-weight: 500;">
  ō Continue with Hellō 
</button>

---

**ō Update Profile with Hellō**

```html
<button
  style="background: #303030;
    border: none;
    color: white;
    padding: 0.6rem 1.6rem;
    border-radius: 0.4rem;
    font-size: 1rem;
    font-weight: 500"
>
  ō Update Profile with Hellō 
</button>
```

<button style="background: #303030; border: none; color: white; padding: 0.6rem 1.6rem; border-radius: 0.4rem; font-size: 1rem; font-weight: 500">
  Update Profile with Hellō 
</button>

## Create Request

The request URL is `https://consent.hello.coop/` and a query with the following parameters

|Param|Description|
|---|---|
|`client_id`|The `client_id` for your app from [console.hello.dev](https://console.hello.dev) |
|`redirect_uri`|One of the redirect_uri values you registered for your app |
|`scope`|One or more scopes from [Hellō Scopes](#scopes)|
|`nonce` (optional)|A unique string that will be included in the ID Token|
|`state` (optional)|A value representing the state of your application that will be returned as a parameter in the response|
|`response_mode` (optional)|One of fragment query form_post- defaults to fragment. This is how you would like Hellō will send the response.|

Here is an example request for the Green Field Demo app:

```
https://consent.hello.coop/
?client_id=greenfielddemo
&redirect_uri=https://greenfielddemo.com/
&response_mode=fragment
&nonce=10708056612481411767
&scope=name+nickname+email+picture+openid
```

There is no difference between a request to register the user, or log in the user. Both will return the same results. If the user has previously released the same request to your app, they will not be prompted to release it again. But the `profile_update` scope changes this behavior so that users can update their profile.

Hellō only supports the [id_token](https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html#id_token) response type. The `response_type` parameter is ignored.

Hellō does not support the [UserInfo endpoint](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo). All user information is included in the ID Token.

## Make Request

Cause the user's browser to load the request URL you created in `Step 1`. You can do this in the following ways:
1. As an HTTP 302 redirect from the server
2. Set `window.location.href = <requestURL>` on click event of button
3. `<a href="<requestURL>">Continue with Hellō</a>` (You can use the above styling for this link too!)

## Receive Response

If successful, the user's browser will be redirected back to your app with an `id_token` parameter and the `state` if provided. See [Errors](#errors) for unsuccessful responses.

Example ID Token

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjcwMDIvIiwiYXVkIjoiaGVsbG9fY29uX3Rlc3QiLCJub25jZSI6IjM3ODkxNTExNzM1ODkwOTExNzEiLCJqdGkiOiI4YzFjN2NiOS1hMDVkLTQ4MzItOTk2NS0yNTQ1NzE4NzkyN2QiLCJzdWIiOiIxZmRjM2FlMy1hZWVlLTQzMTQtYThjZS05NzM2M2ExNjQwN2QiLCJzY29wZSI6WyJlbWFpbCIsIm9wZW5pZCJdLCJlbWFpbCI6ImpvaG4uc21pdGhAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlhdCI6MTY0NTAxOTU5NCwiZXhwIjoxNjQ1MDIzMTk0fQ.qFtJ9E9Cv-9WX9NPhnaIyXde9AVZ6KZ1Wo1kCeVPWw4
```

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
2. The `iss` value MUST be `https://issuer.hello.coop`
3. The `aud` value MUST be the `client_id` value provided in the request
4. N/A - The ID Token will not contain multiple audiences
5. There will not be an `azp` claim
6. The ID Token is signed per JWS. The certificates are XXX
7. The `alg` value will be `RS256`
8. N/A - the `alg` is always `RS256`
9. The current time must be before `exp`. Note the time is seconds since the Epoch, not milliseconds. ID Tokens expire after one hour.
10. The `iat` may be used by the client if the one hour expiry is longer than is desirable by the client.
11. The `nonce` is included if provided in the request.
12. The `acr` Claim is not supported at this time.
13. The `auth_time` Claim is not supported at this time.

### Signature Verification Keys

Hellō provides OpenId Provider configuration information per [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig) at:

      https://issuer.hello.coop/.well-known/open-configuration

The `jwks_uri` property in the configuration file contains the URI for a JSON file containing the public keys in JSON Web Key format ([RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517)) for verifying the signature per step (6) above.