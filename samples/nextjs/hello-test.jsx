import Head from 'next/head'
import Link from 'next/link'
import { 
    LoggedOut, 
    LoggedIn, 
    ContinueButton, 
    useAuth, 
    getLogOutRoute 
} from '@hellocoop/nextjs/react'

export default function HelloTest() {
  const status = useAuth(); 
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
      <style jsx>{`
        main {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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