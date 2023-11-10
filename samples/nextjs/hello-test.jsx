import { 
    LoggedOut, 
    LoggedIn, 
    ContinueButton, 
    useAuth, 
    getLogOutRoute 
  } from '@hellocoop/nextjs/react'
  import Head from 'next/head'
  import Link from 'next/link'
  
  export default function HelloTest() {
    return (
      <>
        <Head>
          <title>Hellō Test Page</title>
          {/* Next.js will complain about injecting the following stylesheet 
              -> move to _document.tsx when ready */}
          <link rel="stylesheet" href="https://cdn.hello.coop/css/hello-btn.css"/>      
        </Head>
        <main>
          <LoggedOut>
              <ContinueButton targetURI="/hello-test"/>
          </LoggedOut>
          <LoggedIn>
              <pre>
                {JSON.stringify(useAuth(), null, 4)}
              </pre>
              <Link href={getLogOutRoute({target_uri:'/hello-test'})}>
                log out
              </Link>
          </LoggedIn>        
        </main>
        <style jsx>{`
          main {
              min-height: 100vH;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
          }
        `}</style>
      </>
    )
  }