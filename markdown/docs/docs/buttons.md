DocumentationHellō Buttons

# Hellō Buttons

This page provides details on add Hellō buttons to your web application.

## Stylesheet[](#stylesheet)

To style the Hellō button, including hover styles, add the Hellō stylesheet in the document's `<head>` section. This stylesheet is used when using HTML, React, Svelte, or Vue.

```
<head>
  <!-- ... -->
  <link href="https://cdn.hello.coop/css/hello-btn.css" rel="stylesheet"/>
</head>
```

## Explorer[](#explorer)

Explore the different styles available for Hellō buttons, then select the platform and copy the snippet to add to your application.

StyleColorblackwhiteTheme IgnoreTheme AwarelightdarkinvertstaticHoverpopglowflarenoneStateLoadinglight Modeō   Continue with Hellōdark Modeō   Continue with HellōHTMLReactSvelteVue

```
<button class="hello-btn">
  ō&nbsp;&nbsp;Continue with Hellō
</button>
```

## CSS Reference[](#css-reference)

Here are the Hellō button style classes:

Button style classes

Description

`.hello-btn-black-on-dark`

Black button with dark borders for dark backgrounds

`.hello-btn-black-and-invert`

Dynamic black/gray button for light and dark themes

`.hello-btn-black-and-static`

Black button with a dark border on dark theme, and without a border on a light theme

`.hello-btn-white-on-light`

White button with dark border for light and dark themes

`.hello-btn-white-on-dark`

Gray button for both light and dark themes

`.hello-btn-white-and-invert`

Dynamic white/black button with dark borders for light and dark themes

`.hello-btn-white-and-static`

White button with dark border on light theme, gray button on dark theme

Enhance user experience by adding interactive hover effects to your buttons.

Hover style classes

Description

`.hello-btn-hover-glow`

Subtle glowing effect on hover

`.hello-btn-hover-flare`

Captivating flare effect when hovered over

`.hello-btn-hover-none`

No hover effect applied

Clearly indicate when buttons are in a loading state with a spinner for a user-friendly experience.

Button state classes

Description

`.hello-btn-loader`

Adds a loading spinner respecting button style and hover classes

## Script[](#script)

The `hello-btn.js` script enables a tooltip and localization. To use those features, add the following `<script/>` to your document `<head/>`

```
<head>
  <!-- ... -->
  <link href="https://cdn.hello.coop/css/hello-btn.css" rel="stylesheet"/>
  <script src="https://cdn.hello.coop/js/hello-btn.js"></script>
</head>
```

### Tooltip[](#tooltip)

To display a tooltip alongside the button and educate your users about Hellō, add the following:

```
<div class="hello-container">
  <button class="hello-btn"></button>
  <button class="hello-about"></button>
</div>
```

The script automatically adds the "ō Continue with Hellō" text to the button. If you wish to override this behavior, such as changing the button label to "ō Update Email with Hellō," you can do so with the `data-label` attribute.

```
<div class="hello-container">
  <button class="hello-btn" data-label="ō&nbsp;&nbsp;&nbsp;Update Email with Hellō"></button>
  <button class="hello-about"></button>
</div>
```

### Locales[](#locales)

By default, the Hellō script localizes the button text according to the browser's language settings (`window.navigator.language`) if the [locale is supported (opens in a new tab)](https://github.com/hellocoop/wallet-i18n). However, you can override this behavior using the `lang` attribute:

```
<div class="hello-container" lang="es">
  <button class="hello-btn"></button>
  <button class="hello-about"></button>
</div>
```

To view the list of supported locales, please visit [hellocoop/wallet-i18n (opens in a new tab)](https://github.com/hellocoop/wallet-i18n).  
Don't see your locale? We encourage you to create a translation for your locale following [hellocoop/wallet-i18n (opens in a new tab)](https://github.com/hellocoop/wallet-i18n) guidelines and submit a pull request for review.

## Rolling your own[](#rolling-your-own)

You can find the CSS and JS source code at [hellocoop/button (opens in a new tab)](https://github.com/hellocoop/button).

If you want to create your own styles, the Hellō button is either charcoal (`#303030`) on white, or white on charcoal. Note that the Hellō logo ō is an o with a macron. You can use the ō character if you have `<meta charset="UTF-8">` in your page `<head>` element (best practice for HTML documents). For reference, the UTF-8 encoding is `0xC5` `0x8D` and the HTML markup is `&omacr;`.

[WordPress](/docs/quickstarts/wordpress/ "WordPress")[Hellō Scopes](/docs/scopes/ "Hellō Scopes")