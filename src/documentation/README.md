# Overview


## Introduction

Hellō is an [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html) Provider that simplifies user registration and login for your application — allowing you to provide all the choices your users may want in hours instead of days or weeks.

Unlike other providers, Hellō gathers all the information you request about the user. Your users have choice on how they want to authenticate, which profile picture they want to provide you, and which email they want to verify. Hellō also lets you send the user back to Hellō if they want to update their profile at your site — no need for you to implement email or phone verification, or image uploads.

Currently, Hellō is ideal for developers building **new**, **greenfield applications** where there is no requirement to integrate with existing user registration and login. In the future, we will have features that provide simple integration points.


## User Experience

1. The user opens your website and sees the Hellō button and clicks on it.

<button class="hello-btn-black-and-static">ō&nbsp;&nbsp;&nbsp;Continue with Hellō</button>


2. The user is redirected to the Hellō consent page where they choose their preferred provider to log in. Popular social log in providers, email, phone, and web3 wallets are offered. The user completes logging in with their preferred provider.

3. The user is prompted to provide any claims requested by your application that were not gathered by the provider they chose.

4. The user is shown which claims will be released to your app. They can choose to add other claims to be release. The user clicks continue to release the claims to your app.

5. The user is redirected to your app and is now logged in and your app shows the profile information received from Hellō.

If the user wants to update their profile, they can click the Update Profile button, which will take them back to Hellō where they can change the claims to be release to your app, such as a new profile picture or verified email.

<button class="hello-btn-white-and-static">ō&nbsp;&nbsp;&nbsp;Update Profile with Hellō</button>


You can check out the Hellō user experience with our demo at [GreenfieldDemo.com](https://greenfielddemo.com)


## Data Flow

1. Your app redirects the user's browser to Hellō with your request.

2. Hellō requests and receives authentication claims from the user's selected provider.

3. The user provides Hellō any additional claims requested by your app.

4. The user directs Hellō which claims to release to your app.

5. Hellō redirects the user's browser back to your app with an ID Token containing the claims the user has chosen to release to your app.

6. (optional) Your app passes the ID Token to the Hellō introspection API to validate the ID Token.

