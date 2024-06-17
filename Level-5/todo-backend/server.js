const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')

app.use(express.json())

app.use('/todos', require("./routes/todos.js"))

app.listen(8000, () => {
    console.log('the server is running on port 8000')
})