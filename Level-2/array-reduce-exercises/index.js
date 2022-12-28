//1

function total(arr) {
    // your code here
    
    let result = arr.reduce(function(final, num){
        final += num
        return final
    })
    return result
 }
 
 console.log(total([1,2,3])); // 6

 //2

 function stringConcat(arr) {
    // your code here
    let resultTwo = arr.reduce(function(final, numb){
        return final + numb
    }, "")
    return resultTwo
 }
 
 console.log(stringConcat([1,2,3])); // "123"

 //3

 function totalVotes(arr) {
    // your code here
    let voteCount = arr.reduce(function(final, voter){
        if(voter.voted){
            final++
        }
        return final
    }, 0)
    return voteCount
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters)); // 7

 //4

 function shoppingSpree(arr) {
    // your code here
    let totalCost = arr.reduce(function(final, cost){
        final = final + cost.price
        return final
    }, 0)
    return totalCost
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 console.log(shoppingSpree(wishlist)); // 227005

 //5

 function flatten(arr) {
    // your code here
    let oneArr = arr.reduce(function(final, array){
        final = final.concat(array)
        return final
    }, [])
    return oneArr
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

 //6

 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   // your code here
   let voteResults = arr.reduce(function(final, voter){
    if(voter.age <= 25) {
        if(voter.voted === true){
            final.numYoungVotes++
        }
        final.numYoungPeople++
    }
    else if(voter.age > 25 && voter.age < 36) {
        if(voter.voted === true){
            final.numMidVotesPeople++
        }
        final.numMidsPeople++
    }
    else {
        if (voter.voted === true){
            final.numOldVotesPeople++
        }
        final.numOldsPeople++
    }
    return final
   }, {numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0})
    return voteResults
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
