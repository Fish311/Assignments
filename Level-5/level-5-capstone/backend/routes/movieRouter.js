const express = require('express')
const movieRouter = express.Router()
const Movie = require('../models/movie.js')

//get all
movieRouter.get("/", (req, res, next) => {
    Movie.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

// Post One
movieRouter.post("/", (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMovie)
    })
})

//Delete One
movieRouter.delete("/:movieId", (req, res) => {
    Movie.findOneAndDelete({ _id: req.params.movieId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.movieName} from the DB`)
    })
})
//${deletedItem.movieName}
//Update One
movieRouter.put("/:movieId", (req, res, next) => {
    Movie.findOneAndUpdate(
        { _id: req.params.movieId },
        req.body,
        { new: true },
        (err, updatedMovie) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        }
    )
})

module.exports = movieRouter