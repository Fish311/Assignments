console.log("1. Put hand in hole")
console.log("2. Find the key")
console.log("3. Open the door")
const readline = require("readline-sync");
var hasKey = false
var isGameOver = false
while(isGameOver === false) {
    const option = readline.question("Do you pick option 1, 2, or 3? ");
if (option === "1"){
    console.log("You died! Try again")
    isGameOver = true
}
else if (option === "2") {
    if (hasKey){
        console.log("You already have the key!")
    }
    else {
    hasKey = true
    console.log("You found the key!")
    }
}
else if (option === "3") {
    if (!hasKey){
        console.log("You need the key.") 
    }
    else {
        console.log("The door opened. You win!")
        isGameOver = true
    }
}
else {
    console.log("Pick an option and try again")
}
}
