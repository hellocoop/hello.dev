Documentation[SDK References](/docs/sdks/)React

# React

This packages provides Hellō button components that you can use in a React SPA.

## Setup[](#setup)

To add Hellō to your React application, in your project directory:

### Install the package[](#install-the-package)

npmpnpmyarnbun

```
npm i @hellocoop/react
```

### Add Hellō stylesheet[](#add-hellō-stylesheet)

To provide the button styling, add the below code to the `<head>` section of the `index.html`:

```
<link rel="stylesheet" href="https://cdn.hello.coop/css/hello-btn.css"/>
```

## Components[](#components)

```
import { // only import buttons used
    ContinueButton, 
    LoginButton, 
    UpdateProfileButton
} from '@hellocoop/react'
```

### Buttons[](#buttons)

`<ContinueButton/>` - provides \[ ō Continue with Hellō \]

`<LoginButton/>` - provides \[ ō Login with Hellō \]

`<UpdateProfileButton/>` - provides \[ ō Update Profile with Hellō \]

**Optional properties:**

-   `scope` - Array of [Hellō scope values](/docs/scopes/). Default `['openid', 'email', 'name', 'picture']`.
-   `targetURI` - defaults to `HELLO_DEFAULT_TARGET_ROUTE` or '/'
-   `providerHint` - Array of [provider hints](/docs/apis/wallet/). Example `['github', 'gitlab', 'email--', 'apple--', 'microsoft--']` would always recommend GitHub, GitLab, and Google.
-   `loginHint` - A hint for which user account to use. Example `name@domain.example`.
-   `domainHint` - A hint for the domain of the user's managed account. Example `domain.example`.
-   `promptLogin` - defaults to `false`. Will require the user to re-authenticate at their login provider.
-   `promptConsent` - defaults to `false`. Will require the user to review, and potentially change, released claims.

**Optional button styling properties:**

-   `color` - white | black
-   `theme` - ignore-light | ignore-dark | aware-invert | aware-static
-   `hover` - pop | glow | flare | none

Explore styling with the [button playground](/docs/buttons/#explorer)

### `<HelloProvider/>`[](#helloprovider)

By default, clicking the Hellō button would redirect to `/api/hellocoop?op=login` endpoint with the optional properties as additional query parameters. To override this behavior, wrap your app with the `<HelloProvider/>` component and pass the `config` object as a prop to the provider.

App.jsx

```
import { HelloProvider } from '@hellocoop/react';
 
//default
const config = {
    login: '/api/hellocoop?op=login'
}
 
export default function() {
    return (
        <HelloProvider config={config}>
            <main>
            ...
            </main>
        </HelloProvider>
    )
}
```

[Next.js](/docs/sdks/nextjs/ "Next.js")[Svelte](/docs/sdks/svelte/ "Svelte")