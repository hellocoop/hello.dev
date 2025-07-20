DocumentationOverview

# Overview

Quick links to documentation sections:

[Quickstarts](/docs/quickstarts/)[Hellō Buttons](/docs/buttons/)[Hellō Scopes](/docs/scopes/)[SDK Reference](/docs/sdks/)[API Reference](/docs/apis/)[OpenIDOpenID Connect](/docs/oidc/)[Comparison](/docs/comparison/)[Roadmap](/docs/roadmap/)

## Introduction[](#introduction)

Hellō simplifies user registration and login for your application — allowing you to provide all the choices your users may want in minutes instead of hours, days or weeks.

To your application, Hellō is an [OpenID Connect (opens in a new tab)](https://openid.net/specs/openid-connect-core-1_0.html) Provider using the same protocol as social login providers such as Apple, Facebook, Google, and Microsoft. Unlike social login providers, Hellō gathers all the information you request about the user. Your users have choice on how they want to authenticate, which profile picture they want to provide you, and which email they want to verify. Hellō also lets you send the user back to Hellō if they want to update or add to their information. No need for you to implement email or phone verification, or image uploads.

Currently, Hellō is ideal for developers building **new**, **greenfield applications** where there is no requirement to integrate with existing user registration and login. In the future, we will have features that provide simple integration points.

Login providers include: Apple, Discord, Facebook, Google, GitHub, GitLab, Tumblr, Twitch, Line, Mastodon, MetaMask, Microsoft, WordPress.com, Yahoo!, WalletConnect. We also support OTP over email, and QR codes for logging into a desktop with your phone. Mobile devices will prompt the user to register a Passkey for a streamlined experience on their return.

Hellō currently supports Arabic `ar`, English `en`, French `fr`, German `de`, Hindi `hi`, Portuguese `pr`, & Spanish `es`. We welcome [translations (opens in a new tab)](https://github.com/hellocoop/wallet-i18n)!

## User Experience[](#user-experience)

1.  The user opens your website and sees the Hellō button and clicks on it.

ō   Continue with Hellō

2.  The user is redirected to the Hellō authorize page where they choose their preferred provider to log in. Popular social log in providers, email, phone, and web3 wallets are offered. The user completes logging in with their preferred provider.
    
3.  The user is prompted to provide any claims requested by your application that were not gathered by the provider they chose.
    
4.  The user is shown which claims will be released to your app. They can choose to add other claims to be release. The user clicks continue to release the claims to your app.
    
5.  The user is redirected to your app and is now logged in and your app shows the profile information received from Hellō.
    

If the user wants to update their profile, they can click an Update button for the data they would like to change, which will take them back to Hellō where they can change the claim to be release to your app, such as a new profile picture or verified email.

ō   Update Email with Hellō

You can check out the Hellō user experience with our demo at [GreenfieldDemo.com (opens in a new tab)](https://greenfielddemo.com) or our [Next.js Starter (opens in a new tab)](https://hello-nextjs-sample.vercel.app/).

## Data Flow[](#data-flow)

1.  Your app redirects the user's browser to Hellō (`https://wallet.hello.coop/authorize`) with your request.
    
2.  Hellō requests and receives authentication claims from the user's selected provider.
    
3.  The user provides Hellō any additional claims requested by your app.
    
4.  The user directs Hellō which claims to release to your app.
    
5.  Hellō redirects the user's browser back to your app with either:
    

-   an authorization code, which your app exchanges for an ID Token at the token endpoint
    
-   an ID Token containing the claims the user has chosen to release to your app, and your app verifies the ID Token is valid
    

This is a standard OpenID Connect data flow. Details in [OpenID Connect](/docs/oidc/).

[Getting Started](/docs/getting-started/ "Getting Started")