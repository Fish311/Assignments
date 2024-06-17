const express = require("express")
const todoRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const todos = [
    {
        name: "The name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "a;kfdj;akl",
        description: "adfadsa;fklasd;kfjas;dljfklas;",
        imageUrl: "NA",
        completed: true,
        _id: uuidv4()
    }
]

//get all
todoRouter.get("/", (req, res) => {
    res.send(todos)
})

//get one
todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

// Post One
todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Successfully added new todo to the list.`)
})

// Delete one
todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully removed todo.")
})

//Update One
todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})

module.exports = todoRouter