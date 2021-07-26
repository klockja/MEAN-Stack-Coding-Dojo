const authors = require('../controllers/authors')

module.exports = function(app){
	app.get("/authors", function (req, res){
		authors.all(req, res);
	})
	app.post("/authors", function (req, res) {
		authors.create(req, res);
	})
	app.get("/authors/:id", function (req, res){
		authors.show(req, res);
	})
	app.put("/authors/:id", function (req, res){
		authors.edit(req, res);
	})
	app.delete("/authors/:id", function (req, res){
		authors.delete(req, res);
	})
	app.get("/authors/quotes/:id", function (req, res){
		authors.all(req, res);
	})
	app.get("/authors/write/:id", function (req, res){
		authors.all(req, res);
	})
	app.post("/authors/write/:id", function (req, res) {
		authors.createQuote(req, res);
	})
	app.delete("/authors/write/:id/:quote", function (req, res){
		authors.deleteQuote(req, res);
	})
	app.put("/authors/write/:id/:increment", function (req, res) {
		authors.vote(req, res);
	})
}