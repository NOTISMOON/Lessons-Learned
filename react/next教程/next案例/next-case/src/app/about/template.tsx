"use client"
import { useState,useEffect } from "react"
 export default function AboutTemplateplate({children}:{children:React.ReactNode}){
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("countAbout Templateplate render")
        return ()=>{
         console.log("countAbout Templateplate unmount")
        }
    },[])
    return (
        <div>
            <hr />
            <h1>About Template Header</h1>
            <h1>About Template Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Add</button>
            {children}
            <h1>About Template Footer</h1>
        </div>
    )
}