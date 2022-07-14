// String
let stringOne = "Brad"

// Number
let numberOne = 0

// Boolean
let booleanOne = true

// Array
const arrayOne = [1, 2, 3, 4, 5]

// Object
let brad = {
    height: "6 ft",
    age: 24,
    weight: 210,
}

// Dot notation
console.log(brad.height)

// Bracket notation
console.log(brad["age"])

console.log(arrayOne[0])

// Conditional statement and for loop
for(let i = 0; i < 10; i++){
    if(i === 0) {
        console.log("I is 0")
    }
    else if(i === 1) {
        console.log("I is 1")
    }
    else {
        console.log("I is not 1 or 2!")
    }
}

// event listener method

let buttonOne = document.getElementById("buttonOne")

function buttonClick() {
    console.log("hello")
}

buttonOne.addEventListener("click", buttonClick);