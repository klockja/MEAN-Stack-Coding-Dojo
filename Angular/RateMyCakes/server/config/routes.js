const cakes = require('../controllers/cakes')

module.exports = function(app) {
	app.get("/cakes", function (req, res){
		cakes.index(req, res);
	})
	app.get("/cakes/:id", function (req, res){
		cakes.show(req, res);
	})
	app.post("/cakes", function (req, res) {
		cakes.newSubmit(req, res);
	})
	app.post("/cakes/:id", function (req, res) {
		cakes.newRating(req, res);
	})
}