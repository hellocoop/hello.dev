Documentation[OpenID Connect](/docs/oidc/)Unsupported Features

# POST Authorize Request

Hellō only supports the HTTP GET method to the `https://wallet.hello.coop/authorize` endpoint and does not support HTTP POST with the parameter as the body.

# prompt=none

Hellō requires user interaction and does not support `prompt=none` and will always return the `interaction_required` error code.

# acr and acr_values

Unfortunately downstream support of `acr` has been removed from many providers. We are hopeful that support will be added back, and at that time we will add `acr` support, specifically phishing resistant authentication.

# max_age

Hellō redirects the user for all managed account logins to the downstream provider. Hellō will cache a successful personal provider response for 5 minutes.

If you require a fresh authentication, use `prompt=login` in your authorization request which will force Hellō to redirect the user to their provider, passing `prompt=login` to the down stream provider if supported.

[Error Responses](/docs/oidc/errors/ "Error Responses")[Hellō Mockin](/docs/mockin/ "Hellō Mockin")