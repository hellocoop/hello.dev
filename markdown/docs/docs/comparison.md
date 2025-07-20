DocumentationHellō vs ___

# Hellō vs ____

You're building a new app and wondering if you should use Hellō vs _____. The goal of this page is to help you decide. Hellō is a new paradigm in how you can add login and registration to your application, but it is not the right solution for all use cases.

## Hellō[](#hellō)

The Hellō Service is an OpenID Connect Provider. As a developer, you integrate with Hellō the same as you would Apple, Facebook, Google, or Microsoft. Unlike those services, Hellō will let you request any of the [supported claims](/docs/scopes/). For example, if you want a verified email and profile picture, Hellō will help the user acquire that data and release it to you. Once the user has provided their information to Hellō, it is available for them to reuse when they sign up to their next Hellō application.

Hellō is like an digital identity wallet for your users, where they can build up their identity and then easily share it when they want, lower the friction for them to register at new applications. Unlike other providers, Hellō's business model is to provide applications verified claims the user chooses to release, not surveillance capitalism. To address the issues of a \[central service\], Hellō is innovation in [organization (opens in a new tab)](https://www.hello.coop/pages/cooperative.html) and [data (opens in a new tab)](https://www.hello.coop/pages/data-governance.html) governance.

Having a central service for users to manage and reuse their identity can significantly lower the effort you must expend in developing a new application, and the ongoing cost of the solution. Let's dive into some details.

### *Pros*[](#pros)

