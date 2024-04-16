import React from 'react'
import './App.css'
import ThemeContextProvider from './components/ThemeProvider'
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App() {
  

  return (
    <>
      <Navbar/>
      <Main/>
      <Footer/>
    </>
  )
}


