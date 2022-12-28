/*for (i = 0; i < 10; i++) {
    console.log(i)
}
*/
/*for (i = 9; i >= 0; i--) {
    console.log(i)
}
*/
/*const fruit = ["banana", "orange", "apple", "kiwi"]
for (i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}
*/
/*var array = []
for (i = 0; i <= 9; i++){
    array.push(i)
}
console.log(array)
*/
/*for (i = 0; i <= 100; i++) {
    if (i % 2 === 0 ) {
        console.log(i)
    }
}
*/
/*onst fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var fruitArray = []
for (i = 0; i < fruit.length; i++) {
    if (i % 2 != 0){
        fruitArray.push(fruit[i])
        
    }
}
console.log(fruitArray)
*/

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
/*
  for (i = 0; i < peopleArray.length; i++) {
      console.log(peopleArray[i].name)
  }

  var names = []
  var occupations = []
  for (i = 0; i < peopleArray.length; i++) {
      names.push(peopleArray[i].name)
      occupations.push(peopleArray[i].occupation)
  }
  console.log(names)
  console.log(occupations)
  */
 /*
 for (i = 0; i < peopleArray.length; i++){
     if (i % 2 != 0) {
         console.log(peopleArray[i].name)
     }
 }
 */
/*
var array = []
for (i = 0; i < 3; i++) {
    array.push([])
    for (j = 0; j < 3; j++){
        array[i].push([i])
    }
}
console.log(array)
*/
/*
var array = []
for (i = 0; i < 3; i++) {
    array.push([])
    for (j = 0; j < 3; j++){
        array[i].push(j)
    }
}
console.log(array)
*/
var array = []
for (i = 0; i < 3; i++) {
    array.push([])
    for (j = 0; j < 3; j++){
        array[i].push("x")
    }
}
console.log(array)