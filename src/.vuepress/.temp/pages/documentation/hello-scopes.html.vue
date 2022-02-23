<template><h1 id="hello-scopes" tabindex="-1"><a class="header-anchor" href="#hello-scopes" aria-hidden="true">#</a> Hellō Scopes</h1>
<p>You include scopes in the request for the information (claims) you would like Hellō to return about the user. Unlike other providers, Hellō will always provide a value for any requested scope. Hellō will always gather user consent before releasing information to you.</p>
<p>When requesting multiple scopes, separate them with a space. The space will often be converted to a <code>+</code> when URL Encoding the parameters.</p>
<p>Following are the scopes currently supported by Hellō. These are standard OpenID Connect scopes/claims with the exception of <code>profile_update</code>:</p>
<table>
<thead>
<tr>
<th>Scope</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>openid</code></td>
<td>This scope is a no-op, and is always returned. If you don't want any other claims, provide just this one.</td>
</tr>
<tr>
<td><code>name</code></td>
<td>Full / legal name</td>
</tr>
<tr>
<td><code>nickname</code></td>
<td>Preferred name</td>
</tr>
<tr>
<td><code>given_name</code></td>
<td>AKA First name</td>
</tr>
<tr>
<td><code>family_name</code></td>
<td>AKA Last name</td>
</tr>
<tr>
<td><code>email</code></td>
<td>A verified email address. <code>email_verified=true</code> will always be returned.</td>
</tr>
<tr>
<td><code>phone</code></td>
<td>A verified phone number. <code>phone_verified=true</code> will always be returned.</td>
</tr>
<tr>
<td><code>picture</code></td>
<td>A URL to a profile picture.</td>
</tr>
<tr>
<td><code>profile_update</code></td>
<td>Indicates the user will be prompted to select new profile information.<br/>See <button style="background-color: #303030; color: white; border: none; font-weight: 500; padding: 0.5rem 0.7rem; font-size: 0.8rem; border-radius: 0.4rem; font-size">ō Update Profile with Hellō</button> functionality in the <a href="https://greenfielddemo.com" target="_blank" rel="noopener noreferrer">GreenFieldDemo.com<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<p>We are planning to offer the following scopes as well:</p>
<table>
<thead>
<tr>
<th>Scope</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>github</code></td>
<td>The user's GitHub profile url.</td>
</tr>
<tr>
<td><code>linkedin</code></td>
<td>The user's LinkedIn profile url.</td>
</tr>
<tr>
<td><code>ethereum</code></td>
<td>The user's ethereum address.</td>
</tr>
</tbody>
</table>
</template>
