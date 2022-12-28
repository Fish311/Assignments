var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
function forception(people, alphabet) {
    alphabet.split("")
    var newArray = []
    for (i = 0; i < people.length; i++){
        newArray.push(people[i])
        for (j=0; j < alphabet.length; j++){
            newArray.push(alphabet[j])
        }
    }
    return newArray
}
var newArray = forception(people, alphabet)
console.log(newArray)