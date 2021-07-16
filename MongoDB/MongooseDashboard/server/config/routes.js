const cats = require('../controllers/cats')

module.exports = function(app)
{
    app.get("/", (req, res) => {
        cats.index(req, res);
    })
    app.get("/cats/new", function (req, res){
        cats.new(req, res)
    })
    app.get("/cats/:id", function (req, res){
        cats.show(req, res)
    })
    app.get("/cats/edit/:id", function (req, res){
        cats.edit(req, res)
    })
    app.post("/cats/:id", function (req, res) {
        cats.edit_submit(req, res)
    })
    app.post("/cats/destroy/:id", function (req, res) {
        cats.destroy(req, res)
    })
    app.post("/cats", function (req, res) {
        cats.new_submit(req, res)
    })
}