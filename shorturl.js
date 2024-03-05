const mongoose = require('mongoose')
const nanoid = require('nanoid')
const shorturlSchema = new mongoose.Schema({
    Entire: {
        type: String,
        required: true
    },

    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('Shorturl', shorturlSchema )