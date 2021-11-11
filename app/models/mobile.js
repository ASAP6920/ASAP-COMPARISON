const mongoose = require('mongoose')

const mobileSchema = new mongoose.Schema({
    trending: {
        type: String,
        required: true
    },
    preCompared: {
        type: String,
        required: true
    },
    brandName: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},{versionKey: false})

const Mobile = mongoose.model('Mobile', mobileSchema)
module.exports = Mobile