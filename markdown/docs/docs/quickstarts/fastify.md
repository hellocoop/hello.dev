Documentation[Quickstarts](/docs/quickstarts/)Fastify

# Fastify Quickstart

Follow the directions below to add [Hellō (opens in a new tab)](https://www.hello.coop) to your [Fastify (opens in a new tab)](https://fastify.dev/) application in a couple minutes.

-   You will get the user's name, verified email, and profile picture.
-   Users can use their preferred login provider including Apple, Facebook, Google, GitHub, GitLab, and Microsoft.
-   Hellō has done all the work to get a verified email and profile picture.

## Add Hellō to Your Server[](#add-hellō-to-your-server)

> Don't have a project? Check out the [Fastify Getting-Started Guide (opens in a new tab)](https://fastify.dev/docs/latest/Guides/Getting-Started/).

### Install the Package[](#install-the-package)

In your project directory:

npmpnpmyarnbun

```
npm i @hellocoop/fastify
```

### Run Quickstart[](#run-quickstart)

```
npx @hellocoop/quickstart@latest --fastify
```

Quickstart will prompt you to:

-   download the `@hellocoop/quickstart` package
-   log in to Quickstart with Hellō
-   create an application, or select an existing one

Quickstart will then:

-   create a `hello.config.js` file containing your app's `client_id`
-   generate a random `HELLO_COOKIE_SECRET` and add it to `.env`

### Mount Hellō[](#mount-hellō)

In your main server file add the following code:

TypeScriptJavaScript

Your server should now be fully configured to work with Hellõ

### Test Your Server[](#test-your-server)

Start your server. Assuming the server started on port 3000:

1.  Check your logged in status in a new tab with:  
    [http://localhost:3000/api/hellocoop?op=auth (opens in a new tab)](http://localhost:3000/api/hellocoop?op=auth)

You should get `{"isLoggedIn": false}` in your browser window.

2.  Log in to Hellō with in a new tab with:  
    [http://localhost:3000/api/hellocoop?op=login (opens in a new tab)](http://localhost:3000/api/hellocoop?op=login)
    
3.  See your logged in status and profile by reloading `/api/hellocoop?op=auth`
    

You should see something similar to this:

```
{
  "isLoggedIn": true,
  "sub": "sub_vvCgtpv35lDgQpHtxmpvmnxK_2nZ",
  "iat": 1699234659,
  "name": "Dick Hardt",
  "picture": "https://pictures.hello.coop/r/7a160eed-46bf-48e2-a909-161745535895.png",
  "email": "dick.hardt@hello.coop"
}
```

4.  Log out in a new tab with:  
    [http://localhost:3000/api/hellocoop?op=logout&target_uri=%2Fapi%2Fhellocoop%3Fauth%3Dtrue (opens in a new tab)](http://localhost:3000/api/hellocoop?op=logout&target_uri=%2Fapi%2Fhellocoop%3Fauth%3Dtrue)

After being logged out, you will be redirected back to `/api/hellocoop?op=auth` to confirm you are logged out.

You have added Hellō to your fastify application.

## Add a Callback Stub[](#add-a-callback-stub)

We will now add a stub function that you can modify later to integrate with your user database.

### Create Callback Stub[](#create-callback-stub)

Copy the following code and save it to `hello-callback.js` in your root folder (you can move it later):

./hello-callback.js

```
// hello-callback.js
module.exports = async ({ 
    payload,    // parsed ID Token payload
    token,      // ID Token in compact, unparsed format
    req,        // NextApiRequest
    res         // NextApiResponse
}) => {
 
    console.log('Callback received:',JSON.stringify(payload,null,4))
    // TODO
    // lookup user from your DB wth payload.sub user identifier
    // create a user in DB if not found if open registration
    return({
        // accessDenied = true, // will set auth.isLoggedIn = false
        // isProcessed = true,  // response has been sent by callback()
        // updatedAuth = {},    // auth object stored in cookie
    })
}
```

### Configure Callback[](#configure-callback)

Add the highlighted lines to your `hello.config.js` file:

```
const loggedIn = require('./hello-callback')
 
const config = {
    client_id: 'YOUR_CLIENT_ID',
    callbacks: {
        loggedIn
    }
}
module.exports = config
```

### Test the Callback[](#test-the-callback)

1.  Restart your server for it to load the updated configuration

[http://localhost:3000/api/hellocoop?op=login&target_uri=%2Fapi%2Fhellocoop%3Fauth%3Dtrue (opens in a new tab)](http://localhost:3000/api/hellocoop?op=login&target_uri=%2Fapi%2Fhellocoop%3Fauth%3Dtrue)

You should see the contents of the ID Token payload logged to your terminal. See [OpenID Connect | ID Token](/docs/oidc/token/) for details.

You now have a stub you can extend to integrate your user database!

## Next Steps[](#next-steps)

-   Change the claims received or providers recommended by updating your [`hello.config.js`](/docs/sdks/config/) file.
    
-   Review the [SDK Reference | Fastify](/docs/sdks/fastify/) documentation.
    
-   Review the [Web Client](/docs/apis/web-client/) documentation.
    
-   Replace the `./hello-callback.js` file with your own code that integrates with your user DB.
    

[Express](/docs/quickstarts/express/ "Express")[Next.js](/docs/quickstarts/nextjs/ "Next.js")