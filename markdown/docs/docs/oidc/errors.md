Documentation[OpenID Connect](/docs/oidc/)Error Responses

# Error Responses

Following are errors returned by the Hellō server when making an authorization request, or when calling the introspection API.

## Authorization Request Errors[](#authorization-request-errors)

If there is an issue with fulfilling the request, the response [(Step 4)](/docs/oidc/errors/#introspection-errors) will have an `error` query parameter set to one of the following string:

Error

Description

`invalid_request`

The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed.

`access_denied`

The user denied or cancelled the request.

`invalid_scope`

The requested scope is invalid, unknown, or malformed.

`server_error`

The Hellō server encountered an unexpected condition that prevented it from fulfilling the request. (This error code is equivalent to a 500 Internal Server Error HTTP status code.)

`temporarily_unavailable`

The Hellō server is currently unable to handle the request due to a temporary overloading or maintenance of the server. (This error code is equivalent to a 503 Service Unavailable HTTP status code.)

Example

***NOTE:** If the request contains an invalid `client_id` or `request_uri`, a response will not be sent and the user will be presented with an error message per [RFC 6749 4.1.2.1 (opens in a new tab)](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1)

## Introspection Errors[](#introspection-errors)

Following are the responses from the [Token Introspection API](/docs/oidc/errors/#introspection-errors) `https://wallet.hello.coop/oauth/introspect`

If the token is invalid in anyway, the API will return `active` set to `false`

```
{
    "active":false
}
```

If any of the parameters are missing you will receive an error

Error

Description

`token_required`

There was no `token` parameter.

`client_id_required`

There was no `client_id` parameter.

`nonce_required`

There was a nonce in the ID Token, and there was no `nonce` parameter.

Example

```
{
    "error":"nonce_required"
}
```

[Configuration](/docs/oidc/config/ "Configuration")[Unsupported Features](/docs/oidc/unsupported/ "Unsupported Features")