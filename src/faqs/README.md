---
sidebar: auto
pageClass: faqs-page-class
---

# FAQs

### *1) What is Hellō?* 

Hellō is a service that simplifies registration and log in of your users. Hellō uses OpenID Connect, the same protocol used by Apple, Facebook, and Google in their social log in services. 

### *2) How much does Hellō cost?*

Hellō is currently free, and will continue to be free until the co-operative decides Hellō has reached a critical mass of adoption. Early adopters of Hellō will be rewarded to minimize or eliminate paying for Hellō in the future.

### *3) How much will Hellō cost in the future?*

Hellō's business model is to charge developers an interchange fee of a few pennies for each new verified claim a user releases to an application. Hellō will not charge for log in or for active users. As Hellō starts to generate revenue in excess of expenses, Hellō will lower its fees.

### *4) How do I get started using Hellō?*

Check out the [Using Hellō](/documentation/using-hello.html#_1-app-registration) documentation. 


### *5) What types of applications is Hellō suitable for?*

Hellō is currently only suitable for new applications wanting to sign up individual users. Hellō is not an enterprise identity solution where an enterprise wants to manage which applications are available to users.

### *6) Why is Hellō only intended for new applications?*

New applications have no existing user pool to integrate with. Since there is no existing investment in registration and log in, the Hellō value proposition to a new application is very strong. In the future, as Hellō starts to achieve a critical mass of users, we will provide integration features for existing (brown field) applications.

### *7) What is a publisher?*

A publisher is a group of developers and testers working on one or more applications managed by an administrator. The publisher abstraction allows you to have multiple apps that all receive the same `sub` subject identifier for a given user, so that you can provide user's a holistic experience across all of your apps if desired.

### *8) What is the difference between the administrator, developers, and testers?*

- The administrator can invite and delete developers and testers, create and delete applications, and update applications. You can be an administrator of only one publisher.
- Developers can invite and delete testers, and can update applications.
- Testers can access development redirect URIs so they can test applications. The administrator and developers also have access to development redirect URIs.

### *9) What is the difference between development and production redirect URIs?*

Hellō will only allow a publisher's administrator, developers, and testers to access an application's development URIs. Other users will be denied access. Localhost addresses are not permitted in production URIs.

### *10) Which OpenID Connect flows does Hellō support?*

Unlike most social providers, Hellō supports all the redirect flows. We recommend the `id_token` flow if that choice is available to you as you will not need to manage a client secret nor implement [PKCE]. Hellō also supports the `code` flow which requires PKCE or a client secret (ideally both). The `code` flow will return both an `id_token` and an `access_token`, the later can be used to call the Hellō `user_info_endpoint` if you are using an integration that only works that way.

### *11) What does Hellō provide me to identify my users?*

We recommend you use the `sub` claim in the ID Token, which is a GUID. The OpenID Connect ID Token specifies the `iss` and `sub` claim identify the user, but as the `sub` claim is a globally unique, the `iss` claim is redundant. 

### *12) Why should I use the `sub` claim to identify my users instead of `email`?*

The `sub` value is a globally unique identifier that you always receive back for the same user across all of a publisher's applications. The `email` is not guaranteed to be unique between users as some users share email address, and many users have multiple email addresses. You no longer require the user's email for account recovery as that is managed by Hellō, and your app could be more privacy friendly by not requiring an email, reducing compliance requirements. We believe that the `sub` claim is not PII as it is not shared with any other party -- but you should consult your own compliance counsel.

### *13) What claims will I receive back?*

You will receive back all claims for all the scopes you requested. We suggest you only ask for what you need, and not until you need it. Hellō makes it easy for you to incrementally request information.

### *14) What can I do with the picture URL I receive?*

You can use the picture URL as the user's profile picture. The user may release a URL that resolves to be a user's social media profile picture, and the returned image will change when the user changes their social media profile picture. 

### *15) How can users update the profile information I received from Hellō? For example, the user wants to change their profile picture or email?*

You can send the user back to Hellō where the user can select different claims. To see this in action, see the:

<button class="hello-btn hello-btn-white-and-static" data-label="ō&nbsp;&nbsp;&nbsp;Update Profile with Hellō"></button> 

functionality in the [GreenfieldDemo.com](https://greenfielddemo.com) demo app.


### *15) How do I tell Hellō the user wants to update the profile they have at my application?*

You include the parameter `prompt` set to `consent`, or include `profile_update` as an additional scope. Although using the `prompt` parameter is more aligned with the OpenID Connect standard, many libraries and service providers do not support setting the `prompt` parameter, but most support arbitrary scopes.


### *16) Why the name Hellō?*
We wanted a human friendly name rather than a technical term such as **log in** or **sign in**. The word **hello** was popularized in our first virtual interactions — what we said when we answered the phone. It is a globally recognized word with a common meaning — and it is the start of a conversation. When a user clicks Hellō, they are starting a conversation with an application. 

### *17) What does the ō mean in Hellō?*

The letter `o` with a macron is symbolic of the open and global nature of Hellō, and makes the name distinctive.

### *18) What if I don't want to use Hellō sometime in the future?*

If you are worried that you may not want to use Hellō in the future, we recommend that you request either a verified email or phone for your users. If you decide to stop using Hellō, you can migrate to sending your user's a one time password ([OTP](https://en.wikipedia.org/wiki/One-time_password)) or [magic link](https://postmarkapp.com/blog/magic-links) for them to log in.
