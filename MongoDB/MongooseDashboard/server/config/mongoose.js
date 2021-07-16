const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_database', {useNewUrlParser: true});

module.exports = mongoose