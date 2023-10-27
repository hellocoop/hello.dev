import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Parser from 'rss-parser';
import styles from './feed.module.css'

const Feed = () => {
    const parser = new Parser(
        {customFields: {
            item: ['cover_image']
        }}
    )
    const rss = "https://blog.hello.coop/feed/"
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try {
            // const json = await parser.parseURL(rss)

            //TBD COMMENT OUT - ONLY ADDED FOR TESTING
            const json = await parser.parseString(`
            <?xml version="1.0" encoding="UTF-8"?><rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0"><channel><title><![CDATA[Hellō World]]></title><description><![CDATA[Hellō World]]></description><link>https://blog.hello.dev</link><generator>RSS for Node</generator><lastBuildDate>Fri, 27 Oct 2023 12:04:28 GMT</lastBuildDate><atom:link href="https://blog.hello.dev/rss.xml" rel="self" type="application/rss+xml"/><language><![CDATA[en]]></language><ttl>60</ttl><atom:link rel="next" href="https://blog.hello.dev/rss.xml?page=1"/><item><title><![CDATA[Hellō localhost]]></title><description><![CDATA[<p>A challenge when developing against any of the large Social Login providers such as Google is that for security reasons[1], they don't support using <code>http://localhost</code>, which makes doing local application development that uses these providers challenging.</p>
            <p>At Hell, we strive to simplify adding identity to your applications. To enable <code>localhost</code> development, we separated redirect URIs to be either development or production. <code>http://localhost:*</code> and <code>http://127.0.0.1/*</code> are enabled by default for development redirect URIs, but are not allowed for production. Only your team[2] is enabled to flow through development redirect URIs. You can add other development redirect URIs that will similarly be limited to your team.</p>
            <p>When you are ready to share your application with the world, add your production URI(s) to your application in the <a target="_blank" href="https://console.hello.coop">Hell Developer Console</a>.</p>
            <p><em>[1] An attacker running a local web server on a user's machine can potentially impersonate your application.</em></p>
            <p><em>[2] Inviting other admins and testers to your team is coming soon!</em></p>
            ]]></description><link>https://blog.hello.dev/hello-localhost</link><guid isPermaLink="true">https://blog.hello.dev/hello-localhost</guid><dc:creator><![CDATA[Dick Hardt]]></dc:creator><pubDate>Fri, 20 Oct 2023 13:01:43 GMT</pubDate><cover_image>https://cdn.hashnode.com/res/hashnode/image/upload/v1697803875709/c29631d1-57d0-4e08-adef-882c38c7cc07.png</cover_image></item><item><title><![CDATA[Discord, GitHub, GitLab, Twitter (X) Scopes Now Supported]]></title><description><![CDATA[<p>You can now include <code>discord</code>, <code>github</code>, <code>gitlab</code>, and <code>twitter</code> in your authorization requests and Hell will ask the user to link and select the requested provider(s) to provide you with a verified claim of their identifiers on those services.</p>
            <p>As usernames can be changed, we provide both the <code>username</code>, and the permanent <code>id</code> from the provider:</p>
            <pre><code class="lang-json">{ <span class="hljs-comment">// ID Token payload</span>
                ...
                <span class="hljs-attr">"discord"</span>:{
                    <span class="hljs-attr">"username"</span>:<span class="hljs-string">"dickhardt"</span>,
                    <span class="hljs-attr">"id"</span>:<span class="hljs-string">"932454643529834567"</span>
                },
                ...
            }
            </code></pre>
            <p>Try it out for yourself in the <a target="_blank" href="https://playground.hello.dev/">Hell Playground</a>!</p>
            ]]></description><link>https://blog.hello.dev/discord-github-gitlab-twitter-x-scopes-now-supported</link><guid isPermaLink="true">https://blog.hello.dev/discord-github-gitlab-twitter-x-scopes-now-supported</guid><dc:creator><![CDATA[Dick Hardt]]></dc:creator><pubDate>Tue, 17 Oct 2023 18:19:09 GMT</pubDate><cover_image>https://cdn.hashnode.com/res/hashnode/image/upload/v1697566354714/e7135720-4e7b-498a-a82d-12cb17d54aad.png</cover_image></item><item><title><![CDATA[Hellō Passkeys]]></title><description><![CDATA[<p>Not only is it Star Wars Day, but it is also International Password Day. Expect lots of announcements about passkeys today as the prevailing wisdom is that the best password is no password, and passkeys have emerged as the shiny new replacement.</p>
            <p>Despite all the media coverage and promotion by Apple, Google, and Microsoft, passkey adoption is still low. While migrating from usernames and passwords to usernames and passkeys is fairly straightforward, many sites also support social login, and adding passkeys is adding yet another way to log in - and unlike social login where the developer gets profile data - passkeys only provide authentication.</p>
            <p>We implemented WebAuthn (the W3C standard for passkeys) a year ago but did not release it as the experience had many sharp edges in corner cases. After several iterations, we are now testing out using passkeys only on mobile devices. Passkeys are not a preferred provider, but a faster way to log into Hell once you have logged into your device with your preferred provider. Passkeys really shine on mobile devices where a biometric is common, and if you have multiple mobile devices they can be synced across them.</p>
            <p>When starting a flow from a social app, or linking a social account on mobile, the browser redirect is often stuck in the social app's in-app browser where your preferred provider no longer has access to its cookies, leading to a frustrating experience as the social provider is starting log in from scratch. Passkeys are available in some in-app browsers allowing for a simple and fast Hell experience compared to using your preferred provider.</p>
            <p>The experience is not quite where we would like to be though as the API does not provide an affordance for us to check if you have a Hell passkey before calling the API. If we have a cookie - which we won't in an in-app browser we have not been in - we know you have a passkey and can prompt you to use it right away. If we don't have a cookie, you will need to choose to use your Hell Passkey explicitly if you have created one.</p>
            <p>Our enrollment experience prompts you to create a Hell Passkey after you have logged in with your preferred provider if you are on a mobile device. If you create one, then you can use it on any mobile device it is synced to. Continuing our philosophy of giving you control over your identity, you can decline to create a passkey or ask us to remind you later.</p>
            <p>Passkeys are a step function in user security and convenience. We hope you enjoy using them with Hell, and we also hope the APIs evolve to smooth out the rough edges.</p>
            ]]></description><link>https://blog.hello.dev/hello-passkeys</link><guid isPermaLink="true">https://blog.hello.dev/hello-passkeys</guid><dc:creator><![CDATA[Dick Hardt]]></dc:creator><pubDate>Thu, 04 May 2023 15:53:49 GMT</pubDate><cover_image>https://cdn.hashnode.com/res/hashnode/image/upload/v1683213126135/112d8801-cfc4-4082-b731-89351a0f2bf4.png</cover_image></item><item><title><![CDATA[Recommended Providers now Available]]></title><description><![CDATA[<p>As we have added to our list of login providers, new users were starting to get overwhelmed with all the options:</p>
            <p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1677266029703/21ccd31d-f216-4e16-8bbf-a61b7b51d1d6.png" alt class="image--center mx-auto" /></p>
            <p>To address this issue, we start the experience for new users with a small list of recommended providers. We selected the defaults based on which providers users chose.</p>
            <p>On iOS/MacOS devices, users are presented with:</p>
            <p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1677266052958/2b2e1baa-f6a8-4a44-8b49-43a6ecfb6456.png" alt class="image--center mx-auto" /></p>
            <p>On Windows devices, users are presented with:</p>
            <p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1677266061874/535aaac6-3b32-4965-ac62-14c61d30b178.png" alt class="image--center mx-auto" /></p>
            <p>And all other devices, users are presented with:</p>
            <p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1677266072640/0f5706dc-4634-48e9-bc8b-0da1b347965a.png" alt class="image--center mx-auto" /></p>
            <p>Users can show all the other login provider choices</p>
            <p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1677266975664/d84f8b3b-afa3-429b-b6f4-5ad2678f41e6.png" alt class="image--center mx-auto" /></p>
            <h3 id="heading-customizing-the-recommended-login-providers-for-your-users">Customizing the Recommended Login Providers for Your Users</h3>
            <p>With this update, you can override which providers are recommended to your users by setting the <code>provider_hint</code> query parameter in the authorization URL. For example, if you want to add GitHub and remove email and Apple from the choices, you would pass</p>
            <pre><code class="lang-plaintext">https://wallet.hello.coop/authorize?{...}
            &amp;provider_hint=github+email--+apple--
            </code></pre>
            <p>For details see the <code>provider_hint</code> <a target="_blank" href="https://www.hello.dev/documentation/provider-hint.html">documentation</a></p>
            <p>New users would then be presented with the following options:</p>
            <p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1677266377895/f6994cb6-a7c9-430d-ab91-3fbb43cae2e8.png" alt class="image--center mx-auto" /></p>
            <p>You can check out how <code>provider_hint</code> works with the <a target="_blank" href="https://playground.hello.dev/">Hell Playground</a></p>
            <hr />
            <p>Start building your next app with <a target="_blank" href="https://www.hello.dev/">Hell</a></p>
            ]]></description><link>https://blog.hello.dev/recommended-providers-now-available</link><guid isPermaLink="true">https://blog.hello.dev/recommended-providers-now-available</guid><dc:creator><![CDATA[Rohan Harikumar]]></dc:creator><pubDate>Fri, 24 Feb 2023 19:30:27 GMT</pubDate><cover_image>https://cdn.hashnode.com/res/hashnode/image/upload/v1677843953610/423ba789-8dff-4b1e-a675-585df5a89c20.png</cover_image></item></channel></rss>
            `)

            setPosts(json.items?.slice(0, 3))
        } catch(err){
            console.error(err)
        }
    } 

    if(!posts.length)
        return <span className="mt-6 opacity-80 block">Loading...</span>

    return (
        <>
            <ul className="m-0 mt-6 space-y-12 md:space-y-4">
                {posts.map(i => (
                    <li key={i.guid}>
                        <Link href={i.link} target="_blank" className="flex flex-col md:flex-row md:items-center gap-6 group">
                            <img src={i.cover_image} className="w-64 h-36 rounded-md object-cover flex-shrink-0" />
                            <div>
                                <span className="text-sm opacity-80">{i.pubDate.split(" ").slice(0, -2).join(" ")}</span>
                                <h3 className="text-xl font-semibold my-1 group-hover:underline">{i.title}</h3>
                                <p className={`${styles.description} opacity-80`}>
                                    {i.contentSnippet}
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="https://blog.hello.dev" target="_blank" className="flex items-center gap-6 group md:ml-64 md:pl-6 mt-10 text-xl hover:underline font-semibold">Read more at blog.hello.dev ↗</Link>
        </>
    )
}

export default Feed