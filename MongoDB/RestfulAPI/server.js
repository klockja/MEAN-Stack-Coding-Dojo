var express = require("express");
var app = express();

app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks', {useNewUrlParser: true});

const TaskSchema = new mongoose.Schema({
	title: {type: String, required: true, minlength: 3},
	description: {type: String, required: true, minlength: 10},
	completed: {type: Boolean, default: false},
	}, {timestamps: true})

const Task = mongoose.model('Task', TaskSchema);

// get all tasks
app.get("/tasks", function (req, res){
	Task.find()
		.then(data => res.json(data))
		.catch(err => res.json(err));
})

// get one task
app.get("/tasks/:id", function (req, res){
	Task.find({_id: req.params.id})
		.then(data => res.json(data))
		.catch(err => res.json(err));
})

// create a task
app.post("/tasks", function (req, res){
	const task = new Task();
	task.title = req.body.title;
	task.description = req.body.description;
	task.save()
		.then(newTaskData => {
			console.log('Task created: ', newTaskData)
			res.json(newTaskData)
			})
		.catch(err => {
			console.log(err)
			res.json(err)
		});
})

// update a task
app.put("/tasks/:id", function (req, res){
	Task.findOneAndUpdate({_id: req.params.id}, {
		completed: req.body.completed
	})
		.then(editTaskData => {
			console.log('Task updated: ', editTaskData)
			res.json(editTaskData)
			})
		.catch(err => {
			console.log(err)
			res.json(err)
		});
})

// delete a task
app.delete("/tasks/:id", function (req, res){
	Task.deleteOne({_id: req.params.id})
})

app.listen(8000, function() {
	console.log("listening on port 8000");
})