Documentation[Quickstarts](/docs/quickstarts/)Next.js

# Next.js Quickstart

Follow the directions below to add [Hellō (opens in a new tab)](https://www.hello.coop) to your [Next.js (opens in a new tab)](https://nextjs.org/) application in a couple of minutes.

-   You will get the user's name, verified email, and profile picture.
-   Users can use their preferred login provider including Apple, Facebook, Google, GitHub, GitLab, and Microsoft.
-   Hellō has done all the work to get a verified email and profile picture.

> **ℹ️ Info:** 

If you want to explore a sample app, check out our [Hellō Next.js Sample (opens in a new tab)](https://github.com/hellocoop/hello-nextjs-sample).

## Add Hellō to Your Server[](#add-hellō-to-your-server)

> Don't have a project? Start with the [Next.js basic blog app (opens in a new tab)](https://nextjs.org/learn-pages-router/basics/create-nextjs-app).

> We use JavaScript in this Quickstart as it works everywhere. Don't worry, TypeScript is supported.

### Install the Package[](#install-the-package)

In your project directory:

npmpnpmyarnbun

```
npm i @hellocoop/nextjs
```

### Run Quickstart[](#run-quickstart)

App Router (Recommended)Pages Router

```
npx @hellocoop/quickstart@latest --nextjs_app_router
```

Quickstart will prompt you to:

1.  Download the `@hellocoop/quickstart` package
2.  Log in to Quickstart with Hellō
3.  Create an application, or select an existing one

Quickstart will then:

1.  Create a `hello.config.js` file containing your app's `client_id`
2.  Mount the Hellō endpoint by creating one of the following files, depending on your router setup:

-   `./app/api/hellocoop/route.js` (App Router)
-   `./pages/api/hellocoop.js` (Pages Router)

3.  Generate a random `HELLO_COOKIE_SECRET` and add it to `.env.local`

> If you created a new application, no more configuration is needed for local development. You can add a light and dark themed logo, and URLs for terms of service and your privacy policy when you are ready at the [Hellō Developer Console (opens in a new tab)](https://console.hello.coop)

Your server should now be fully configured to work with Hellō locally.

### Test Your Server[](#test-your-server)

Start your application locally:

```
npm run dev
```

Assuming the server started on port 3000:

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

You have configured your server to use Hellō!

## Add Hellō to Your Client[](#add-hellō-to-your-client)

### Add Hellō Test Page[](#add-hellō-test-page)

App Router (Recommended)Pages Router

Copy the following code and save it to `page.jsx` in your `app/hello-test` folder:

./app/hello-test/page.jsx

```
import Head from 'next/head'
import Link from 'next/link'
import { 
    LoggedOut, 
    LoggedIn, 
    ContinueButton, 
    useAuth, 
    getLogOutRoute 
} from '@hellocoop/nextjs/react'
 
export default async function HelloTest() {
  const status = auth(); 
  const { auth: {name, picture, email} } = status;
 
  return (
    <>
      <Head>
        <title>Hellō Test Page</title>
        <link rel="stylesheet" href="https://cdn.hello.coop/css/hello-btn.css"/>      
      </Head>
      <main>
        <div className="profile">
          <LoggedOut>
              <ContinueButton targetURI="/hello-test"/>
          </LoggedOut>
          <LoggedIn>
              <div className="user-details">
                <img src={picture} alt={name} />
                <h3>{name}</h3>
                <p>{email}</p>
              </div>
              <div className="logout-link">
                <Link href={getLogOutRoute({target_uri:'/hello-test'})}>
                    log out
                </Link>
              </div>
          </LoggedIn>        
        </div> 
        <hr className="separator" />
        <pre>
            {JSON.stringify(status, null, 4)}
        </pre>
      </main>
      <style global jsx>{`
        @media (prefers-color-scheme: light) {
            body {
                color: #303030;
                background: white;
            }
        }
        @media (prefers-color-scheme: dark) {
            body {
                color: #d4d4d4;
                background: #151515;
                color-scheme: dark;
            }
        }
      `}</style>
      <style jsx>{`
        main {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: sans-serif;
        }
        .profile, .logout-link {
            margin: 10px 0;
            text-align: center; /* Centering content */
        }
        .user-details {
            margin-bottom: 20px;
        }
        .user-details img {
            max-width: 100px;
            border-radius: 50%;
            margin-bottom: 10px;
        }
        .user-details h3, .user-details p {
            margin: 5px 0;
        }
        .separator {
            width: 80%;
            border: 1px solid #ccc;
            margin: 10px 0;
        }
        pre {
            alignSelf: 'center',
            width: '80%' // Adjust as needed
        }
      `}</style>
    </>
  )
}
```

### Test Your Client[](#test-your-client)

1.  Load the test page:

[http://localhost:3000/hello-test (opens in a new tab)](http://localhost:3000/hello-test)

2.  Clink on the `[ ō Continue with Hellō ]` button

This will log you in and display your profile information as JSON.

3.  Click on the `log out` link to log out

You now have added Hellō to your Client!

## Add a Callback Stub[](#add-a-callback-stub)

We will now add a stub function that you can modify later to integrate with your user database.

### Create Callback Stub[](#create-callback-stub)

Copy the following code and save it to `hello-callback.js` in your `src` folder (create the `src` folder if needed):

./src/hello-callback.js

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
import loggedIn from './src/hello-callback'
 
const config = {
    client_id: 'YOUR_CLIENT_ID',
    callbacks: {
        loggedIn
    }
}
export default config
```

### Test the Callback[](#test-the-callback)

1.  Restart your server for it to load the updated configuration
    
2.  Load the test page and click on the `[ ō Continue with Hellō ]` button
    

[http://localhost:3000/hello-test (opens in a new tab)](http://localhost:3000/hello-test)

You should see the contents of the ID Token payload logged to your terminal. See [OpenID Connect | ID Token](/docs/oidc/token/) for details.

You now have a stub you can extend to integrate your user database!

## Next Steps[](#next-steps)

-   Explore the [Hellō Next.js Sample (opens in a new tab)](https://github.com/hellocoop/hello-nextjs-sample)
    
-   Change the claims received or providers recommended by updating your [`hello.config.js`](/docs/sdks/config/) file.
    
-   Review the [SDK Reference | Next.js](/docs/sdks/nextjs/) documentation.
    
-   Replace the `./hello-callback.js` file with your own code that integrates with your user DB.
    

[Fastify](/docs/quickstarts/fastify/ "Fastify")[WordPress](/docs/quickstarts/wordpress/ "WordPress")