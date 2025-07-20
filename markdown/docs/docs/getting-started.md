DocumentationGetting Started

# Getting Started

> **ℹ️ Info:** 

Check out our [Quickstarts](/docs/quickstarts/) to get up and running quickly on supported platforms!

To use Hellō in your web app you will need to:

1.  Register your app at Hellō
2.  Add a Hellō button
3.  Configure your server for Hellō

### App Registration[](#app-registration)

To use Hellō, register your application at [console.hello.coop (opens in a new tab)](https://console.hello.coop/). You can start developing locally with just the **Client ID** and the defaults, which includes the **Development Redirect URIs** `http://localhost:*` and `http://127.0.0.1:*`. Depending on your server environment, you may need to generate a **Client Secret**.

When you are ready to preview what is presented to users, provide the **Name**, **Logo**, and URLs for **Terms of Service** & **Privacy Policy**. When you are ready for public access, provide your **Production Redirect URI(s)**.

### Add a Hellō Button[](#add-a-hellō-button)

> **ℹ️ Info:** 

If you are using React based framework, use our [`@hellocoop/react`](/docs/sdks/react/) component library.

To add a Hellō Button to your page:

**2.1** Add a link to the Hellō stylesheet for button styling and Hellō JavaScript file for displaying the Hellō about text in the `<head>` of your document.

```
<head>
  <!-- ... -->
  <link href="https://cdn.hello.coop/css/hello-btn.css" rel="stylesheet"/>
  <!-- ... -->
</head>
```

**2.2** Add the HTML for the Hellō Button in your page:

```
<body>
  <!-- ... -->  
  <div class="hello-container">
    <button class="hello-btn" onclick="login">
      ō&nbsp;&nbsp;&nbsp;Continue with Hellō
    </button>
  </div>
  <!-- ... -->  
</body>
```

**2.3** Add the `login()` function in your page:

```
<body>
  <!-- ... -->  
  <div class="hello-container">
    <button class="hello-btn" onclick="login">
      ō&nbsp;&nbsp;&nbsp;Continue with Hellō
    </button>
  </div>
 
<script>
  function login(event){
    event.target.classList.add('hello-btn-loader')  // Show spinner
    event.target.disabled = true                    // Disable button
    window.location.href = LOGIN_PATH               // login endpoint
  }
</script>
 
<!-- ... -->  
</body>
```

The `LOGIN_PATH` will be determined by your server software.

See [Hellō Buttons](/docs/buttons/) for styling and other button options.

### Configure Your Server for Hellō[](#configure-your-server-for-hellō)

Your server will need to support the OpenID Connect protocol to work with Hellō. Most platforms have a module that provides OpenID Connect support. Hellō supports all the various ways that an application may use OpenID Connect.

Follow the directions for your platform on enabling and installing OpenID Connect.

Some software supports the `openid-configuration` file which is located at `https://issuer.hello.coop/.well-known/openid-configuration` for Hellō.

See [OpenID Connect | Configuration](/docs/oidc/config/) for detailed information on how to configure your server.

See [Hellō Scopes](/docs/scopes/) for information on the claims you may request from Hellō.

[Overview](/docs/ "Overview")[Quickstarts](/docs/quickstarts/ "Quickstarts")