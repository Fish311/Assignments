import React from "react"
import {useNavigate} from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate()

    return (
        <div className="home-container">
            
            <div className="title-container">
                <h1 className="title">
                    THE FELLOWSHIP OF THE RING
                </h1>
                
                <div className="about-text">
                    This site gives information about each member of the Fellowship in The Lord of the Rings.
                </div>
            </div>
            <div className="options">
                <h2>Click an option below to learn more about the Fellowship</h2>
                <div className="button-container">
                    <button className="home-button" onClick={()=> navigate("/about")}>About</button>
                    <button className="home-button" onClick={()=> navigate("/characters")}>Fellowship List</button>
                </div>
            </div>
        </div>
    )
}