var mongoose = require('../config/mongoose.js')

const RatingSchema = new mongoose.Schema({
	content: {type: String, required: [true, 'Comments need content'], minlength: 10},
	stars: {type: Number},
})

const CakeSchema = new mongoose.Schema({
	baker: {type: String, required: true, minlength: 3},
	image: {type: String, required: true},
	description: {type: String, required: true, minlength: 10},
	ratings: [RatingSchema],
	}, {timestamps: true})

// create an object that contains methods for mongoose to interface with MongoDB
const Rating = mongoose.model('Rating', RatingSchema);
const Cake = mongoose.model('Cake', CakeSchema);

module.exports = {
	Rating,
	Cake,
}