-   *Cost* - Login and verified email are FREE. Unlimited MAU. We will monetize when you need / want verified information about your users. See our [pricing](/pricing/) for details on the Hellō business model.
-   *Time to Market* - With our [Quickstarts](/docs/quickstarts/) you can be fully configured and [deployed in 60 seconds (opens in a new tab)](https://blog.hello.dev/hello-in-60-seconds).
-   *Data Model* - You only need a user table. You do not need to a table for user accounts / authentication as Hellō provides you an ID Token with an identifier for the user and the claims you requested. No Passwords. No managing multiple social logins. Rare account merging as Hellō will merge social accounts for you.

### *Cons*[](#cons)

-   *External Service* - You are taking a dependency on another service.
-   *No Passwords* - If you require users to be able to use passwords, Hellō is not your solution.
-   *No DB* - Hellō does not manage your user database. Setting up your own database takes effort.

## Alternatives[](#alternatives)

### Auth0[](#auth0)

Auth0 is the gold standard in the CIAM market (Customer Identity and Access Management). They are now part of Okta, the gold standard in enterprise identity management. AWS Cognito, Google Firebase, Microsoft Entra B2C, Ory are comparable offerings with a similar vantage. Gluu and FusionAuth are similar, and also offer an open source or free options you can run yourself, which makes them similar to [Keycloak](/docs/comparison/#keycloak) (see below). The typical architectural pattern for these services is to be a separate server that you redirect your users to, the user authenticates there, and then the user is redirected back to your app. This is similar to the architectural pattern for Hellō. Unlike Hellō, your authoritative user profile and authentication data is stored on their server.

### Clerk[](#clerk)

Clerk.dev is one of a new generation of vendors that position themselves as providing "Auth". Others include Descope, Stytch, and Userfront. The new generation of solutions are more integrated with the developer app. Front end components are integrated directly into your app, and the architecture is more akin to your front end built with components from the vendor, call APIs to authenticate and get user information.

*Pros* Auth0 / Clerk

-   *Managed Service* - Authentication is managed for you. You don't have to worry about storing passwords etc. Security is hard, and unless you have experts, there is a risk you will make a mistake. You only pay for what you need, and the services will generally scale up as needed.
-   *Time to Market* - You are able to get up and running quickly as they have ready to use datastores for users, organizations, and basic access control.
-   *Lift and Shift* - You can move to and away from these solutions and your own implementation. While not trivial, it is possible to migrate passwords and re-use the same social login credentials so users can continue to log in the same way when you migrate.

*Cons* Auth0 / Clerk

-   *Cost* - Depending on your budget available per MAU, these services can be prohibitively expensive. See [pricing comparison](/docs/comparison/#0-cost) below.
-   *Data model* - While it is great to get started with the datastore provided, many apps will have other data associated with their users / customers that needs to be stored somewhere else. This requires synchronizing between their system and yours, adding entropy to your application.
-   *Complexity* - These are feature rich offerings and you likely only need to use a small subset of them. The initial setup may be quick, but there are many knobs to adjust to get the system to do what you need.

### Keycloak[](#keycloak)

Keycloak is a popular open source project written in Java that supports all popular identity protocols including OAuth 2, OpenID Connect, SAML, SCIM, and LDAP. If you are willing and have the skills to host your own infrastructure and keep the software up to date, and you need a large part of the functionality offered, Keycloak may be a good choice.

*Pros* Keycloak

-   *OSS* - Its open source. There are no licensing fees. You can adapt it to your needs if desired. You can inspect the code if you want.
-   *Cost* - You just have to pay for your team to manage and operate, and your own IT infrastructure.
-   *Functionality* - If you have to integrate a bunch of disparate systems that all speak different protocols, Keycloak can probably provide the needed functionality. As it is OSS, you enhance to better meet your needs.

*Cons* Keycloak

-   *DIY* - Security is hard. Starting with Keycloak is much better than writing your own software, but you still need to keep everything buttoned up and secure.
-   *Monolith Service* - Keycloak has a minimum infrastructure and operating service, and is challenging to scale up to multiple instances. Keycloak is written in Java. It does not have a cloud native architecture.
-   *Complex* - If you are only using a small part of the functionality, it may be overly complex and time consuming compared to other options. The breadth of functionality also provides a broad attack surface.

### NextAuth.js[](#nextauthjs)

NextAuth.js (rebranding as Auth.js) is a popular open source React framework (Svelte and Vue coming) for adding login and registration to apps build with Next.js (Auth.js supports other JavaScript based full stack platforms).

*Pros* NextAuth.js

-   *OSS* - Its open source. There are no licensing fees. You can adapt it to your needs if desired. You can inspect the code if you want.
-   *Cost* - You just have to pay for your team to manage and operate, and your own IT infrastructure.
-   *DIY DB* - Its your database. There are adapters for all popular DBs that enable you to get up and running quickly.

*Cons* NextAuth.js

-   *DIY* - You will need to keep everything updated. NextAuth initially made a wise decision to not support passwords, minimizing the attack surface. They recently started supporting passwords, dramatically increasing the account protection burden.
-   *Node.js Only* - A popular option, but not useful if you are using another language for your server.

### Write Your Own[](#write-your-own)

*Don't* This is a BAD IDEA™ unless you have an experienced team of security engineers and are operating at a scale where it is cost effective.

## Feature Comparison[](#feature-comparison)

### 0\. Cost[](#0--cost)

The cost of operating an open source option such as Keycloak or NextAuth.js varies depending on your existing infrastructure and team skills. Unlike a managed service, it does not scale to zero, and takes effort to scale up quickly.

If Hellō is a fit for your requirements, you can't beat the price:

MAU

Hellō¹

Auth0²

Clerk³

1k

**FREE**

$70/mo

$25/mo

10k

**FREE**

$700/mo

$205/mo

100k

**FREE**

CALL

$2,005/mo

¹ Login and verified email are free for unlimited MAU [Pricing](/pricing/)  
² [Auth0 B2C Essentials (opens in a new tab)](https://auth0.com/pricing)  
³ [Clerk Hobby (opens in a new tab)](https://clerk.com/pricing)  

There is also the time and cost to integrate with your app and to configure each social provider, which are covered in the next two sections.

### 1\. Auto Config[](#1--auto-config)

With the [Hellō Quickstarts](/docs/quickstarts/), you can start developing with Hellō with no manual configuration. Even if you are not using one of the Quickstarts, you are able to start building your app on your local machine after logging into the [Hellō Developer Console (opens in a new tab)](https://console.hello.coop).

When you are ready for production, you only need to set your Terms of Service and Privacy Policy URLs, drop in your logo, and set your Production Redirect URI. A process that takes minutes

![Hellō configuration](/_next/static/media/hello.218ac41f.svg)

In contrast, a production ready CIAM integration will require significant manual configuration and integration

![CIAM configuration](/_next/static/media/ciam.0a5204d9.svg)

### 2\. Zero Social Login Config[](#2--zero-social-login-config)

Hellō is an abstraction layer between your app and how the user authenticates, enabling the user to change login providers independent of your application, and providing a privacy layer between their chosen provider and your app. This architecture removes the time consuming task of registering your app at each provider you want to support as Hellō is the app registered at each social login provider.

For example, creating a developer account at Apple is an [8 step process (opens in a new tab)](https://support.appmachine.com/support/solutions/articles/80000978304-creating-an-ios-developer-account-step-by-step-guide), and then you configure your app using documentation targeted at native code implementations. Once setup, you wll need to periodically generate a new access token with the private key you created and have safely stored. You will also need to keep pay Apple the $99/yr fee to be in their developer program.

Facebook and Microsoft both have an onerous process to verify the identity of your organization so that your users are not presented with an unverified organization warning.

This removes the time consuming task of registering your app at each provider you want to support.

### 3\. Verified Email[](#3--verified-email)

If you request a verified email from Hellō for a user, you get a verified email back. Done. CIAM solutions will require configuration and user flows to acquire a verified email for each user. DIY solution will require integration with an email service such as Twillio.

### 4\. Account Merging[](#4--account-merging)

Hellō encourages users to link their different providers. We merge the user's wallets when we detect they inadvertently logged in with different providers at different apps. You no longer need to help users link their different accounts, or merge them.

In the rare case where a user merges accounts that they have independently used with your app, we provide the earlier sub as an alias in the ID Token for you to merge records if needed.

CIAM solutions offer various account merging capabilities that you need to configure and manage, sometimes on a per user basis.

### 5\. localhost development[](#5--localhost-development)

Hellō has paved the path for localhost development by enabling it by default for your team. Many of the social providers, such as Apple don't support using localhost, making development against their service challenging. The hosted CIAM solutions are an abstraction layer that enables you to use localhost with them, unlike the open source DIY solutions.

### 6\. BYO-DB[](#6--byo-db)

Hosted CIAM solutions simplify getting up and running by providing a datastore for your users' data and credentials. Not having to manage the storage of passwords is a positive. *(Not having yet-another-password is even better!)* This presents challenges when you need more that profile data to be associated with the user. You will have your own database, and you are now syncing across disparate data systems.

You use your own DB with Hellō, and since Hellō is managing account linking and not you, you only need the one table for your users. No need to be mapping a table of accounts to user profiles or a table for email verifications. See the [NextAuth.js Postgres schema (opens in a new tab)](https://next-auth.js.org/v3/adapters/typeorm/postgres) for comparison.

### 7\. Passkeys[](#7--passkeys)

[Passkeys (opens in a new tab)](https://fidoalliance.org/passkeys/) are the new, new thing in authentication. Passkeys are a significant improvement over passwords, but are yet-another-credential for the user to manage, are unfamiliar to most users, and add another dimension and complexity to login. Adding support for Passkeys should be carefully considered. Once enabled, you will need to manage the additional complexity.

In contrast, the use of passkeys is transparent to you if you use Hellō. We offer users to enroll a passkey on mobile devices, where the experience is seamless. The passkey is not an alternative to their preferred provider, it is a secure shortcut on an enrolled device that allows them to use their on device biometrics to authenticate.

### 8\. Customizable User Flow[](#8--customizable-user-flow)

Hellō only let's you select which providers are recommended to a user. You are not able to customize or reskin the UX. This is a feature. We have optimized the flow, and having a consistent flow at Hellō across applications lowers the cognitive load for the user, and removes a large amount of configuration for you.

### 9\. Passwords[](#9--passwords)

Hellō does not offer login with passwords. This is a feature. Do you really want to make your users manage yet-another-password, when they can re-use a login they already have, that has built a model on how they use the internet, and is investing millions of dollars in protecting their account?

[Credential stuffing (opens in a new tab)](https://owasp.org/www-community/attacks/Credential_stuffing) is a significant threat to any service that reaches scale, and not having to protect against credential stuffing significantly lowers the cost basis for Hellō, passing those savings on to you.

### 10\. Lift & Shift[](#10-lift--shift)

If you are looking to move from your existing auth system, Hellō is unlikely to be the right choice for you. You cannot bring your users' existing passwords, or use your existing social login client_id.

### 11\. Authorization Server[](#11-authorization-server)

A common design pattern for complex mobile applications is to use an OAuth 2.0 Authorization Server that issue the application an access token and potentially a resource token. The access tokens are presented when making API calls. As authentication solutions, neither Hellō nor NextAuth offer this functionality.

### Feature Summary Chart[](#feature-summary-chart)

Feature

Hellō

Auth0

Clerk

Keycloak

NextAuth

0

Price

**FREE**

**$$$**

**$**

**DIY**

**DIY**

1

Auto Config

❌

❌

❌

❌

2

Zero Social  
Login Config

❌

❌

❌

❌

3

Verified Email

❌

❌

4

Account Merging

⚠️

❌

⚠️

5

localhost  
development

⚠️

⚠️

6

BYO-DB

❌

❌

⚠️

⚠️

7

Passkeys

⚠️

⚠️

⚠️

⚠️

8

Customizable  
User Flow

N/A

9

Passwords

N/A

⚠️

10

Lift & Shift

❌

11

Authorization  
Server

❌

❌

[Hellō MCP Server](/docs/mcp/ "Hellō MCP Server")[Roadmap](/docs/roadmap/ "Roadmap")