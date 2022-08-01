const { Schema } = require('mongoose')

const restaurantSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true},
    photo_url: { type: String, required: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
}, 
{ timestamps: true }
)

module.exports = restaurantSchema