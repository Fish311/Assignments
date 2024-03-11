import React from "react"
import Blogpost from "./Blogpost"
import data from "../data"

export default function Bloglist() {
    const posts = data.map(item => {
        return <Blogpost title={item.title} subTitle={item.subTitle} author={item.author} date={item.date}/>
        
    })
    return (
        <div id="post--container">
            {posts}
            <div id="button--container">
                <a className="button" href="#!">OLDER POSTS →</a>
            </div>
            
        </div>

    )
   
}