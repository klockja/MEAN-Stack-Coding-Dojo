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

app.get("/", (req, res) => {
    var errors = [];
    for (var err of req.flash('errors'))
    {
        errors.push(err)
    }
    res.render("index", {errors: errors})
})

app.get("/quotes", (req, res) => {
    var quotes = [];
    Quote.find()
        .then(data => res.render("quotes", {quotes: data}))
        .catch(err => res.json(err));
})

app.post("/quotes", (req, res) => 
{
    console.log("POSTING QUOTE")
    const quote = new Quote();
    quote.author = req.body.author;
    quote.text = req.body.text;
    quote.created_at = new Date()
    quote.save()
        .then(data => {
            console.log("Created quote: " + data);
            res.redirect('/quotes');
        })
        .catch(error => {
            console.log("ERROR: " + error)
			for (var key in error.errors) {
				req.flash('errors', error.errors[key].message);
			}
			res.redirect('/');
        });
})

app.listen(8000, function() {
	console.log("listening on port 8000");
})