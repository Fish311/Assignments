var form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
    var newListItem = form.listItem.value
    form.listItem.value = ""

    var newDiv = document.createElement('div')
    newDiv.textContent = newListItem
    var list = document.getElementById("parentDiv")
    list.append(newDiv)
})
// testing a git commit and push