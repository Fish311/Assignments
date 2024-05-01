import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'
import './components/UglyList'
import { UglyContext, UglyContextProvider } from './components/UglyContextProvider'
import UglyList from "./components/UglyList"
function App() {

  

  return (
    <>
      <UglyContextProvider>
        <Form/>
        <UglyList/>
      </UglyContextProvider>
    </>
  )
}

export default App
