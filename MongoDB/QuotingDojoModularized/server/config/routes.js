const mongoose = require('mongoose'),
Quote = mongoose.model('Quote')

module.exports = function(app)
{
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
}