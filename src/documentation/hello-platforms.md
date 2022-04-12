# Hellō & Platforms

Many platforms have a generic OpenID Connect (OIDC) plug-in / module / configuration. To use Hellō with these platforms you will need to copy and paste configuration information between Hellō and the platform. We suggest having browser windows open with the Hellō console and the platform administrative console.

1. The platform will need the client id from the Hellō console.

2. If the platform does not support the `id_token` flow, then the platform will require a client secret, that you can generate on the Hellō console.

3. Hellō will need the redirect URI from the platform.

4. The platform will have a place to specify the scopes that you would like to request from the user.

5. There will be a mechanism for the Hellō button to initiate the flow.

In the future we will have more specific instructions for popular platforms, as well as Hellō plugins / modules that only require installation and minimal configuration.

---
