Documentation[SDK References](/docs/sdks/)Environment Vars

# Environment Variables

Consult your deployment and framework documentation on how to set these the environment variables.

## Required[](#required)

### COOKIE_SECRET[](#cookie_secret)

This environment variable must be set. It should be a different value for each environment such as development and production. This is the key used to encrypt and decrypt the cookies the client uses to manage state. It is a 32 byte random / 64 character hex value. You can generate a value with:

```
node -e "console.log(crypto.randomBytes(32).toString('hex'))"
```

### CLIENT_ID[](#client_id)

The `client_id` for your app from the [Hellō Developer Console (opens in a new tab)](https://console.hello.coop).

This environment variable must be set when using the [`hellocoop/client` (opens in a new tab)](https://github.com/hellocoop/docker-client) Docker Image or the [`@hellocoop/cdk-client` (opens in a new tab)](https://github.com/hellocoop/) CDK Construct which don't not use `hello.config.js`.

Optionally use with the SDKs to override the `client_id` value set in `hello.config.js` if you need different `client_id` values for different environments.

## Recommended[](#recommended)

### HOST[](#host)

*or HELLO_HOST*

The hostname component of the `redirect_uri` for your application. If set, the `redirect_uri` will be

```
https://${HOST}/api/hellocoop
```

unless `API_ROUTE` is set, and then it will be

```
https://${HOST}${API_ROUTE}
```

If `HOST` is not set, the client will send a script to the browser to detect the end point on the first call. This allows the client to be used by developers in development environments where the hostname is dynamically generated.

## Advanced[](#advanced)

### API_ROUTE[](#api_route)

Defaults to `/api/hellocoop`. Change if you have a different path for the Hellō Endpoint.

### COOKIE_TOKEN[](#cookie_token)

Include the vale of the Hellō cookie when calling `op=auth`. This is an encrypted value that can be used with AWS API Gateway. Details TBD.

### LOGIN_EVENT_URL[](#login_event_url)

Details TBD.

### PROVIDER_HINT[](#provider_hint)

Override the provider hint

### SAME_SITE_STRICT[](#same_site_strict)

Use `same_site=strict` in the cookies set. Will cause additional redirects, and cookies will not be passed if a user links into your site from another site.

### SCOPES[](#scopes)

Override the scope requested from Hellō.

### HELLO_*[](#hello_)

If there is a conflict with any of the variable names above that don't start with `Hello_`, you can prefix the variable name with `HELLO_`, which will take precedence over the the other value. For example `HELLO_HOST` will have precedence over `HOST`.

### HELLO_WALLET[](#hello_wallet)

Defaults to `wallet.hello.coop`. Change when using a mock server of the Wallet such as [mockin](/docs/mockin/) during development or testing.

### HELLO_DOMAIN[](#hello_domain)

Defaults to `hello.coop`. Used by Hellō for development and internal testing. Will change the domain used for the Wallet, Quickstart, and Console SPAs.

[hello.config.js](/docs/sdks/config/ "hello.config.js")[FAQs](/docs/sdks/faqs/ "FAQs")