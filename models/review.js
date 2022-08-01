const { Schema } = require('mongoose')

const reviewSchema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true},
    body: { type: String, required: true },
    rating: { type: Number, required: true}
}, 
{ timestamps: true }
)

module.exports = reviewSchema