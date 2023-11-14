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
    const rss = "https://www.hello.dev/rss.xml"
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try {
            const json = await parser.parseURL(rss)
            setPosts(json.items?.slice(0, 3))
        } catch(err){
            console.error(err)
        }
    } 

    if(!posts.length)
        return <span className="mt-6 opacity-80 block">Loading...</span>

    return (
        <>
            <ul id="blog-posts" className="m-0 mt-6 space-y-12 md:space-y-4">
                {posts.map(i => (
                    <li key={i.guid}>
                        <Link href={i.link} target="_blank" className="flex flex-col md:flex-row md:items-center gap-6 group">
                            <img src={i.cover_image} className="w-64 h-36 rounded-md object-cover flex-shrink-0" />
                            <div>
                                <span className="text-sm opacity-80">{i.pubDate.split(" ").slice(0, -2).join(" ")}</span>
                                <h3 className="text-xl font-semibold my-1 group-hover:underline">{i.title}</h3>
                                <p className={`${styles.description} opacity-80`}>
                                    {i.contentSnippet.replaceAll('Hell', 'Hellō')}
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="https://blog.hello.dev" target="_blank" className="flex items-center gap-6 group md:ml-64 md:pl-6 mt-10 text-xl hover:underline font-semibold">Read more at blog.hello.dev</Link>
        </>
    )
}

export default Feed