# UX Reference

## Provider Hint

When Hellō does not know the user's preferred provider (new user or new browser), they are presented with a recommended list of providers to choose from, with the option to show all the other supported providers. This minimizes the risk that a new user is overwhelmed by all the available options, while still providing choice.

If would like to change which providers are recommended to better align with your users' preferences, you can pass a `provider_hint` query parameter in your authorization request.  You add providers by providing one or more space separated slugs: 

<p style="background: #282c34; color: white; word-break: break-all; border-radius: 6px; padding:  1.25rem 1.5rem; font-weight: 500; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
  https://wallet.hello.coop/authorize<br>
  ?{...}<br>
  &<span style="color: #f8c555;">provider_hint</span>=<span style="color: #7ec699;">discord github</span>
</p>

You can demote a default provider by suffixing the slug with `--`.

<p style="background: #282c34; color: white; word-break: break-all; border-radius: 6px; padding:  1.25rem 1.5rem; font-weight: 500; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
  https://wallet.hello.coop/authorize<br>
  ?{...}<br>
  &<span style="color: #f8c555;">provider_hint</span>=<span style="color: #7ec699;">google--</span>
</p>

## Recommended Provider Defaults 

| Platform     | Default provider_hint values  |
| -----------  | ----------------------------- |
| Default      | `google email passkey¹`       |
| macOS/iOS    | `apple google email passkey¹` |
| Windows      | `microsoft google email`      |

¹ Mobile devices where passkey is supported

## Possible slug values

`apple google discord facebook github gitlab`<br/>
` twitch twitter tumblr mastodon microsoft line qrcode wordpress yahoo `<br/>
`email phone ethereum passkey`

You can see how the `provider_hint` functionality works in the <a href="https://playground.hello.dev" target="_blank">Hellō Playground</a>
