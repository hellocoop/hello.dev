# Hellō Scopes

You include scopes in the request for the information (claims) you would like Hellō to return about the user. Unlike other providers, Hellō will always provide a value for any requested scope. Hellō will always gather user consent before releasing information to you. 

When requesting multiple scopes, separate them with a space. The space will often be converted to a `+` when URL Encoding the parameters.

Following are the scopes currently supported by Hellō. These are standard OpenID Connect scopes/claims with the exception of `profile_update`:

|Scope|Description|
|---|---|
|`openid`|This scope is a no-op, and is always returned. If you don't want any other claims, provide just this one.|
|`name`|Full / legal name|
|`nickname`|Preferred name|
|`given_name`|AKA First name|
|`family_name`|AKA Last name|
|`email`|A verified email address. `email_verified=true` will always be returned.|
|`phone`|A verified phone number. `phone_verified=true` will always be returned.|
|`picture`|A URL to a profile picture.|
|`profile_update`|Indicates the user will be prompted to select new profile information.<br/>See <button style="background-color: #303030; color: white; border: none; font-weight: 500; padding: 0.5rem 0.7rem; font-size: 0.8rem; border-radius: 0.4rem; font-size">ō Update Profile with Hellō</button> functionality in the [GreenFieldDemo.com](https://greenfielddemo.com)|

We are exploring offering the following scopes:

|Scope|Description|
|---|---|
|`github`|The user's GitHub profile url.|
|`linkedin`|The user's LinkedIn profile url.|
|`ethereum` |The user's ethereum address.|

We would prompt the user to link their GitHub, LinkedIn accounts, or their Ethereum Wallet.

Share your thoughts in our [Additional Scopes Discussion](https://github.com/hellocoop/hello.dev/discussions/4)