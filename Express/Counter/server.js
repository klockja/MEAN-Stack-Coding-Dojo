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
// static content
app.use(express.static(path.join(__dirname, "./static")));
//Use session
app.use(session({secret: 'mxnxkcnvjdkdopwisufhfr'}));  // string for encryption

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
    if(req.session.times)
    {
        req.session.times += 1;
    }
    else
    {
        req.session.times = 1;
    }
    times = req.session.times;
    res.render("index");
})

app.post("/add", function (request, response) {
	num = request.body['increment']
	if (num) {
		request.session.times += (num - 1)
	} else {
		request.session.times += (2 - 1)
	}
	response.redirect('/');
})

app.post("/reset", function (request, response) {
	request.session.times = 0;
	response.redirect('/');
})

// post route for adding a user
app.post('/users', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});