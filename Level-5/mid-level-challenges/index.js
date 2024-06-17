function extractUniqueCharacters(strings) {
    const uniqueCharArray = []
    const joinedStrings = strings.join("")
    
    for (i=0; i < joinedStrings.length; i++) {
        if (!uniqueCharArray.includes(joinedStrings[i])) {
            uniqueCharArray.push(joinedStrings[i])
        }
        else {
            console.log(`The letter ${joinedStrings[i]} has already been added to the array`)
        }
    }
    return uniqueCharArray
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']

// challenge 2


function sortByProperty(objects, propertyName) {
    objects.sort((firstItem, secondItem) => 
        {
            if (firstItem[propertyName] < secondItem[propertyName]) {
                return -1
            }  
            if (firstItem[propertyName] > secondItem[propertyName]) {
                return 1
            }
            
            return 0
        }) 
    return objects
}

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, "name");
console.log(sortedByAge);

function generateTable(num){
// const numberArray = [1,2,3,4,5,6,7,8,9,10]
// const newArray = numberArray.map((function(number) {
    // }))
    for (let i = 1; i <= 10; i++){
           console.log(`${num} * ${i} = ${num * i}`)
    
}
}


generateTable(2)
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 10 = 20