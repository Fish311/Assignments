import React from "react"

export default function Blogpost(props) {
    return (
        <div className="post">
            <div className="postContent">
                <h2>{props.title}</h2>
                <h4>{props.subTitle}</h4>
                <p>Posted by {props.author} on {props.date}</p>
                <div className="bottom--line"></div>
            </div>
        </div>
    )
}