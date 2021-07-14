var express = require("express");
var app = express();
var session = require("express-session");
app.use(session({secret: 'mongooses are cute'}));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

const flash = require('express-flash');
app.use(flash()); 

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_database', {useNewUrlParser: true});

const CatSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    age: {type: Number, required: true, max: 38},
    created_at: Date
})
const Cat = mongoose.model('Cat', CatSchema);

app.get("/", (req, res) => {
    Cat.find()
        .then(data => res.render("index", {cats: data}))
        .catch(err => res.json(err));
})

app.get("/cats/new", function (request, response){
    var errors = [];
    for (var err of request.flash('errors')) {
        errors.push(err)
    }
response.render("new", {errors: errors})
})

app.get("/cats/:id", function (request, response){
Cat.find({_id: request.params.id})
    .then(data => response.render("details", {cats: data}))
    .catch(err => response.json(err));
})

app.get("/cats/edit/:id", function (request, response){
Cat.find({_id: request.params.id})
    .then(data => response.render("edit", {cats: data}))
    .catch(err => response.json(err));
})

app.post("/cats/:id", function (request, response) {
Cat.findOneAndUpdate({_id: request.params.id}, {
    name: request.body.name,
    age: request.body.age
})
    .then(catEdit => {
        console.log('cat updated: ', catEdit)
        response.redirect(`/cats/${request.params.id}`);
    })
    .catch(err => {
        console.log(err)
        for (var key in err.errors) {
            request.flash('errors', err.errors[key].message);
        }
        response.redirect(`/cats/edit/${request.params.id}`);
    });
})

app.post("/cats/destroy/:id", function (request, response) {
Cat.remove({_id: request.params.id})
    .then(deletedCat => {
        console.log('cat deleted: ', deletedCat)
        response.redirect('/');
    })
    .catch(err => {
        console.log(err)
        for (var key in err.errors) {
            request.flash('errors', err.errors[key].message);
        }
        response.redirect(`/cat/${request.params.id}`);
    });
})

app.post("/cats", function (request, response) {
const cat = new Cat();
cat.name = request.body.name;
cat.age = request.body.age;
cat.created_at = new Date()
cat.save()
    .then(data => {
        console.log('Created Cat: ', data)
        response.redirect('/');
    })
    .catch(err => {
        console.log(err)
        for (var key in err.errors) {
            request.flash('errors', err.errors[key].message);
        }
        response.redirect('/cats/new');
    });
})

app.listen(8000, function() {
console.log("listening on port 8000");
})