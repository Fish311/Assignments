//1

function collectAnimals(...animal) {
    return animal;
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//2

function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))
/*=> {
        fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
     }
*/
//3

function parseSentence({location, duration}){
    
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
  console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks",
  }));

  //4

function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}

//5

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    /*your code here*/
    let [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are ${firstFav}, ${secondFav} and ${thirdFav}.`;
}

console.log(returnFavorites(favoriteActivities))

//6

function combineAnimals(arr1, arr2, arr3) {
    return [...arr1, ...arr2, ...arr3]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//7

const product = (...rest) => {
    return rest.reduce((acc, number) => acc * number, 1)
  }

  //8

function unshift(array, ...rest) {
    return array.concat(...rest);
  }

  console.log(unshift([0, 1, 2], 'a', 'b', 'c', 'd'))

  //9

  const populatePeople = (names) => {
    return names.map((name) => {
        // your code
        var [firstName, lastName] = name.split(" ");
        return {
            firstName,
            lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]