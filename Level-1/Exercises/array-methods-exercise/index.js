var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop()
fruit.shift()
var number = fruit.indexOf("orange")
fruit.push(number)
var vegLength = vegetables.length
vegetables.push(vegLength)
var food = fruit.concat(vegetables)
food.splice(4, 2)
food.reverse()
food.join("")
console.log(food)
