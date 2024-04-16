import React, { useContext } from 'react'
import {ThemeContext} from "./ThemeProvider"

export default function Navbar() {
    
    const {theme} = useContext(ThemeContext)

    return(
        <div className={`${theme}-nav-container`}>
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Contact</h2>
        </div>
    )
}