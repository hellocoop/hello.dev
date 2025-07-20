Documentation[OpenID Connect](/docs/oidc/)Device Code Flow

# Device Auth Grant

Hellō supports using the [Device Authorization Grant (RFC8628) (opens in a new tab)](https://datatracker.ietf.org/doc/html/rfc8628) to obtain an ID Token for a user. This enables the user to log into internet connected devices that do not support a browser. In addition to the `client_id` and `scope` parameters, Hellō supports the `nonce`, `prompt`, `login_hint`, `domain_hint`, and `provider_hint`.

## Device Auth Request[](#device-auth-request)

To start the process, do an HTTP POST to the Hellō `device_authorization_endpoint`, `https://wallet.hello.coop/oauth/device/code`, with the `Content-Type` of `application/x-www-form-urlencoded` and the following parameters:

Parameters

Description

`client_id`  
*required*

The `client_id` for your app from [console.hello.coop (opens in a new tab)](https://console.hello.coop).

`scope`  
*required*

The `openid` scope and zero or more space delimited scopes listed at [Hellō Claims](/docs/scopes/).

`nonce`  
*required*

A unique string that will be included in the signed ID Token. This links the ID Token to your request.

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

## Device Authorization Response[](#device-authorization-response)

If the request is accepted, a JSON response will be provided per [RFC 8628 3.2 (opens in a new tab)](https://datatracker.ietf.org/doc/html/rfc8628#section-3.2). Here is a sample response:

```
{
  "device_code": "bde3a264c27b79cfc0e838e098bd193f571cf01de45a871dd228ab889d519878",
  "user_code": "228-457-485",
  "verification_uri": "https://wallet.hello.coop/device",
  "verification_uri_complete": "https://wallet.hello.coop/device?user_code=228-457-485",
  "expires_in": 300000
}
```

## User Interaction[](#user-interaction)

Instruct the user to load the `verification_uri` and enter the `user_code` value, or load the `verification_uri_complete`, which could be presented to the user as a QR code they can scan to start the login.

## Device Access Token Request[](#device-access-token-request)

Do an HTTP POST with the `Content-Type` of `application/x-www-form-urlencoded` to the Hellō `token_endpoint`, `https://wallet.hello.coop/oauth/token` per [RFC 8628 3.1 (opens in a new tab)](https://datatracker.ietf.org/doc/html/rfc8628#section-3.1) passing `grant_type` with a value of `urn:ietf:params:oauth:grant-type:device_code` and the `device_code` and `client_id`. Here is a sample request:

```
grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Adevice_code&
device_code=bde3a264c27b79cfc0e838e098bd193f571cf01de45a871dd228ab889d519878&
client_id=app_exampleapplication_cid
```

The response will usually be the `token_endpoint` response.

[Auth Response](/docs/oidc/response/ "Auth Response")[Verification](/docs/oidc/verification/ "Verification")