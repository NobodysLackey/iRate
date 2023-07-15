const { Schema } = require('mongoose')

const reviewSchema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true},
    body: { type: String, required: true },
    rating: { type: Number, required: true},
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
}, 
{ timestamps: true }
)

module.exports = reviewSchema