Documentation[API References](/docs/apis/)Quickstart

# Quickstart API

[Quickstart (opens in a new tab)](https://quickstart.hello.coop) accelerates getting a developer up and running with apps that use Hellō. It returns a `client_id` by creating a new app with defaults, or selecting an existing Hellō app.

There are three mechanisms to invoke Quickstart:

1.  Load `https://quickstart.hello.coop` with query parameters, as documented below. This can be used by any configuration script that can launch a browser
2.  Run the Quickstart CLI as documented [here](/docs/sdks/quickstart/#cli-parameters).
3.  Import the `@hellocoop/quickstart` npm package as documented here.

(2) and (3) both start a local web server on an unused port and launch the default web browser to load the Quickstart Web App.

You can add Hellō Quickstart to a sample application, plug-in, or other software module with the web redirect API below.

### Launching Quickstart[](#launching-quickstart)

You load [https://quickstart.hello.coop/ (opens in a new tab)](https://quickstart.hello.coop/) with the following optional query parameters:

Name

Description

`response_uri`

URI that Quickstart will redirect to with the `client_id` query parameter if provided

`suffix`

String that will be appended to the suggested name (eg: John's + suffix) for an app to be created. Defaults to "Application"

`integration`

Application that started Quickstart, shown in console, defaults to `quickstart`

`name`

Name of the application (`suffix` param is ignored if `name` param is provided)

`tos_uri`

URI to the Terms of Service

`pp_uri`

URI to the Privacy Policy

`image_uri`

URI to the app logo

`dark_image_uri`

URI to the dark theme app logo, which is shown if dark theme is detected in the browser

`redirect_uri`

One or more space separated OAuth `redirect_uri` values to be added to the Production Redirect URIs  
`http:\\localhost:*` and `http:\\127.0.0.1` Development Redirect URIs are enabled by default

`wildcard_domain`

a boolean value indicating if wildcard domains are enabled in Development Redirect URIs

`provider_hint`

a space separated list of recommended providers per [provider_hint](/docs/apis/wallet/#provider-hint) that will be presented when logging in new users to Quickstart

### Quickstart Response[](#quickstart-response)

On completion, the Quickstart app will load the `response_uri` with the `client_id` query parameter set to the Hellō Client ID, or display the `client_id` on a completion page if no `response_uri` was provided.

Try out the [Quickstart App (opens in a new tab)](https://quickstart.hello.coop/) to see it in action.

[Invite (BETA)](/docs/apis/invite/ "Invite (BETA)")[Admin](/docs/apis/admin/ "Admin")