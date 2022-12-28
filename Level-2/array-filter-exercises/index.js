//1 

function fiveAndGreaterOnly(arr) {
    let bigNums = arr.filter(x => x >= 5)
    return bigNums
  }
  // test
  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

  //2

  function evensOnly(arr) {
    let evenNums = arr.filter(x => x % 2 === 0)
    return evenNums
  }
  // test
  console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

  //3

  function fiveCharactersOrFewerOnly(arr) {
    let shortStrings = arr.filter(x => x.length <= 5)
    return shortStrings
  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  
  //4

  function peopleWhoBelongToTheIlluminati(arr){
    let clubMember = arr.filter(x => x.member === true)
    return clubMember
  }
  // test
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]

  //5

  function ofAge(arr){
    let oldEnough = arr.filter(x => x.age >= 18)
    return oldEnough
  }
  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]
