const readLine = require("readline-sync")
var firstNumberString = readLine.question("Please enter your first number ")
var firstNumber = parseInt(firstNumberString)
var secondNumberString = readLine.question("Please enter your second number ")
var secondNumber = parseInt(secondNumberString)
var operation = readLine.question("Please enter the operation to perform: add, sub, mul, div ")
var result = 0
if (operation === "add") {
    result = firstNumber + secondNumber
}
else if (operation === "sub") {
    result = firstNumber - secondNumber
}
else if (operation === "mul") {
    result = firstNumber * secondNumber
}
else if (operation === "div") {
    result = firstNumber / secondNumber
}
console.log(result)