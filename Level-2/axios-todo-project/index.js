//function to get the list anc call the function to list todos on page
function getData(){
    axios.get("https://api.vschool.io/BradGayheart/todo")
     .then(res => listData(res.data))
     .catch(err => console.log(err))
}

// function to create a new h2 for the item and list it
function listData(data){
    clearList()
    
    for(let i = 0; i < data.length; i++){
        const id = data[i]._id
        const h2 = document.createElement('li')
        h2.id = id

        const checkboxComplete = document.createElement('input')
        checkboxComplete.type = 'checkbox'
        checkboxComplete.id = "complete"
        let labelForComplete = document.createElement('label')
        labelForComplete.for = "complete"
        labelForComplete.textContent = "Complete?"
        h2.appendChild(labelForComplete)
        h2.appendChild(checkboxComplete)

        checkboxComplete.addEventListener("click", function(){
            const updates = {
                completed: true
            }
            const updates2 = {
                completed: false
            }
            if(checkboxComplete.checked){
                axios.put(`https://api.vschool.io/BradGayheart/todo/${id}`, updates)
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error))
                h2.style.textDecoration = "line-through"
            }
            else if(!checkboxComplete.checked){
                axios.put(`https://api.vschool.io/BradGayheart/todo/${id}`, updates2)
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error))
                h2.style.removeProperty("text-decoration")
            }
        })
        // const checkboxIncomplete = document.createElement('input')
        // checkboxIncomplete.type = 'checkbox'
        // checkboxIncomplete.id = "incomplete"
        // let labelForIncomplete = document.createElement('label')
        // labelForIncomplete.for = "incomplete"
        // labelForIncomplete.textContent = "Incomplete"
        // h2.appendChild(checkboxIncomplete)

        todoInfo = document.createElement("div")
        todoInfo.id = "todoInfo"
        todoInfo.innerHTML = `<div>Title: ${data[i].title}<br/>Price: ${data[i].price}<br/>Description: ${data[i].description}<br/>Image: </div>`
        h2.appendChild(todoInfo)
        document.getElementById('todo-list').appendChild(h2)
        const img = document.createElement('img')
        img.src = data[i].imgUrl
        h2.appendChild(img)

        const delButton = document.createElement('button')
        delButton.innerHTML = "Delete"
        delButton.class = "deleteButton"
        h2.appendChild(delButton)
        delButton.addEventListener('click', function(){
            axios.delete(`https://api.vschool.io/BradGayheart/todo/${id}`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))

            h2.remove()
        })

        const lineDiv = document.createElement('div')
        lineDiv.id = "line"
        h2.appendChild(lineDiv)
        console.log(data[i])
    }
}
// function to clear the list so no duplicates are added on submit
function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}



getData()


const form = document.getElementById("todo-form")

//event listener for submit button 
form.addEventListener("submit", function(e){
    e.preventDefault()

    let newTodo = {
        title: form.title.value,
        price: form.price.value,
        description: form.description.value,
        imgUrl: form.image.value
    }
    //resetting values to blank on submit
    form.title.value = ""
    form.price.value = ""
    form.description.value = ""
    form.image.value = ""

    //POST to add new todo to the API
    axios.post("https://api.vschool.io/BradGayheart/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
    
})