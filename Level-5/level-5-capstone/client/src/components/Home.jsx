import React from "react"
import {useNavigate} from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate()
    
    return (
        <div className="home-container">
            <h1>WELCOME TO YOUR MOVIE JOURNAL</h1>
            <div>A place to keep track of all the movies you see!</div>
            <div>Please read the about section to learn more about your movie journal and what it is for.</div>
        </div>
    )
}