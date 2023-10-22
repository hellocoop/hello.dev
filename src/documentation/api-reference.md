---
sidebarDepth: 1
---

# API Reference

## Quickstart API

[Quickstart](https://quickstart.hello.coop) accelerates getting you up and running with Hellō. 

Software supporting Hellō Quickstart redirects the browser to the the Quickstart SPA (Single Page App) passing configuration parameters for the application. You then log into Quickstart with your Hellō Wallet (creating a wallet if you don't have one) and then confirm the name of your new application or select an existing one. Quickstart then provisions or updates your application and returns the client_id your application can use with Hellō.

You can add Hellō Quickstart to a sample application, plug-in, or other software module with the web redirect API below.

### Launching Quickstart 

**You  load the [Quickstart App ](https://quickstart.hello.coop/) with the following query parameters:**

|Name||Description|
|---|---|---|
|`response_uri`|Required|URI that Quickstart will redirect to with the `client_id` query parameter|
|`suffix`|Optional|String that will be appended to the suggested name (eg: John's + suffix) for an app to be created. Defaults to "Application"|
|`name`|Optional|Name of the application (`suffix` param is ignored if `name` param is provided)|
|`tos_uri`|Optional|URI to the Terms of Service|
|`pp_uri`|Optional|URI to the Privacy Policy|
|`image_uri`|Optional|URI to the app logo|
|`dark_image_uri`|Optional|URI to the dark theme app logo, which is shown if dark theme is detected in the browser|
|`redirect_uri`|Optional|One or more space separated OAuth `redirect_uri` values to be added to the Production Redirect URIs `http:\\localhost:*` and `http:\\127.0.0.1` Development Redirect URIs are enabled by default|
|`integration`|Optional|Name of integration using Quickstart|

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

[Go to Quickstart App ](https://quickstart.hello.coop/)

## Admin API

This API is used by [Console](https://console.hello.coop) and [Quickstart](https://quickstart.hello.coop) to manage Hellō Publishers & Applications. Please contact us if you would like to integrate Hellō Admin APIs into your management console.

<!-- [Explore Admin API ](https://admin.hello-sandbox.net/documentation/explorer/) -->
