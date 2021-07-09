// Load the express module (Where do you think this comes from?)
var express = require("express");
// invoke var express and store the resulting application in var app
var app = express();
var path    = require("path");
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it

// // This sets the location where express will look for the ejs views
// app.set('views', __dirname + '/views'); 
// // Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
// app.set('view engine', 'ejs');

// lets handle the base route "/" and respond with "Hello Express"
app.get('/', function(request, response) {
    response.send("<h1>Hello Express</h1>");
  })

app.get('/cars', function(request, response) {
    response.sendFile(path.join(__dirname+ '/static/cars.html'));
  })

  // notice that the function is app.get(...) why do you think the function is called get?
// Tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
  })
  // this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)
  