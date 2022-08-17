# Errors

Following are errors returned by the Hellō server when making a request, or when calling the introspection API.

## Request Errors

If there is an issue with fulfilling the request [(Step 4)](/documentation/using-hello.html#_4-make-request), the response [(Step 5)](/documentation/using-hello.html#_5-receive-response) will have an `error` query parameter set to one of the following string:

|Error|Description|
|---|---|
|`invalid_request`| The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed. |
|`access_denied`| The user denied or cancelled the request. |
|`invalid_scope`| The requested scope is invalid, unknown, or malformed. |
|`server_error`| The Hellō server encountered an unexpected condition that prevented it from fulfilling the request. (This error code is equivalent to a 500 Internal Server Error HTTP status code.) |
|`temporarily_unavailable`| The Hellō server is currently unable to handle the request due to a temporary overloading or maintenance of the server. (This error code is equivalent to a 503 Service Unavailable HTTP status code.) |

Example 
<p style="background: #282c34; color: white; overflow-x: auto; border-radius: 6px; padding:  1.25rem 1.5rem; font-weight: 500; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
https://greenfielddemo.com/#/?<span style="color: #f8c555">error</span>=<span style="color: #7ec699;">access_denied</span></p>


***NOTE:** If the request contains an invalid `client_id` or `request_uri`, a response will not be sent and the user will be presented with an error message per [RFC 6749 4.1.2.1](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1)

## Introspection Errors

Following are the responses from the [Token Introspection API](/documentation/using-hello.html#_6-1-introspection) `https://wallet.hello.coop/oauth/introspect`

If the token is invalid in anyway, the API will return `active` set to `false`

```json
{
    "active":false
}
```
If any of the parameters are missing you will receive an error

|Error|Description|
|---|---|
|`token_required`| There was `token` parameter. |
|`client_id_required`| There was `client_id` parameter. |
|`nonce_required`| There was a nonce in the IT Token, and there was no `nonce` parameter. |

Example

```json
{
    "error":"nonce_required"
}
```