# Hellō Claims

You include scopes in the request for the information (claims) you would like Hellō to return about the user. Unlike other providers, Hellō will always provide a value for any requested scope. Hellō will always gather user consent before releasing information to you. 

When requesting multiple scopes, separate them with a space. The space will often be converted to a `+` when URL Encoding the parameters.


## Current Scopes

Following are the scopes currently supported by Hellō. These are standard OpenID Connect scopes/claims with the exception of `profile_update`:

|Scope|Description|
|---|---|
|`openid`|This scope is a no-op, and is always returned.<br>If you don't want any other claims, provide just this one.|
|`name`|Full / legal name.|
|`nickname`|Preferred name.|
|`given_name`|AKA First name.|
|`family_name`|AKA Last name.|
|`email`|A verified email address. `email_verified=true` will always be returned.|
|`phone`|A verified phone number. `phone_verified=true` will always be returned.|
|`picture`|A URL to a profile picture. [See FAQ 12](/faqs/#_13-what-can-i-do-with-the-picture-url-i-receive) for details|
|`profile_update`|The user will be prompted to release updated profile information.<br> [See FAQ 14](/faqs/#_14-how-can-users-update-the-profile-information-i-received-from-hello-for-example-the-user-wants-to-change-their-profile-picture-or-email) for details.|

## Potential Scopes

We are exploring offering the following scopes:

|Scope|Description|
|---|---|
|`github`|The user's GitHub profile url.|
|`linkedin`|The user's LinkedIn profile url.|
|`ethereum` |The user's ethereum address.|

We would prompt the user to link their GitHub, LinkedIn accounts, or their Ethereum Wallet.

Share your thoughts in our [Additional Scopes Discussion](https://github.com/hellocoop/hello.dev/discussions/4)

## Incremental Consent

Per the [2nd Law of Identity](https://www.identityblog.com/?p=352), Minimal Disclosure, we recommend you not request claims that are not required until they are needed. Hellō makes it easy to send the user back to Hellō to acquire additional claims by including additional scopes in a new request.