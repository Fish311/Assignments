const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Movie Blueprint
const movieSchema = new Schema({
    movieName: {
        type: String,
        required: true
    },
    dateSeen: {
        type: String,
    },
    genre: {
        type: String,
    },
    rating: {
        type: Number,
    }
})

module.exports = mongoose.model("Movie", movieSchema)