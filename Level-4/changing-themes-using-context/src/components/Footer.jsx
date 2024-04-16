import React, { useContext } from 'react'
import {ThemeContext} from "./ThemeProvider"

export default function Footer() {

    const {theme} = useContext(ThemeContext)

    return(
        <div className={`${theme}-footer-container`}>
            <div className="footer-text">
                Footer
            </div>
        </div>
    )
}