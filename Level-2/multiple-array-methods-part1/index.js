var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


function sortedOfAge(arr){
    // Your code here
    let newArr = []
    arr.forEach(function(num){
        if(num.age > 18){
            newArr.push(num)
        }
    })
    newArr.sort(function (a, b) {
        if (a.lastName < b.lastName) {
          return -1
        }
        if (a.lastName > b.lastName) {
          return 1
        }
        return 0
      })
    let finalArr = newArr.map(function(obj){
        let final = "<li>" + obj.firstName + " " + obj.lastName + " is " + obj.age + "</li>"
        return final
    })
    return finalArr
 }
 
 console.log(sortedOfAge(peopleArray));
 
 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */