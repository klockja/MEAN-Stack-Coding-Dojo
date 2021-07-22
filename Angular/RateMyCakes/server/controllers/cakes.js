const {Rating, Cake} = require('../models/cake.js')

module.exports = {
	index: (req, res) => {
		Cake.find()
			.then(data => res.json(data))
			.catch(err => res.json(err));
	},
	show: (req, res) => {
		Cake.find({_id: req.params.id})
			.then(data => res.json(data))
			.catch(err => res.json(err));
	},
	newSubmit: (req, res) => {
		const cake = new Cake();
		cake.baker = req.body.baker;
		cake.image = req.body.image;
		cake.description = req.body.description;
		cake.save()
			.then(data => {
				console.log('New Cake: ', data)
				res.redirect('/cakes');
			})
			.catch(err => {
				console.log(err)
				for (var key in err.errors) {
					req.flash('errors', err.errors[key].message);
				}
				res.redirect('/cakes/new');
			});
	},
	newRating: (req, res) => {
		const rating = new Rating();
		rating.stars = req.body.stars;
		rating.content = req.body.content;
		rating.save()
			.then(newRatingData => {
				console.log('New Rating: ' + newRatingData)
				Cake.findOneAndUpdate({_id: req.params.id}, {$push: {ratings: newRatingData}}, function(err,data){
					data.ratings.push({data})
				})
				res.redirect('/cakes');
				})
			.catch(err => {
				console.log(err)
				res.redirect('/cakes');
			});
	},
}