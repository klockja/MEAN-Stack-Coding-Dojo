const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/weather', {useNewUrlParser: true});

module.exports = mongoose