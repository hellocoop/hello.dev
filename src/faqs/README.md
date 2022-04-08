---
sidebar: auto
---

# FAQs

<div id="faqs">
<!-- FAQs should be below this -->


### *1) What is Hellō?* 

Hellō is a service that simplifies registration and log in of your users. Hellō uses OpenId Connect, the same protocol used by Apple, Facebook, and Google in their social login services. 

### *2) How much does Hellō cost?*

Hellō is currently free, and will continue to be free until the co-operative decides Hellō has reached a critical mass of adoption. Early adopters of Hellō will be rewarded to minimize or eliminate paying for Hellō in the future.

### *3) How much will Hellō cost in the future?*

Hellō's business model is to charge developers an interchange fee of a few pennies for each new verified claim a user releases to an application. Hellō will not charge for log in or for active users. As Hellō starts to generate revenue in excess of expenses, Hellō will lower its fees.

### *4) How do I get started using Hellō?*

Check out the [Using Hellō](/documentation/using-hello.html#_1-app-registration) documentation. 


### *5) What types of applications is Hellō suitable for?*

Hellō is currently only suitable for new applications. Hellō is for individual users -- it is not an enterprise identity solution.

### *6) Why is Hellō only intended for new applications?*

New applications have no existing user pool to integrate with. Since there is no existing investment in registration and log in, the Hellō value proposition to a new application is very strong. In the future, as Hellō starts to achieve a critical mass of users, we will provide integration features for existing (brown field) applications.

### *7) What is a publisher?*

A publisher is a group of developers and testers working on one or more applications managed by an administrator. The publisher abstraction allows you to have multiple apps that all receive the same `sub` subject identifier for a given user, so that you can provide user's a holistic experience across all of your apps if desired.

### *8) What is the difference between the administrator, developers, and testers?*

- The administrator can invite and delete developers and testers, create and delete applications, and update applications. You can be an administrator of only one publisher.
- Developers can invite and delete testers, and can update applications.
- Testers can access development redirect URIs so they can test your applications. The administrator and developers also have access to development redirect URIs.

### *9) What is the difference between development and production redirect URIs?*

Hellō will only allow a publisher's administrator, developers, and testers to access an application's development URIs. Other users will be denied access. Localhost addresses are not permitted in production URIs.

### *10) Why should I use the `sub` claim to identify my users?*

The `sub` value is a globally unique identifier that you always receive back for the same user across all of a publisher's applications. Using the `sub` claim rather than an email address allows your users to Each publisher will have a different identifier for the same user.

### *11) What scopes will I receive back?*

You will receive back all scopes you requested.

### *12) What can I do with the picture URL I receive?*

You can use the picture URL as the user's profile picture. The user may release a URL that resolves to be a user's social media profile picture, and the returned image will change when the user changes their social media profile picture. 

### *13) What does the `profile_update` scope do?*

The `profile_update` scope informs Hellō that you would like Hellō to prompt the user to review what claims are released back to your app. Providing a button for the user to update their profile and including the `profile_update` scope in the request allows you to let Hellō obtain new claims for your users when they want to update their profile such as change their verified email or profile picture. To see it in action, see the:

<button class="hello-btn-light">ō Update Profile with Hellō</button> 

functionality in the [GreenfieldDemo.com](https://greenfielddemo.com) demo app.

### *14) Why is `profile_update` a scope instead of a `prompt` value?*

Using the `prompt` parameter would be more aligned with the spirit of the OpenID Connect standard, by setting `prompt` to `consent`, but setting the `prompt` parameter is not a well supported option in libraries and service providers, and the `consent` value is not specified as being an update flow. We chose to offer `profile_update` as scope so that the functionality was broadly available across libraries and service providers.


### *15) Why the name Hellō?*
We wanted a human friendly name rather than a technical term such as **log in** or **sign in**. The word **hello** was popularized in our first virtual interactions — what we said when we answered the phone. It is a globally recognized word with a common meaning — and it is the start of a conversation. When a user clicks Hellō, they are starting a conversation with an application. 

### *16) What does the ō mean in Hellō?*

The letter `o` with a macron is symbolic of the open and global nature of Hellō, and makes the name distinctive.

### *17) What if I don't want to use Hellō sometime in the future?*

We recommend that you request either a verified email or phone for your users. If you decide to stop using Hellō, you can migrate to sending your user's a one time password ([OTP](https://en.wikipedia.org/wiki/One-time_password)) or [magic link](https://postmarkapp.com/blog/magic-links) for them to log in.


----


---
sidebar: auto
---

# FAQs

<div id="faqs">
<!-- FAQs should be below this -->


### *1) What is Hellō?* 

Hellō is a service that simplifies registration and log in of your users. Hellō uses OpenId Connect, the same protocol used by Apple, Facebook, and Google in their social log in services. 

### *2) How much does Hellō cost?*

Hellō is currently free, and will continue to be free until the co-operative decides Hellō has reached a critical mass of adoption. Early adopters of Hellō will be rewarded to minimize or eliminate paying for Hellō in the future.

### *3) How much will Hellō cost in the future?*

Hellō's business model is to charge developers an interchange fee of a few pennies for each new verified claim a user releases to an application. Hellō will not charge for log in or for active users. As Hellō starts to generate revenue in excess of expenses, Hellō will lower its fees.

### *4) How do I get started using Hellō?*

Check out the [Using Hellō](/documentation/using-hello.html#_1-app-registration) documentation. 


### *5) What types of applications is Hellō suitable for?*

Hellō is currently only suitable for new applications. Hellō is for individual users -- it is not an enterprise identity solution.

### *6) Why is Hellō only intended for new applications?*

New applications have no existing user pool to integrate with. Since there is no existing investment in registration and log in, the Hellō value proposition to a new application is very strong. In the future, as Hellō starts to achieve a critical mass of users, we will provide integration features for existing (brown field) applications.

### *7) What is a publisher?*

A publisher is a group of developers and testers working on one or more applications managed by an administrator. The publisher abstraction allows you to have multiple apps that all receive the same `sub` subject identifier for a given user, so that you can provide user's a holistic experience across all of your apps if desired.

### *8) What is the difference between the administrator, developers, and testers?*

- The administrator can invite and delete developers and testers, create and delete applications, and update applications. You can be an administrator of only one publisher.
- Developers can invite and delete testers, and can update applications.
- Testers can access development redirect URIs so they can test your applications. The administrator and developers also have access to development redirect URIs.

### *9) What is the difference between development and production redirect URIs?*

Hellō will only allow a publisher's administrator, developers, and testers to access an application's development URIs. Other users will be denied access. Localhost addresses are not permitted in production URIs.

### *10) Why should I use the `sub` claim to identify my users?*

The `sub` value is a globally unique identifier that you always receive back for the same user across all of a publisher's applications. Using the `sub` claim rather than an email address allows your users to Each publisher will have a different identifier for the same user.

### *11) What scopes will I receive back?*

You will receive back all scopes you requested.

### *12) What can I do with the picture URL I receive?*

You can use the picture URL as the user's profile picture. The user may release a URL that resolves to be a user's social media profile picture, and the returned image will change when the user changes their social media profile picture. 

### *13) What does the `profile_update` scope do?*

The `profile_update` scope informs Hellō that you would like Hellō to prompt the user to review what claims are released back to your app. Providing a button for the user to update their profile and including the `profile_update` scope in the request allows you to let Hellō obtain new claims for your users when they want to update their profile such as change their verified email or profile picture. To see it in action, see the:

<button class="hello-btn-light">ō Update Profile with Hellō</button> 

functionality in the [GreenfieldDemo.com](https://greenfielddemo.com) demo app.

### *14) Why is `profile_update` a scope instead of a `prompt` value?*

Using the `prompt` parameter would be more aligned with the spirit of the OpenID Connect standard, by setting `prompt` to `consent`, but setting the `prompt` parameter is not a well supported option in libraries and service providers, and the `consent` value is not specified as being an update flow. We chose to offer `profile_update` as scope so that the functionality was broadly available across libraries and service providers.


### *15) Why the name Hellō?*
We wanted a human friendly name rather than a technical term such as **log in** or **sign in**. The word **hello** was popularized in our first virtual interactions — what we said when we answered the phone. It is a globally recognized word with a common meaning — and it is the start of a conversation. When a user clicks Hellō, they are starting a conversation with an application. 

### *16) What does the ō mean in Hellō?*

The letter `o` with a macron is symbolic of the open and global nature of Hellō, and makes the name distinctive.

### *17) What if I don't want to use Hellō sometime in the future?*

We recommend that you request either a verified email or phone for your users. If you decide to stop using Hellō, you can migrate to sending your user's a one time password ([OTP](https://en.wikipedia.org/wiki/One-time_password)) or [magic link](https://postmarkapp.com/blog/magic-links) for them to log in.


### *18) How can Hellō help me with providence?*


<!-- FAQs should be above this -->
</div>
