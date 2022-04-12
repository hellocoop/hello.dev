# Hellō & Platforms

Many platforms have a generic OpenID Connect (OIDC) plug-in / module / configuration. To use Hellō with these platforms you will need to copy and paste configuration information between Hellō and the platform. We suggest having browser windows open with the Hellō console and the platform administrative console.

1. The platform will need the Hellō configuration. Some platforms will retrieve the configuration from the Hellō [`openid-configuration`](https://issuer.hello.coop/.well-known/openid-configuration) file, or you may need to enter the values in: 

<div class="table-no-heading">

|||
|---|---|
|`openid-configuration`|https://issuer.hello.coop/.well-known/openid-configuration|
|`issuer`|https://issuer.hello.coop|
|`authorization endpoint` |https://consent.hello.coop/|
|`token endpoint` |https://consent.hello.coop/oauth/token|
|`userinfo_endpoint` |https://consent.hello.coop/oauth/userinfo|

</div>


2. The platform will need the client id from the Hellō console. 

3. If the platform does not support the `id_token` flow, then the platform will require a client secret, that you can generate on the Hellō console.

4. Hellō will need the redirect URI from the platform. This is where Hellō will redirect the user after interacting at Hellō.

5. The platform will have a place to specify the scopes that you would like to request from the user. See [Hellō Claims](/documentation/hello-claims.html) for supported scopes.

6. There will be some mechanism for the Hellō button to initiate the authentication flow.

In the future we will have more specific instructions for popular platforms, as well as Hellō plugins / modules that only require installation and minimal configuration. If you are interested in writing a plug-in, please reach out [contact@hello.coop](mailto:contact@hello.coop?subject=Hellō+Plug-in+Inquiry).


---
