const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    item: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    onSale: {
        type: Boolean,
        required: false
    }
})

module.exports = mongoose.model('Item', itemSchema)