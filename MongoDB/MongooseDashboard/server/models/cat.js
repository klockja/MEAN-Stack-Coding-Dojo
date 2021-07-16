var mongoose = require('../config/mongoose.js')

const CatSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    age: {type: Number, required: true, max: 38},
    created_at: Date
})

const Cat = mongoose.model('Cat', CatSchema);

module.exports = Cat