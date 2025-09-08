import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './feed.module.css'

const Feed = () => {
    const rss = "https://blog.hello.coop/feed"
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try {
            const res = await fetch(rss)
            const txt = await res.text()
            const xml = new window.DOMParser().parseFromString(txt, "text/xml")
            const allPosts = xml.querySelectorAll("item")
            
            // Filter posts with "Developer" category
            const filteredPosts = Array.from(allPosts).filter(post => {
                const categories = Array.from(post.querySelectorAll("category"))
                return categories.some(category => 
                    category.textContent?.includes('Developer')
                )
            }).slice(0, 3)
            
            // Convert to the format expected by the component
            const processedPosts = filteredPosts.map(post => ({
                title: post.querySelector("title")?.textContent,
                link: post.querySelector("link")?.textContent,
                guid: post.querySelector("guid")?.textContent,
                pubDate: post.querySelector("pubDate")?.textContent,
                contentSnippet: post.querySelector("description")
                    ?.textContent
                    ?.replace(/<[^>]*>/g, '')   // strip HTML
                    ?.replace(/&#160;/g, ' ')    // strip out &#160;
                    ?.replace(/&#8217;/g, "'")   // strip out &#8217;
                    ?.trim(),
                image: post.querySelector("content")?.getAttribute("url")
            }))
            
            setPosts(processedPosts)
        } catch(err){
            console.error(err)
        }
    } 

    if(!posts.length)
        return <span className="mt-6 opacity-80 block">Loading...</span>

    return (
        <>
            <ul className="m-0 mt-6 space-y-12 md:space-y-4 no-ext-link-icon">
                {posts.map(i => (
                    <li key={i.guid}>
                        <Link href={i.link} target="_blank" className="flex flex-col md:flex-row md:items-center gap-6 group">
                            <Image src={i.image} alt={i.title} width={256} height={144} className="rounded-md object-cover flex-shrink-0" priority={false} />
                            <div>
                                <span className="text-sm opacity-80">{i.pubDate.split(" ").slice(0, -2).join(" ")}</span>
                                <h3 className="text-xl font-semibold my-1 group-hover:underline">{i.title}</h3>
                                <p className={`${styles.description} opacity-80`}>
                                    {/* RSS trims the ō letter */}
                                    {i.contentSnippet.replaceAll('Hell ', 'Hellō')}
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            {/* TBD Make link open in new tab (fix extenal link icon positioning) */}
            <Link href="https://blog.hello.coop" className="flex items-center gap-6 group md:ml-64 md:pl-6 mt-10 text-xl hover:underline font-semibold">Read more at blog.hello.coop</Link>
        </>
    )
}

export default Feed
