Documentation[OpenID Connect](/docs/oidc/)Configuration

# OpenID Config

Many platforms have a generic OpenID Connect (OIDC) plug-in / module / configuration. To use Hellō with these platforms you will need to copy and paste configuration information between Hellō and the platform. We suggest having browser windows open with both the Hellō console and the platform administrative console.

### Hellō Configuration[](#hellō-configuration)

The platform will need the Hellō configuration. Some platforms will retrieve the configuration from the Hellō [`openid-configuration` (opens in a new tab)](https://issuer.hello.coop/.well-known/openid-configuration) file, or you may need to enter the values in:

Parameter

URL

`openid-configuration`

```
https://issuer.hello.coop/.well-known/openid-configuration
```

`issuer`

```
https://issuer.hello.coop
```

`authorization_endpoint`

```
https://wallet.hello.coop/authorize
```

`token_endpoint`

```
https://wallet.hello.coop/oauth/token
```

`userinfo_endpoint`

```
https://wallet.hello.coop/oauth/userinfo
```

### Client ID[](#client-id)

The platform will need the client id from the Hellō console.

### Client Secret[](#client-secret)

Most platforms will require a client secret. You can generate one or more in the [Hellō console (opens in a new tab)](https://console.hello.coop).

### Redirect URI[](#redirect-uri)

Hellō will need the redirect URI from the platform. This is where Hellō will redirect the user after interacting at Hellō.

### Scopes[](#scopes)

The platform will have a place to specify the scopes that you would like to request from the user. See [Hellō Claims](/docs/scopes/) for supported scopes.

### Hellō Buttons[](#hellō-buttons)

There will be some mechanism for the Hellō button to initiate the authentication flow.

In the future we will have more specific instructions for popular platforms, as well as Hellō plugins / modules that only require installation and minimal configuration. If you are interested in writing a plug-in, please reach out [contact@hello.coop](mailto:contact@hello.coop?subject=Hell%C5%8D+Plug-in+Inquiry).

[ID Token](/docs/oidc/token/ "ID Token")[Error Responses](/docs/oidc/errors/ "Error Responses")