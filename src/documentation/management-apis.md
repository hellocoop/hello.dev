# Management APIs

## Quickstart

Quickstart accelerates getting up and running with Hellō. It will read an existing `client_id`, or create one.

The Quickstart SPA (Single Page App) is launched by sample apps to acquire a `client_id`. The developer will log into Hellō and authorize Quickstart to create / read publisher / apps.

### Launching Quickstart 

**You can load the [Quickstart App ](https://quickstart.hello.coop/) with the following query parameters:**

|Parameter|Description|
|---|---|
|`response_uri` *|The URI that Quickstart will redirect to with the `client_id` query parameter|
|`suffix`|A string that will be appended to the suggested name (eg: John's + suffix) for an app to be created. Defaults to "Application"|
|`name`|Name of the application (`suffix` param is ignored).|
|`tos_uri`|Terms of Service link|
|`pp_uri`|Privacy Policy link|
|`image_uri`|App logo link|
|`dark_image_uri`|App logo link for dark theme|
|`redirect_uri`|One or more OAuth space separated `redirect_uri` values to be added to the Developer Redirect URIs|

\* required

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
  &<span style="color: #f8c555;">redirect_uri</span>=<span style="color: #7ec699;">https://example.com/response</span>
</p>

### Quickstart Response

On completion, the Quickstart app will load the `response_uri` with `client_id` query parameter set to the Hellō Client ID. 

<p style="background: #282c34; color: white; word-break: break-all; border-radius: 6px; padding:  1.25rem 1.5rem; font-weight: 500; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
  https://example.com/quickstart<br>
  ?<span style="color: #f8c555">client_id</span>=<span style="color: #7ec699;">client_id=9ca12f47-f310-413b-b70f-4428d9448e8d</span>
</p>

[Go to Quickstart App ](https://quickstart.hello.coop/)

## Admin

Manage your Hellō Publishers & Applications.

[Explore Admin API ](https://example.com/)