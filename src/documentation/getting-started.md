# Getting Started

To use Hellō in your app, you will need to register your app, and add a Hellō button. 

If you are writing your own application, integrating Hellō is straight forward and does not require any frameworks or third party libraries.

If you are configuring a platform to use Hellō, you will need to copy and paste values between the Hellō console and the platforms administrative console.

In the future we will have plug-ins for popular platforms that will simplify using Hellō. If you are interested in writing a plug-in, please reach out [contact@hello.coop](mailto:contact@hello.coop?subject=Hellō+Plug-in+Inquiry).

## 1. App Registration

To use Hellō, register your application at [console.hello.dev](https://console.hello.dev/). You can start developing with just the **Client ID** and the defaults, which includes the **Development Redirect URIs** `http://localhost:*` and `http://127.0.0.1:*`. When you are ready to preview what is presented to users, provide the **Name**, **Logo**, and URLs for **Terms of Service** & **Privacy Policy**.  When you are ready for public access, provide your **Production Redirect URI(s)**.

## 2. Hellō Buttons

To add a Hellō Button to your page:

<b>2.1</b> Include a link to the Hellō stylesheet in the `<head>` of your document for button styling.

```html
<head>
  ...
  <link href="https://cdn.hello.coop/css/hello-button.css" rel="stylesheet">
</head>
```

<b>2.2</b> Include the HTML for the Hellō Button in your page:

<div style="width: 100%; overflow-x: auto;">
  <hello-btn-explorer v-pre/>
</div>

If you don't want to use the Hellō stylesheet, the Hellō button is either charcoal (#303030) on white, or white on charcoal. Note that the Hellō logo `ō` is an `o` with a [macron](https://en.wikipedia.org/wiki/Macron_(diacritic)). You can use the `ō` character if you have `<meta charset="UTF-8">` in your page `<head>` element (best practice for HTML documents). For reference, the UTF-8 encoding is`0xC5 0x8D` and the HTML markup is `&omacr`.

## 3. Select Claims

You request claims from Hellō by including a scope for that claim in your request. Any claims you request from Hellō are required claims, IE the user will need to provide a value. Hellō only supports verified email and phone claims. Unverified email and phone are not supported. [Hellō Claims](/documentation/hello-claims.html) provides a full list of supported scopes and associated claims. 

Hellō will always return the `sub` claim, a globally unique identifier in the form of a GUID, that you can use to identify the user across any apps under your publisher. The `sub` claim is unique to your publisher for a given user. Other publishers will receive a different `sub` claim for the user.

Note that it is best practice to only request the claims you require. For example, you may only need a preferred name to address the user initially, and a verified email address when they would like a notification. Hellō makes it easy to do incremental consent and request additional claims once you need them.

## 4. Add Hellō to your application

If you are writing your own application, see [Integrating Hellō](/documentation/Integrating-hello.html). If you are configuring Hellō in a platform, see [Hellō & Platforms](/documentation/hello-platforms.html)

---