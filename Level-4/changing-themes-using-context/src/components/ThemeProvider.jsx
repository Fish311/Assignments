import React from 'react'


export const ThemeContext = React.createContext()

export default function ThemeContextProvider(props) {
    const [theme, setTheme] = React.useState("dark")

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark")
    }
    
    return(
        <ThemeContext.Provider value={{
            theme: theme,
            toggleTheme: toggleTheme
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
