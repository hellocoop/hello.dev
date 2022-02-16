# Introduction

Hellō is an [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html) Provider that simplifies user registration and login, allowing you to provide all the choices your user's may want in hours instead of days or weeks.

Unlike other providers, Hellō gathers all the information you request about the user. Your users have choice on how they want to authenticate, which profile picture they want to provide you, and which email they want to verify. Hellō also lets you send the user back to Hellō if they want to update their profile at your site -- no need for you to implement email or phone verification, or image uploads.

Currently, Hellō is ideal for developers building new, green field applications where there is no requirement to integrate with existing user registration and login. In the future, we will have features that provide simple integration points.

You can check out the Hellō user experience with our demo at [GreenFieldDemo.com](https://greenfielddemo.com)

# Using Hellō

To use Hellō, you first register your app at [console.hello.coop](https://console.hello.coop).

## 0. Hellō Buttons

The button to initiate registration / login is either charcoal (#303030) on white, or white on charcoal. While the `ō` is the Hellō logo -- it is a standard UTF-8 character.

#### Continue with Hellō 

```html
<button
  style="background: #303030;
    border: none;
    color: white;
    padding: 0.6rem 2rem;
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

#### ō Update Profile with Hellō 

```html
<button
  style="background: #303030;
    border: none;
    color: white;
    padding: 0.6rem 2rem;
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

## 1. Create Request

The request URL is `https://consent.hello.coop/` and a query with the following parameters

|Param|Description|
|---|---|
|`client_id`|The `client_id` for your app from [console.hello.coop](https://console.hello.coop) |
|`redirect_uri`|One of the redirect_uri values you registered for your app |
|`scopes`|One or more scopes from [Hellō Scopes](#scopes)|
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

## 2. Make Request

Cause the user's browser to load the request URL you created. You can do this in the following ways:
1. As an HTTP 302 redirect from the server
2. Set `window.location.href = <requestURL>` on click event of button
3. `<a href="<requestURL>">Continue with Hellō</a>` (You can use the above styling for this link too!)

## 3. Receive Response

If successful, the user's browser will be redirected back to your app with an `id_token` parameter and the `state` if provided. See [Errors](#errors) for unsuccessful responses.

Example ID Token

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjcwMDIvIiwiYXVkIjoiaGVsbG9fY29uX3Rlc3QiLCJub25jZSI6IjM3ODkxNTExNzM1ODkwOTExNzEiLCJqdGkiOiI4YzFjN2NiOS1hMDVkLTQ4MzItOTk2NS0yNTQ1NzE4NzkyN2QiLCJzdWIiOiIxZmRjM2FlMy1hZWVlLTQzMTQtYThjZS05NzM2M2ExNjQwN2QiLCJzY29wZSI6WyJlbWFpbCIsIm9wZW5pZCJdLCJlbWFpbCI6ImpvaG4uc21pdGhAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlhdCI6MTY0NTAxOTU5NCwiZXhwIjoxNjQ1MDIzMTk0fQ.qFtJ9E9Cv-9WX9NPhnaIyXde9AVZ6KZ1Wo1kCeVPWw4
```

## 4. Validate ID Token

You can validate the `id_token` with an introspection API call or perform validation yourself per [OpenID Connect 3.1.3.7](https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation)

Many OpenID Connect libraries will include ID Token validation.

### 4.1 Introspection

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

### 4.2 Self Validation

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

### 4.3 Signature Verification Keys

Hellō provides OpenId Provider configuration information per [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig) at:

      https://issuer.hello.coop/.well-known/open-configuration

The `jwks_uri` property in the configuration file contains the URI for a JSON file containing the public keys in JSON Web Key format ([RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517)) for verifying the signature per step (6) above.

# <a name="scopes"></a>Hellō Scopes

You include scopes in the request for the information (claims) you would like Hellō to return about the user. Unlike other providers, Hellō will always provide a value for any requested scope.

When requested multiple scopes, separate them with a space. The space will often be converted to a `+` when URL Encoding the parameters.

Following are the scopes currently supported by Hellō. These are standard OpenID Connect scopes/claims with the exception of `profile_update`:

|Scope|Description|
|---|---|
|`openid`|This scope is a no-op, and is always returned. If you don't want any other claims, provide just this one.|
|`name`|Full / legal name|
|`nickname`|Preferred name|
|`given_name`|AKA First name|
|`family_name`|AKA Last name|
|`email`|A verified email address. `email_verified=true` will always be returned.|
|`phone`|A verified phone number. `phone_verified=true` will always be returned.|
|`picture`|A URL to a profile picture.|
|`profile_update`|Indicates the user will be prompted to select new profile information. See the `ō Update Profile with Hellō` button functionality in the [Green Field Demo](https://greenfielddemo.com)|

# <a name="errors"></a>Errors

## Request Errors

## Introspection Errors
