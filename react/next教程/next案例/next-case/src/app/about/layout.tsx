"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
export default function AboutLayout({children}:{children:React.ReactNode}){
   const [count, setCount] = useState(0)
   useEffect(()=>{
        console.log("countAbout Layout render")
        return ()=>{
            console.log("countAbout Layout unmount")
        }
    },[])
    return (
        <div>
            <h1>About Layout Header</h1>
            <h1>About Layout Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Add</button>
             {children}
             <Link href="/about/content2">Content2</Link>
             <Link href="/about/content">Content</Link>
            <h1>About Layout Footer</h1>
        </div>
    )
}