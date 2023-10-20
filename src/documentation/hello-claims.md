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
|`picture`|A URL to a profile picture. [See FAQ 13](/faqs/#_13-what-can-i-do-with-the-picture-url-i-receive) for details|
| - | non-standard scopes |
|`discord`|A verified Discord username and id.|
|`github`|A verified GitHub username and id.|
|`gitlab`|A verified GitLab username and id.|
|`twitter`|A verified Twitter username and id.|
|`ethereum`|A verified ethereum address.|
|`profile_update`|The user will be prompted to release updated profile information.<br> [See FAQ 14](/faqs/#_14-how-can-users-update-the-profile-information-i-received-from-hello-for-example-the-user-wants-to-change-their-profile-picture-or-email) for details.|


## Profile Update
You can update existing claims by including the `profile_update` scope in your authorization request.
The `profile_update` scope can be utilized under the following conditions:
- You can only update a claim you have already received
- You can only update `email`, `phone`, `picture`, `discord`, `github`, `gitlab`, `twitter` or `ethereum`

For instance, to enable a user to update their email, you set `scope=openid email profile_update` in your authorization request.

## Other Scopes?

If you would like us to offer other scopes, let us know in our [Additional Scopes Discussion](https://github.com/hellocoop/hello.dev/discussions/4)

## Incremental Consent

Per the [2nd Law of Identity](https://www.identityblog.com/?p=352), Minimal Disclosure, we recommend you not request claims that are not required until they are needed. Hellō makes it easy to send the user back to Hellō to acquire additional claims by including additional scopes in a new request.
