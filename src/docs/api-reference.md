

# API Reference

## Quickstart API

> This documenation is for the URL based API. For the Node.js CLI and SDK see [SDK Reference | Quickstart](./sdk-reference#quickstart)

[Quickstart](https://quickstart.hello.coop) accelerates getting a developer up and running with apps that use Hellō. The [Hellō Login](https://wordpress.org/plugins/hello-login/) WordPress plug-in and [Hellō Next.js Starter](https://hello-nextjs-starter.vercel.app) app use Hellō Quickstart.

> The [`@hellocoop/quickstart`](https://www.npmjs.com/package/@hellocoop/quickstart) NPM package is a Node.js CLI and SDK that starts a local web server to launch the Quickstart SPA and provides additional functionality to configure an application using Hellō. See [SDK Reference | Quickstart](./api-reference#quickstart-api) for details. 


Software supporting Hellō Quickstart redirects the browser to the the Quickstart SPA (Single Page App) passing configuration parameters for the application. You then log into Quickstart with your Hellō Wallet (creating a wallet if you don't have one) and then confirm the name of your new application or select an existing one. Quickstart then provisions or updates your application and returns the client_id your application can use with Hellō.

You can add Hellō Quickstart to a sample application, plug-in, or other software module with the web redirect API below.

### Launching Quickstart 

**You load the [Quickstart App ](https://quickstart.hello.coop/) with the following query parameters:**

|Name||Description|
|---|---|---|
|`response_uri`|Optional|URI that Quickstart will redirect to with the `client_id` query parameter|
|`suffix`|Optional|String that will be appended to the suggested name (eg: John's + suffix) for an app to be created. Defaults to "Application"|
|`name`|Optional|Name of the application (`suffix` param is ignored if `name` param is provided)|
|`tos_uri`|Optional|URI to the Terms of Service|
|`pp_uri`|Optional|URI to the Privacy Policy|
|`image_uri`|Optional|URI to the app logo|
|`dark_image_uri`|Optional|URI to the dark theme app logo, which is shown if dark theme is detected in the browser|
|`redirect_uri`|Optional|One or more space separated OAuth `redirect_uri` values to be added to the Production Redirect URIs `http:\\localhost:*` and `http:\\127.0.0.1` Development Redirect URIs are enabled by default|
|`integration`|Optional|Application that started Quickstart, shown in console, defaults to `quickstart`|
|`wildcard_domain`|Optional|a boolean value indicating if wildcard domains are enabled in Development Redirect URIs|
|`provider_hint`|Optional|a space separated list of recommended providers per [provider_hint](./ux-reference#provider-hint)|

**An example URL with params to quickstart will look like this:**<br/>
*(line feeds added & URL decoded for readability)*

<p style="background: #282c34; color: white; word-break: break-all; border-radius: 6px; padding:  1.25rem 1.5rem; font-weight: 500; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
  https://quickstart.hello.coop/<br>
  ?<span style="color: #f8c555">response_uri</span>=<span style="color: #7ec699;">https://example.com/quickstart</span><br>
  &<span style="color: #f8c555;">name</span>=<span style="color: #7ec699;">Hello World</span><br>
  &<span style="color: #f8c555;">tos_uri</span>=<span style="color: #7ec699;">https://example.com/terms-of-service.html</span><br>
  &<span style="color: #f8c555;">pp_uri</span>=<span style="color: #7ec699;">https://example.com/privacy-policy.html</span><br>
  &<span style="color: #f8c555;">image_uri</span>=<span style="color: #7ec699;">https://example.com/logo.png</span><br>
  &<span style="color: #f8c555;">dark_image_uri</span>=<span style="color: #7ec699;">https://example.com/logo-dark.png</span><br>
  &<span style="color: #f8c555;">redirect_uri</span>=<span style="color: #7ec699;">https://example.com/response</span><br>
  &<span style="color: #f8c555;">integration</span>=<span style="color: #7ec699;">wordpress</span>
</p>

### Quickstart Response

On completion, the Quickstart app will load the `response_uri` with `client_id` query parameter set to the Hellō Client ID. 

<p style="background: #282c34; color: white; word-break: break-all; border-radius: 6px; padding:  1.25rem 1.5rem; font-weight: 500; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
  https://example.com/quickstart<br>
  ?<span style="color: #f8c555">client_id</span>=<span style="color: #7ec699;">ca12f47-f310-413b-b70f-4428d9448e8d</span>
</p>

Try out the [Quickstart App ](https://quickstart.hello.coop/)

## Admin API

This API is used by [Console](https://console.hello.coop) and [Quickstart](https://quickstart.hello.coop) to manage Hellō Publishers & Applications. Please contact us if you would like to integrate Hellō Admin APIs directly into your management console.


## Errors

Following are errors returned by the Hellō server when making a request, or when calling the introspection API.

### Request Errors

If there is an issue with fulfilling the request [(Step 3)](/documentation/Integrating-hello.html#_3-make-request), the response [(Step 4)](/documentation/Integrating-hello.html#_4-receive-response) will have an `error` query parameter set to one of the following string:

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

### Introspection Errors

Following are the responses from the [Token Introspection API](/documentation/Integrating-hello.html#_5-1-introspection) `https://wallet.hello.coop/oauth/introspect`

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