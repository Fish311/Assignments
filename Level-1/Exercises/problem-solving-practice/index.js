var largestNumber = 0
function  largest(arr) {
    for (let i = 0; i <= arr.length; i++){
        if (arr[i] > largestNumber) {
            largestNumber = arr[i]
        }
    }
}
largest([3, 5, 2, 8, 1])
console.log(largestNumber)

function lettersWithStrings(thisArr, characterToFind) {
    for (let i = 0; i < thisArr.length; i++) {
        if (thisArr[i].includes(characterToFind)) {
            console.log(thisArr[i])
        }
    }
}
lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") 

// => ["C%4!", "Hey!"]
function isDivisible(num1, num2) {
    if (num1 % num2 === 0) {
        console.log("true")
    }
    else {
        console.log("false")
    }
}
isDivisible(4, 2) // => true
isDivisible(9, 3) // => true
isDivisible(15, 4) // => false
