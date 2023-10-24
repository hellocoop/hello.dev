# UX Reference

## Buttons

You can use [standard, Hellō styled buttons](./getting-started#2-standard-hellō-buttons), or 

You can [style your buttons](./getting-started#3-custom-button-label). or use [standard, Hellō styled buttons](./getting-started#2-standard-hellō-buttons) that include a button explorer to show the different styles, hover effects, and locales.

## @rohanharikr: 
- the button height looks to change with different locales, and the Portuguese is not included in the locales.

- please include table(s) for the different classes and a short description

## Logos

The Hellō Wallet is a theme aware web application. Depending on your logo, you may want to provide both a light and dark themed logo for Hellō to present to your users. The [Hellō Developer Console](https://console.hello.coop/) gives you a preview of what the user will be presented with.

Hellō does not force an aspect ratio of your logo in the consent page. The maximum display area is 160px x 64px. We will scale your logo to fit in that display area. Your file can be up to 150kB and we support .png, lgif, .jpg/.jpeg, .webp, and .apng formats.


## Provider Hint

When Hellō does not know the user's preferred provider (new user or new browser), they are presented with a recommended list of providers to choose from, with the option to show all the other supported providers. This minimizes the risk that a new user is overwhelmed by all the available options, while still providing choice.

You can change which providers are recommended to better align with your users' preferences by passing a `provider_hint` query parameter in your authorization request.  You add providers by providing one or more space (or `+` in URL) separated slugs: 

<p style="background: #282c34; color: white; word-break: break-all; border-radius: 6px; padding:  1.25rem 1.5rem; font-weight: 500; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
  https://wallet.hello.coop/authorize<br>
  ?{...}<br>
  &<span style="color: #f8c555;">provider_hint</span>=<span style="color: #7ec699;">discord+github</span>
</p>

You can demote a default provider by suffixing the slug with `--`.

<p style="background: #282c34; color: white; word-break: break-all; border-radius: 6px; padding:  1.25rem 1.5rem; font-weight: 500; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
  https://wallet.hello.coop/authorize<br>
  ?{...}<br>
  &<span style="color: #f8c555;">provider_hint</span>=<span style="color: #7ec699;">google--</span>
</p>

**Provider Defaults** 

| Platform     | Default provider_hint values  |
| -----------  | ----------------------------- |
| Default      | `google email passkey¹`       |
| macOS/iOS    | `apple google email passkey¹` |
| Windows      | `microsoft google email`      |

¹ Mobile devices where passkey is supported

**Possible slug values**

`apple google discord facebook github gitlab`<br/>
` twitch twitter tumblr mastodon microsoft line qrcode wordpress yahoo `<br/>
`email phone ethereum passkey`

You can see how the `provider_hint` functionality works in the <a href="https://playground.hello.dev" target="_blank">Hellō Playground</a>
