var mongoose = require('../config/mongoose.js')

const QuoteSchema = new mongoose.Schema({
    author: {type: String, required: true, minlength: 6},
    text: {type: String, required: true, minlength: 20},
    created_at: Date
})
const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote