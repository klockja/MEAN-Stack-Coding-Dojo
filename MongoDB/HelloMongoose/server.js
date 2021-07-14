// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
//Require Session
var session = require('express-session');
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));

//Use session
app.use(session({secret: 'zmxncmvnzxcjasou'}));  // string for encryption

const flash = require('express-flash');
app.use(flash());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
    first_name:  { type: String, required: true, minlength: 6},
    last_name: { type: String, required: true, maxlength: 20 },
    age: { type: Number, min: 1, max: 150 },
    email: { type: String, required: true }
}, {timestamps: true });

// create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);


app.post('/users', (req, res) => {
const user = new User(req.body);
user.save()
    .then(() => res.redirect('/'))
    .catch(err => {
        console.log("We have an error!", err);
        // adjust the code below as needed to create a flash message with the tag and content you would like
        for (var key in err.errors) {
            req.flash('registration', err.errors[key].message);
        }
        res.redirect('/');
    });
});


// static content
app.use(express.static(path.join(__dirname, "./static")));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', (req, res) => {  
    User.find()
        .then(data => res.render("index", {users: data}))
        .catch(err => res.json(err));
});

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});