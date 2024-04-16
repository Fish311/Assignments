import React, { useContext } from 'react'
import {ThemeContext} from "./ThemeProvider"

export default function Main() {

    const {theme, toggleTheme} = useContext(ThemeContext)
    
    return(
        <div className={`${theme}-main-container`}>
            <div className="main-text">
                Click the button to toggle the theme!
            </div>
            <button
                onClick={toggleTheme}
                className={`${theme}-button-theme`}
            >
                Toggle Theme
            </button>
        </div>
    )
}