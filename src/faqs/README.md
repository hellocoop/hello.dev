---
sidebar: auto
---

# FAQs

<div id="faqs">
<!-- FAQs should be below this -->


### *1) What is Hellō?* 

### *2) How much does Hellō cost?*

Hellō is currently free, and will continue to be free until the co-operative decides Hellō has reached a critical mass of adoption. Early adopters of Hellō will be rewarded to minimize or eliminate paying for Hellō in the future.

### *3) How much will Hellō cost in the future?*

Hellō's business model is to charge developers an interchange fee of a few pennies for each new verified claim a user releases to an application. Hellō will not charge for log in or for active users. As Hellō starts to generate revenue in excess of expenses, Hellō will lower its fees.

### *4) How do I get started using Hellō?*

### *5) What types of applications is Hellō suitable for?*

Hellō is currently only suitable for new applications. Hellō is for individual users -- it not an enterprise identity solution.

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

This identifier is the same for all of a publisher's applications. Each publisher will have a different identifier for the same user.

### *11) What scopes will I receive back?*

XXXXX

### *12) What can I do with the picture URL I receive?*

XXXX - 
### *13) What does the `update_profile` scope do?*

<br/>See <button style="background-color: #303030; color: white; border: none; font-weight: 500; padding: 0.5rem 0.7rem; font-size: 0.8rem; border-radius: 0.4rem; font-size">ō Update Profile with Hellō</button> functionality in the [GreenFieldDemo.com](https://greenfielddemo.com)

### *14) Why is `update_profile` a scope instead of a XXXXX value?*

Using XXX would be more aligned with the spirit of the OpenID Connect standard, but XXX is not a well supported option in libraries and service providers, but you can set any value in `scope`. We made `update_profile` a scope so that the functionality was broadly available.


### *XX) What is the ō mean in Hellō?*

- open
- international
- distinctive

### *XX) Why the name Hellō?*

- human friendly name rather than a technical term such as log in or sign in
- it is a start of a conversation with an application -- the user may or may not want to continue when they understand the require
- word was popularized in first virtual human interactions -- what you said when you answered the phone

<!-- FAQs should be above this -->
</div>
