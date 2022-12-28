const form = document.passengerInfo

form.addEventListener("submit", (event) => {
    event.preventDefault()
    // Note for next time: Grab all the inputs on the form
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    form.firstName.value = ""
    form.lastName.value = ""

    const age = form.age.value
    const gender = form.gender.value
    
    const destination = form.destination.value

    const checkedInputs = []
    for(let i = 0; i < form.dietRestrictions.length; i++) {
        if(form.dietRestrictions[i].checked){
            checkedInputs.push(form.dietRestrictions[i].value)
        }
    }
    console.log(firstName)
    console.log(lastName)
    console.group(age)
    console.log(gender)
    console.log(destination)
    console.log(checkedInputs)

    alert("First name: " + firstName + "\nLast name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + destination + "\nDietary restrictions: " + checkedInputs)
})