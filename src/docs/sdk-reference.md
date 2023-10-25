# SDK Reference

## Review below with Rohan

### validateToken
`const { active } = await validateToken(config)`

A helper function to validate an ID Token after a `code` flow. 

```typescript
config = {
    token: OAuth "client_id" parameter used in request - REQUIRED
    client_id: OAuth "redirect_uri" parameter used in request - REQUIRED
    nonce: OAuth "code_verifier" created with `createAuthRequest()`
    wallet?: string; alternative mock wallet host for testing
} 
```

that will examine the token, ensure it was from Hellō, has not expired, and return the payload.

No authentication is required to call the introspection endpoint. You MUST pass your `client_id`, and if you provided a nonce in the request URL, you MUST provide the nonce. The `token`, `client_id`, and optional `nonce` are sent as JSON.

```typescript
const response = await validateToken({
    client_id: OAuth "client_id" parameter used in request - REQUIRED,
    code_verifier: OAuth "code_verifier" created with `createAuthRequest()` - REQUIRED
    nonce: OAuth "nonce" created with `createAuthRequest()`
})
```

If successfully validated, you will receive the ID Token payload with `active: true` to indicate it is an active token. If unsuccessful, you will receive an Introspection Error.

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

If the token is invalid in anyway, the API will return `active` set to `false`
```json
{
    "active":false
}
```

For more information on errors, please see [Introspection Errors](https://www.hello.dev/documentation/errors.html#introspection-errors).

### Sample Code

```typescript
const searchParams = new URLSearchParams(window.location.search)
if (searchParams.has('error'))
    // process error

// get nonce, code_verifier from sessionStorage
try {
    const token = await fetchToken({
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI, // the callback endpoint
        code_verifier,
        code
    })
    const { payload } = parseToken(token)
    if (payload.nonce !== nonce)
        // process error

    const { active } = validateToken({token, client_id, nonce})
    if (!active)
        // process error

    const { sub, name, email, picture } = payload
    // make use of user data
} catch (err) {
    // deal with error
}
```
