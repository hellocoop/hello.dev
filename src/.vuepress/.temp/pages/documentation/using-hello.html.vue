<template><h1 id="using-hello" tabindex="-1"><a class="header-anchor" href="#using-hello" aria-hidden="true">#</a> Using Hellō</h1>
<h2 id="_1-app-registration" tabindex="-1"><a class="header-anchor" href="#_1-app-registration" aria-hidden="true">#</a> 1. App Registration</h2>
<p>To use Hellō, register your application at <a href="https://console.hello.dev/" target="_blank" rel="noopener noreferrer">console.hello.dev<ExternalLinkIcon/></a> You can start developing with just the <strong>Client ID</strong> and the defaults. Provide the <strong>Name</strong>, <strong>Logo</strong>, and URLs for <strong>Terms of Service</strong> &amp; <strong>Privacy Policy</strong> when you are ready. The <strong>Development Redirect URIs</strong> <code>http://localhost:*</code> and <code>http://127.0.0.1:*</code> are enabled by default. Provide your <strong>Production Redirect URI(s)</strong> when you are ready for public access.</p>
<h2 id="_2-hello-buttons" tabindex="-1"><a class="header-anchor" href="#_2-hello-buttons" aria-hidden="true">#</a> 2. Hellō Buttons</h2>
<p>The button to initiate registration / login is either charcoal (#303030) on white, or white on charcoal. While the <code>ō</code> is the Hellō logo -- it is a standard UTF-8 character.</p>
<button style="background: #303030; border: none; color: white; padding: 0.6rem 1.2rem; border-radius: 0.4rem; font-size: 1rem; font-weight: 500;">
  ō Continue with Hellō 
</button>
<div class="language-html ext-html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">background</span><span class="token punctuation">:</span> #303030<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0.6rem 1.2rem<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.4rem<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 500</span><span class="token punctuation">"</span></span></span>
<span class="token punctuation">></span></span>
  ō Continue with Hellō 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre></div><button style="background: #303030; border: 1px solid; color: white; padding: 0.6rem 1.2rem; border-radius: 0.4rem; font-size: 1rem; font-weight: 500;">
  ō Continue with Hellō 
</button>
<div class="language-html ext-html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #303030<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0.6rem 1.2rem<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.4rem<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 500</span><span class="token punctuation">"</span></span></span>
<span class="token punctuation">></span></span>
  ō Continue with Hellō 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre></div><hr>
<p>You can let users update their profile at Hellō as well. Don't forget to set the <code>profile_update</code> scope which will prompt the user to decide what information to change.</p>
<button style="background: #303030; border: 1px solid; color: white; padding: 0.6rem 1.2rem; border-radius: 0.4rem; font-size: 1rem; font-weight: 500;">
  ō Update Profile with Hellō 
</button>
<h2 id="_3-create-request-url" tabindex="-1"><a class="header-anchor" href="#_3-create-request-url" aria-hidden="true">#</a> 3. Create Request URL</h2>
<p>The <strong>request URL</strong> is <code>https://consent.hello.coop/</code> and a query with the following parameters</p>
<table>
<thead>
<tr>
<th>Param</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>client_id</code></td>
<td>The <code>client_id</code> for your app from <a href="https://console.hello.dev" target="_blank" rel="noopener noreferrer">console.hello.dev<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td><code>redirect_uri</code></td>
<td>One of the redirect_uri values you registered for your app</td>
</tr>
<tr>
<td><code>scope</code></td>
<td>One or more scopes from <a href="#scopes">Hellō Scopes</a></td>
</tr>
<tr>
<td><code>nonce</code><br><span style="margin-top: 16px; display: inline-block;">(optional)</span></td>
<td>A unique string that will be included in the ID Token</td>
</tr>
<tr>
<td><code>state</code><br><span style="margin-top: 16px; display: inline-block;">(optional)</span></td>
<td>A value representing the state of your application that will be returned as a parameter in the response</td>
</tr>
<tr>
<td><code>response_mode</code><br><span style="margin-top: 16px; display: inline-block;">(optional)</span></td>
<td>One of fragment query form_post- defaults to fragment. This is how you would like Hellō will send the response.</td>
</tr>
</tbody>
</table>
<p>Here is an example request for the GreenFieldDemo app:</p>
<p style="background: #282c34; color: white; border-radius: 6px; padding:  1.25rem 1.5rem; font-weight: 500; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
  https://consent.hello.coop/<br>
  ?<span style="color: #f8c555">client_id</span>=<span style="color: #7ec699;">greenfielddemo</span><br>
  &<span style="color: #f8c555;">redirect_uri</span>=<span style="color: #7ec699;">https://greenfielddemo.com/</span><br>
  &<span style="color: #f8c555;">response_mode</span>=<span style="color: #7ec699;">fragment</span><br>
  &<span style="color: #f8c555;">nonce</span>=<span style="color: #7ec699;">10708056612481411767</span><br>
  &<span style="color: #f8c555;">scope</span>=<span style="color: #7ec699;">name+nickname+email+picture+openid</span>
</p>
<p>There is no difference between a request to register the user, or log in the user. If the user has previously released the same requested scopes to your app, they will not be prompted to release it again. If the requested scopes have changed, or the <code>profile_update</code> is provided, the user will be prompted to select what to release.</p>
<p>Hellō only supports the <a href="https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html#id_token" target="_blank" rel="noopener noreferrer">id_token<ExternalLinkIcon/></a> response type. The <code>response_type</code> parameter is ignored if provided.</p>
<p>Hellō does not support the <a href="https://openid.net/specs/openid-connect-core-1_0.html#UserInfo" target="_blank" rel="noopener noreferrer"><code>UserInfo endpoint</code><ExternalLinkIcon/></a>. All user information is included in the ID Token.</p>
<h2 id="_4-make-request" tabindex="-1"><a class="header-anchor" href="#_4-make-request" aria-hidden="true">#</a> 4. Make Request</h2>
<p>Cause the user's browser to load the <code>request URL</code> you created in <code>Step 3</code>. You can do this in the following ways:</p>
<ol>
<li>HTTP 302 redirect from the server to <code>requestURL</code></li>
<li>Set <code>window.location.href = &lt;requestURL&gt;</code> with JavaScript</li>
<li>An href link to <code>&lt;a&gt;</code> tag  (<code>&lt;a href=&lt;requestURL&gt;</code>)</li>
</ol>
<h2 id="_5-receive-response" tabindex="-1"><a class="header-anchor" href="#_5-receive-response" aria-hidden="true">#</a> 5. Receive Response</h2>
<p>If successful, the user's browser will be redirected back to your app with an <code>id_token</code> parameter and the <code>state</code> if provided. See <RouterLink to="/documentation/errors.html#request-errors">Request Errors</RouterLink> for unsuccessful responses.</p>
<p>Example ID Token</p>
<p style="background: #282c34; word-break: break-all; color: white; border-radius: 6px; padding:  1.25rem 1.5rem; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
<span style="color: #cc99cd;">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9<span style="color: white;">.</span></span><span style="color: #f8c555;">eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjcwMDIvIiwiYXVkIjoiaGVsbG9fY29uX3Rlc3QiLCJub25jZSI6IjM3ODkxNTExNzM1ODkwOTExNzEiLCJqdGkiOiI4YzFjN2NiOS1hMDVkLTQ4MzItOTk2NS0yNTQ1NzE4NzkyN2QiLCJzdWIiOiIxZmRjM2FlMy1hZWVlLTQzMTQtYThjZS05NzM2M2ExNjQwN2QiLCJzY29wZSI6WyJlbWFpbCIsIm9wZW5pZCJdLCJlbWFpbCI6ImpvaG4uc21pdGhAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlhdCI6MTY0NTAxOTU5NCwiZXhwIjoxNjQ1MDIzMTk0fQ<span style="color: white;">.</span></span><span style="color: #7ec699">qFtJ9E9Cv-9WX9NPhnaIyXde9AVZ6KZ1Wo1kCeVPWw4</span>
</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJmZWQzOTBlLThkMmYtNDE3NC1iMTM2LTBhN2U1MmM5MWUxZSJ9.eyJpc3MiOiJodHRwczovL2lzc3Vlci5oZWxsby5jb29wIiwiYXVkIjoiZ3JlZW5maWVsZGRlbW8iLCJub25jZSI6IjE2OWQwMWNmLTNkMGEtNDdkZC1hZjlmLTM0MDhiMTg4NzZkYiIsImp0aSI6IjdlN2YxMzFhLWFhZjgtNGEzZi1hYjVjLWFkZWEzZjBmZThjZSIsInB1Yl9pZCI6ImdyZWVuZmllbGRkZW1vLmNvbSIsInN1YiI6ImY5ZTIxZjBmLTlmMGUtNDFiMC1hNThiLWMyZDYzYmNjN2I0ZiIsInNjb3BlIjpbIm5hbWUiLCJuaWNrbmFtZSIsInBpY3R1cmUiLCJlbWFpbCIsIm9wZW5pZCJdLCJuYW1lIjoiRGljayBIYXJkdCIsIm5pY2tuYW1lIjoiRGljayIsInBpY3R1cmUiOiJodHRwczovL2Nkbi5oZWxsby5jb29wL2ltYWdlcy9kZWZhdWx0LXBpY3R1cmUucG5nIiwiZW1haWwiOiJkaWNrLmhhcmR0QGhlbGxvLmNvb3AiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNjQ1NTg2NjU4LCJleHAiOjE2NDU1OTAyNTh9.uw9eHjBnkoNw0_9vPW4AvuqJPeiipPGcKD39PnXS6bv4uTLqDQ3_r3odClIkCIGCm7bJvSySYbts6rhFO86HsCC-pCMzlAPU6dg8tkAx10FDrS9MHyxN-LF3gOVLdrT48fr33gRX4ng-RVqqiPiP_jUPFMfo58TRavtZJKwHaL6uk1LqqceIRERy-2ly13dWfSUyZjUOjUn262FMwXrEauNLXEd-KaDpc2eAoOCpw4EY4Dx0raQwTpOo0sO4Jj-wZNfNaqM03BKDtutbrzsHIeopomm-wd6udc35u5oxGAy7BKTg0ZRd-YQHGf0SrOtKpi_iGiCE_PmsMzXOaqwOxg
</code></pre></div><p>The <span style="color: #cc99cd; font-weight: 600; background: ;">purple</span> section is the header, the <span style="color: #f8c555; font-weight: 600;">yellow</span> section is the payload, and the <span style="color: #7ec699; font-weight: 600;">green</span> section is the signature</p>
<p>Decoded ID Token (Payload)</p>
<!-- <pre style="background: #282c34; word-break: break-all; color: white; border-radius: 6px; padding:  1.25rem 1.5rem; font-size: 0.92rem; color: #f8c555; font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;">
    {
      "iss": "http://localhost:7002/",
      "aud": "hello_con_test",
      "nonce": "3789151173589091171",
      "jti": "8c1c7cb9-a05d-4832-9965-25457187927d",
      "sub": "1fdc3ae3-aeee-4314-a8ce-97363a16407d",
      "scope": [
        "email",
        "openid"
      ],
      "email": "john.smith@gmail.com",
      "email_verified": true,
      "iat": 1645019594,
      "exp": 1645023194
    }
</pre> -->
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"header"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"alg"</span><span class="token operator">:</span> <span class="token string">"RS256"</span><span class="token punctuation">,</span>
        <span class="token property">"typ"</span><span class="token operator">:</span> <span class="token string">"JWT"</span><span class="token punctuation">,</span>
        <span class="token property">"kid"</span><span class="token operator">:</span> <span class="token string">"bfed390e-8d2f-4174-b136-0a7e52c91e1e"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"payload"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"iss"</span><span class="token operator">:</span> <span class="token string">"https://issuer.hello.coop"</span><span class="token punctuation">,</span>
        <span class="token property">"aud"</span><span class="token operator">:</span> <span class="token string">"greenfielddemo"</span><span class="token punctuation">,</span>
        <span class="token property">"nonce"</span><span class="token operator">:</span> <span class="token string">"169d01cf-3d0a-47dd-af9f-3408b18876db"</span><span class="token punctuation">,</span>
        <span class="token property">"jti"</span><span class="token operator">:</span> <span class="token string">"7e7f131a-aaf8-4a3f-ab5c-adea3f0fe8ce"</span><span class="token punctuation">,</span>
        <span class="token property">"pub_id"</span><span class="token operator">:</span> <span class="token string">"greenfielddemo.com"</span><span class="token punctuation">,</span>
        <span class="token property">"sub"</span><span class="token operator">:</span> <span class="token string">"f9e21f0f-9f0e-41b0-a58b-c2d63bcc7b4f"</span><span class="token punctuation">,</span>
        <span class="token property">"scope"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"name"</span><span class="token punctuation">,</span>
            <span class="token string">"nickname"</span><span class="token punctuation">,</span>
            <span class="token string">"picture"</span><span class="token punctuation">,</span>
            <span class="token string">"email"</span><span class="token punctuation">,</span>
            <span class="token string">"openid"</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Dick Hardt"</span><span class="token punctuation">,</span>
        <span class="token property">"nickname"</span><span class="token operator">:</span> <span class="token string">"Dick"</span><span class="token punctuation">,</span>
        <span class="token property">"picture"</span><span class="token operator">:</span> <span class="token string">"https://cdn.hello.coop/images/default-picture.png"</span><span class="token punctuation">,</span>
        <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"dick.hardt@hello.coop"</span><span class="token punctuation">,</span>
        <span class="token property">"email_verified"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">"iat"</span><span class="token operator">:</span> <span class="token number">1645586658</span><span class="token punctuation">,</span>
        <span class="token property">"exp"</span><span class="token operator">:</span> <span class="token number">1645590258</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_6-validate-id-token" tabindex="-1"><a class="header-anchor" href="#_6-validate-id-token" aria-hidden="true">#</a> 6. Validate ID Token</h2>
<p>You can validate the <code>id_token</code> with an introspection API call or perform validation yourself per <a href="https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation" target="_blank" rel="noopener noreferrer">OpenID Connect 3.1.3.7<ExternalLinkIcon/></a></p>
<p>Many OpenID Connect libraries will include ID Token validation.</p>
<h3 id="introspection" tabindex="-1"><a class="header-anchor" href="#introspection" aria-hidden="true">#</a> Introspection</h3>
<p>Hellō provides an introspection API at <code>https://consent.hello.coop/oauth/introspect</code> that will validate the ID Token for your app.</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> client_id     <span class="token comment">// your apps client_id</span>
<span class="token keyword">const</span> id_token      <span class="token comment">// the ID Token received</span>
<span class="token keyword">const</span> nonce         <span class="token comment">// the nonce sent in the request</span>

<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'https://consent.hello.coop/oauth/introspect'</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'cors'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token string">'no-cache'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">'Content-type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">client_id</span><span class="token operator">:</span> client_id<span class="token punctuation">,</span> <span class="token literal-property property">token</span><span class="token operator">:</span> token<span class="token punctuation">,</span> <span class="token literal-property property">nonce</span><span class="token operator">:</span> nonce<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
<span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token keyword">await</span> results<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h4>
<p>If successfully validated, you will receive the payload with <code>active:true</code> to indicate it is an active token. If unsuccessful, you will receive an <RouterLink to="/documentation/errors.html#introspection-errors">Introspection Error</RouterLink></p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"iss"</span><span class="token operator">:</span> <span class="token string">"https://issuer.hello.coop"</span><span class="token punctuation">,</span>
    <span class="token property">"aud"</span><span class="token operator">:</span> <span class="token string">"greenfielddemo"</span><span class="token punctuation">,</span>
    <span class="token property">"nonce"</span><span class="token operator">:</span> <span class="token string">"169d01cf-3d0a-47dd-af9f-3408b18876db"</span><span class="token punctuation">,</span>
    <span class="token property">"jti"</span><span class="token operator">:</span> <span class="token string">"7e7f131a-aaf8-4a3f-ab5c-adea3f0fe8ce"</span><span class="token punctuation">,</span>
    <span class="token property">"pub_id"</span><span class="token operator">:</span> <span class="token string">"greenfielddemo.com"</span><span class="token punctuation">,</span>
    <span class="token property">"sub"</span><span class="token operator">:</span> <span class="token string">"f9e21f0f-9f0e-41b0-a58b-c2d63bcc7b4f"</span><span class="token punctuation">,</span>
    <span class="token property">"scope"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"name"</span><span class="token punctuation">,</span>
        <span class="token string">"nickname"</span><span class="token punctuation">,</span>
        <span class="token string">"picture"</span><span class="token punctuation">,</span>
        <span class="token string">"email"</span><span class="token punctuation">,</span>
        <span class="token string">"openid"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Dick Hardt"</span><span class="token punctuation">,</span>
    <span class="token property">"nickname"</span><span class="token operator">:</span> <span class="token string">"Dick"</span><span class="token punctuation">,</span>
    <span class="token property">"picture"</span><span class="token operator">:</span> <span class="token string">"https://cdn.hello.coop/images/default-picture.png"</span><span class="token punctuation">,</span>
    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"dick.hardt@hello.coop"</span><span class="token punctuation">,</span>
    <span class="token property">"email_verified"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"iat"</span><span class="token operator">:</span> <span class="token number">1645586658</span><span class="token punctuation">,</span>
    <span class="token property">"exp"</span><span class="token operator">:</span> <span class="token number">1645590258</span><span class="token punctuation">,</span>
  <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="self-validation" tabindex="-1"><a class="header-anchor" href="#self-validation" aria-hidden="true">#</a> Self Validation</h3>
<p>Following are details for each ID Token validation step per <a href="https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation" target="_blank" rel="noopener noreferrer">OpenID Connect 3.1.3.7<ExternalLinkIcon/></a></p>
<ol>
<li>N/A - The ID Token is not encrypted</li>
<li>The <code>iss</code> value MUST be <code>https://issuer.hello.coop</code></li>
<li>The <code>aud</code> value MUST be the <code>client_id</code> value provided in the request</li>
<li>N/A - The ID Token will not contain multiple audiences</li>
<li>There will not be an <code>azp</code> claim</li>
<li>The ID Token is signed per JWS. The certificates are XXX</li>
<li>The <code>alg</code> value will be <code>RS256</code></li>
<li>N/A - the <code>alg</code> is always <code>RS256</code></li>
<li>The current time must be before <code>exp</code>. Note the time is seconds since the Epoch, not milliseconds. ID Tokens expire after one hour.</li>
<li>The <code>iat</code> may be used by the client if the one hour expiry is longer than is desirable by the client.</li>
<li>The <code>nonce</code> is included if provided in the request.</li>
<li>The <code>acr</code> Claim is not supported at this time.</li>
<li>The <code>auth_time</code> Claim is not supported at this time.</li>
</ol>
<h3 id="signature-verification-keys" tabindex="-1"><a class="header-anchor" href="#signature-verification-keys" aria-hidden="true">#</a> Signature Verification Keys</h3>
<p>Hellō provides OpenId Provider configuration information per <a href="https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig" target="_blank" rel="noopener noreferrer">OpenID Connect Discovery<ExternalLinkIcon/></a> at:</p>
<p><code>https://issuer.hello.coop/.well-known/open-configuration</code></p>
<p>The <code>jwks_uri</code> property in the configuration file contains the URI for a JSON file containing the public keys in JSON Web Key format (<a href="https://datatracker.ietf.org/doc/html/rfc7517" target="_blank" rel="noopener noreferrer">RFC 7517<ExternalLinkIcon/></a>) for verifying the signature per step (6) above.</p>
</template>
