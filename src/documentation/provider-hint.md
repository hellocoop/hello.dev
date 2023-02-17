# Provider Hint

If you want certain providers to be above the fold on the login page, you can add one or more slugs separated by space. 

<p style="background: #282c34; color: white; word-break: break-all; border-radius: 6px; padding:  1.25rem 1.5rem; font-weight: 500; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
  https://wallet.hello.coop/authorize<br>
  ?{...}<br>
  &<span style="color: #f8c555;">provider_hint</span>=<span style="color: #7ec699;">discord github</span>
</p>

You can also send providers below the fold by suffixing the slugs with `--`.

<p style="background: #282c34; color: white; word-break: break-all; border-radius: 6px; padding:  1.25rem 1.5rem; font-weight: 500; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
  https://wallet.hello.coop/authorize<br>
  ?{...}<br>
  &<span style="color: #f8c555;">provider_hint</span>=<span style="color: #7ec699;">google--</span>
</p>

Defaults:

| Platform      | Default provider_hint values |
| ----------- | ----------- |
| Default      | `google email`       |
| macOS/iOS   | `apple google email`        |
| Windows   | `microsoft google email`        |

## Possible values

`apple google discord facebook github`<br/>
`gitlab twitch twitter mastodon microsoft`<br/>
`line yahoo email phone ethereum`