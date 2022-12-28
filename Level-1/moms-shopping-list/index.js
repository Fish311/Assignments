var form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
    var newListItem = form.listItem.value
    form.listItem.value = ""
    var list = document.getElementById("parentDiv")
    var parent = document.createElement('div')
    parent.style.display = "flex"
    var newLi = document.createElement('li')
    var children = list.children
    newLi.id = children.length
    var deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    deleteButton.classList.add(children.length)
    deleteButton.addEventListener('click', function (e){
        var id = e.target.classList[0]
      
        var row = document.getElementById(id)
        row.remove()
    })
    var newDiv = document.createElement('div')
    newDiv.textContent = newListItem
    parent.append(deleteButton)
    parent.append(newDiv)
    newLi.append(parent)
    list.append(newLi)
})
