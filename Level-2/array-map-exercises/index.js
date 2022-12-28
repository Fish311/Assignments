//1

function doubleNumbers(arr){
    // your code here
    const result = arr.map(function(num){
        return num * 2
    })
    return result
  }
  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
  
  //2

  function stringItUp(arr){
    // your code here
    const resultString = arr.map(String)
    return resultString
  }
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

  //3

  function capitalizeNames(arr){
    // your code here
    const capNames = arr.map(function(name){
        name = name.toLowerCase()
        let nameUp = name[0].toUpperCase() + name.slice(1)
        return nameUp
    })
    return capNames
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]

  //4

  function namesOnly(arr){
    const nameArr = arr.map(function(x){
        let nameOnly = x.name
        return nameOnly
    })
    return nameArr
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

  //5

  function makeStrings(arr){
    let movieArr = arr.map(function(y){
        let movie = ""
        if(y.age < 18){
            movie = y.name + " is under age!!"
        }
        else {
            movie = y.name + " can go to The Matrix"
        }
        return movie
    })
    return movieArr
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]

  //6

  function readyToPutInTheDOM(arr){
    let hArr = arr.map(function(z){
        
        return `<h1>${z.name}</h1><h2>${z.age}</h2>`
        
    })
    return hArr
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]