var express = require("express");
var app = express();
var session = require("express-session");
app.use(session({secret: 'codingdojorocks'}));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

const flash = require('express-flash');
app.use(flash()); 

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo', {useNewUrlParser: true});

const QuoteSchema = new mongoose.Schema({
    author: {type: String, required: true, minlength: 6},
    text: {type: String, required: true, minlength: 20},
    created_at: Date
})
const Quote = mongoose.model('Quote', QuoteSchema);

// where the routes used to be, we're going to require routes.js
// since routes.js exports a function, server.js will receive that function
// invoke the function we get from the require and pass it app as an argument
require('./server/config/routes.js')(app)

app.listen(8000, function() {
	console.log("listening on port 8000");
})