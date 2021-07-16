var express = require("express");
var app = express();

app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1955', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 3},
	}, {timestamps: true})

// create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

app.get("/", function (req, res){
	User.find()
		.then(data => res.json(data))
		.catch(err => res.json(err));
})

app.get("/new/:name", function (req, res){
	const user = new User();
	user.name = req.params.name;
	user.save()
		.then(newUserData => {
			console.log('User created: ', newUserData)
			res.redirect('/');
			})
		.catch(err => {
			console.log(err)
			res.redirect('/');
		});
})

app.get("/remove/:name", function (req, res){
	User.deleteOne({name: req.params.name}, function (err) {
		if (err) console.log (err);
		console.log("Deleted " + req.params.name)
		res.redirect('/');
	})
})

app.get("/:name", function (req, res)
{
	User.find({name: req.params.name})
		.then(data => res.json(data))
		.catch(err => res.json(err));
})

app.listen(8000, function() {
	console.log("listening on port 8000");
})
