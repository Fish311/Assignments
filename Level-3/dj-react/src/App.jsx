import { useState } from 'react'
import React from "react"
import './App.css'
import boxes from './components/boxes'



export default function App(props) {
  const [squares, setSquares] = React.useState(boxes)

  

  const squareElements = squares.map(square => {
    const styles = {
      backgroundColor: square.backgroundColor
    }
    
    return <div style={styles} className="box" key={square.id}></div>
  })
  function handleBlackAndWhite () {
    const newSquares = [...squares]
    if(newSquares[0].backgroundColor === 'black') {
      newSquares.forEach(square => {
        square.backgroundColor = 'white'
      }
      )
  }
    else if(newSquares[0].backgroundColor === 'white') {
      newSquares.forEach(square => {
        square.backgroundColor = 'black'
      }
      )
  }
  else {
    newSquares.forEach(square => {
      square.backgroundColor = 'white'
    }
    )
  }
  setSquares(newSquares)
}
  function handlePurple() {
    const newSquares = [...squares]
    newSquares[0].backgroundColor = 'purple'
    newSquares[1].backgroundColor = 'purple'
    setSquares(newSquares)
  }
  function handleLeftBlue() {
    const newSquares = [...squares]
    newSquares[2].backgroundColor = 'blue'
    setSquares(newSquares)
  }
  function handleRightBlue() {
    const newSquares = [...squares]
    newSquares[3].backgroundColor = 'blue'
    setSquares(newSquares)
  }
  function handleBoxOne() {
    const newSquares = [...squares]
    newSquares[0].backgroundColor = 'pink'
    setSquares(newSquares)
  }
  function handleBoxTwo() {
    const newSquares = [...squares]
    newSquares[1].backgroundColor = 'green'
    setSquares(newSquares)
  }
  function handleBoxThree() {
    const newSquares = [...squares]
    newSquares[2].backgroundColor = 'red'
    setSquares(newSquares)
  }
  function handleBoxFour() {
    const newSquares = [...squares]
    newSquares[3].backgroundColor = 'yellow'
    setSquares(newSquares)
  }

  return (
    <div>
      <div id="grid-container">
        {squareElements}
      </div>
      <div id="buttons">
        <button onClick={handleBlackAndWhite}>
          Small Time DJ
        </button>
        <button onClick={handlePurple}>
          Party DJ
        </button>
        <button onClick={handleLeftBlue}>
          Left Blue
        </button>
        <button onClick={handleRightBlue}>
          Right Blue
        </button>
        <button onClick={handleBoxOne}>
          Big DJ 1
        </button>
        <button onClick={handleBoxTwo}>
          Big DJ 2
        </button>
        <button onClick={handleBoxThree}>
          Big DJ 3
        </button>
        <button onClick={handleBoxFour}>
          Big DJ 4
        </button>
      </div>
    </div>
  )
}
