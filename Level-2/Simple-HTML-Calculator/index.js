const form = document["math"]

form.addEventListener("submit", function(event) {
    event.preventDefault()
    
    var addFirst = form.addFirst.value
    var addSecond = form.addSecond.value
    var addEquals = +addFirst + +addSecond;
    form.addFirst.value = ""
    form.addSecond.value = ""
    
    var subFirst = form.subFirst.value
    var subSecond = form.subSecond.value
    var subEquals = +subFirst - +subSecond;
    form.subFirst.value = ""
    form.subSecond.value = ""

    var mulFirst = form.mulFirst.value
    var mulSecond = form.mulSecond.value
    var mulEquals = +mulFirst * +mulSecond;
    form.mulFirst.value = ""
    form.mulSecond.value = ""

    addAnswer = document.createElement('div')
    addAnswer.textContent = addEquals
    addDiv = document.getElementById("add")
    addDiv.append(addAnswer)

    subAnswer = document.createElement('div')
    subAnswer.textContent = subEquals
    subDiv = document.getElementById("subtract")
    subDiv.append(subAnswer)

    mulAnswer = document.createElement('div')
    mulAnswer.textContent = mulEquals
    mulDiv = document.getElementById("multiply")
    mulDiv.append(mulAnswer)
    
})

// notes for tomorrow: Add the rest of the operactions as variables inside the form event listener