const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')

// const bounties = [
//     {
//        firstName: "Yoda",
//        lastName:  "",
//        living: false,
//        bountyAmount: 3000,
//        type: "Jedi",
//        _id: uuidv4()
//     },
//     {
//         firstName: "Darth",
//         lastName:  "Sidious",
//         living: false,
//         bountyAmount: 5000,
//         type: "Sith",
//         _id: uuidv4()
//      }
// ]

//get all
bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

// bountyRouter.get('/', async(req, res, next) => {
//     try {
//         const bounties = await Bounty.find()
//         return res.status(200).send(bounties)
//     } catch (err) {
//         res.status(500)
//         return next(err)
//     }
// })

//get one
// bountyRouter.get("/:bountyId", (req, res, next) => {
//     const bountyId = req.params.bountyId
//     const foundBounty = bounties.find(bounty => bounty._id === bountyId)
//     if(!foundBounty) {
//         const error = new Error("The item was not found.")
//         return next(error)
//     }
//     res.send(foundBounty)
// })

// Post One
bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

//Delete One
bountyRouter.delete("/:bountyId", (req, res) => {
    Bounty.findOneAndDelete({ _id: req.params.bountyId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted bounty for ${deletedItem.firstName} ${deletedItem.lastName} from the DB`)
    })
})

//Update One
bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        { _id: req.params.bountyId },
        req.body,
        { new: true },
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

// bountyRouter.put('/:bountyId', async(req, res, next) => {
//     try {
//         const updatedBounty = await Bounty.findByIdAndUpdate(
//             req.params.bountyId,
//             req.body,
//             {new: true}
//         )
//         return res.status(201).send(updatedBounty)
//     } catch (error) {
//         res.status(500)
//         return next(err)
//     }
// })

module.exports = bountyRouter

// mongoose
// express
// morgan
// dotenv

// npm i mongoose express morgan dotenv