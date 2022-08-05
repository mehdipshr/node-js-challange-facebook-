const mongoose = require('mongoose');

const raportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    massage:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model("raports", raportSchema)