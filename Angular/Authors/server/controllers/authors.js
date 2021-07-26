var Author = require('../models/author.js')

module.exports = {
	all: function (req, res) {
		Author.find()
			.then(data => res.json(data))
			.catch(err => res.json(err));
	},
	create: function (req, res) {
		const author = new Author();
		author.name = req.body.name;
		author.save()
			.then(data => res.json(data))
			.catch(err => res.json(err));
	},
	show: function (req, res) {
		Author.findOne({_id: req.params.id})
			.then(data => res.json(data))
			.catch(err => res.json(err));
	},
	edit: function (req, res) {
		Author.updateOne({_id: req.params.id}, req.body)
			.then(data => res.json(data))
			.catch(err => res.json(err));
	},
	delete: function (req, res) {
		Author.deleteOne({_id: req.params.id})
			.then(data => res.json(data))
			.catch(err => res.json(err));
	},
	createQuote: function (req, res) {
		author = Author.findOne({_id: req.params.id})
			.then(author=> {
				quote = {content: req.body.content, votes: req.body.votes};
				author.quotes.push(quote)
				author.save()
					.then(data => res.json(data))
					.catch(err => res.json(err));
			})
			.catch(err => res.json(err));
	},
	deleteQuote: function (req, res) {
		const query = { _id: req.params.id }
		const updateDocument = {
			$pull: {"quotes": { "_id": req.params.quote}}
		};
		Author.updateOne(query, updateDocument)
			.then(data => res.json(data))
			.catch(err => console.log(err));
	},
	vote: function (req, res) {
		const query = { _id: req.params.id }
		const updateDocument = {
			$set: {"quotes.$[orderItem].votes": (parseInt(req.body.votes) + parseInt(req.params.increment))}
		};
		const options = {
			arrayFilters: [{
				"orderItem._id": req.body._id,
			}]
		};
		Author.updateOne(query, updateDocument, options)
			.then(data => res.json(data))
			.catch(err => console.log(err));
	},
}