import { useState } from 'react'
import  Card from "./components/Card"
import data from "./data"
import "./App.css"

export default function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            item={item}
            
        />
    )
})  
    return (
      <div className="flex--container">
         {cards}
      </div>
    )      
}


