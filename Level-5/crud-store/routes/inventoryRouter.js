const express = require('express')
const inventoryRouter = express.Router()
const Items = require('../models/item.js')

// get all
inventoryRouter.get("/", (req, res, next) => {
    Items.find((err, item) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

// get one
inventoryRouter.get("/:itemId", (req,res, next) => {
    Items.findOne({ _id: req.params.itemId }, (err, foundItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundItem)
    }) 
})

// post one
inventoryRouter.post("/",(req, res, next) => {
    const newItem = new Items(req.body)
    newItem.save((err, savedItem) => {
     if(err){
         res.status(500)
         return next(err)
     }
     return res.status(201).send(savedItem)
    })
 })

 // delete one
inventoryRouter.delete("/:itemId", (req,res, next) => {
    Items.findOneAndDelete({ _id: req.params.itemId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.item} from the Database`)
    }) 
})

// put one
inventoryRouter.put("/:itemId", (req,res, next) => {
    Items.findOneAndUpdate(
     { _id: req.params.itemId},
     req.body,
     { new: true },
     (err, updatedItem) => {
         if(err){
             res.status(500)
             return next(err)
         }
         return res.status(201).send(updatedItem)
     })
 })

 //get based on paramater
 inventoryRouter.get("/search/sale", (req, res, next) => {
    Items.find({onSale: req.query.onSale}, (err, item) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

 module.exports = inventoryRouter