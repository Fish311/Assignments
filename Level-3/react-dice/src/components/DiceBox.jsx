import React from "react"
import {useState} from "react"
import Die from "./Die"

export default function DiceBox() {
    const [numbers, setNumbers] = useState([0, 0, 0, 0, 0])
    const [roll, setRoll] = useState(0)
    const [clicked, setClicked] = useState([])
    function handleRoll () {
        console.log(clicked)
        let ranNumbers = [];
        for (let i = 0; i < 5; i++) { 
            if(clicked.includes(i) === false) {
            ranNumbers.push(Math.floor(Math.random() * 6 + 1))
            }
            else if(clicked.includes(i) === true) {
                ranNumbers.push(numbers[i])
            }
        }
        setNumbers(ranNumbers)
        add()
        if(roll >= 3) {
            setClicked([])
            setNumbers([0, 0, 0, 0, 0])
            setRoll(0)
        }
    }
    function add (){
        setRoll(prevRoll => {
            if (prevRoll + 1 <= 3) {
                return prevRoll + 1
            }
            else if (prevRoll + 1 > 3) {
                return prevRoll = 1
            }
        })
    }
    function freezeDie (index) {
        
        let newClicked = clicked
        
        
        if(newClicked.includes(index)){
            newClicked = newClicked.filter(function (value){
                return value !== index
            })
        }
        else {
            newClicked.push(index)
        }
        
        setClicked(newClicked)
        }
    
    
    return (
        <div>
            {numbers.map(function (number, index){
                return (
                    <Die number={number} index={index} handleClick={freezeDie}/>
                )
            })}
            <button onClick={handleRoll}>
                    Roll Dice    
            </button>
        </div>
    )
}