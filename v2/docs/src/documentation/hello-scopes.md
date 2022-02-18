# Hellō Scopes

You include scopes in the request for the information (claims) you would like Hellō to return about the user. Unlike other providers, Hellō will always provide a value for any requested scope.

When requested multiple scopes, separate them with a space. The space will often be converted to a `+` when URL Encoding the parameters.

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
|`profile_update`|Indicates the user will be prompted to select new profile information. See the `ō Update Profile with Hellō` button functionality in the [Green Field Demo](https://greenfielddemo.com)|