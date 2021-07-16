var Cat = require('../models/cat.js')

module.exports = {
    index: function (req, res)
    {
        Cat.find()
            .then(data => res.render("index", {cats: data}))
            .catch(err => res.json(err));
    },
    new: function (req, res){
        var errors = [];
        for (var err of req.flash('errors')) {
            errors.push(err)
        }
        res.render("new", {errors: errors})
    },
    show: function (req, res){
        Cat.find({_id: req.params.id})
            .then(data => res.render("details", {cats: data}))
            .catch(err => res.json(err));
    },
    edit: function (req, res){
        Cat.find({_id: req.params.id})
        .then(data => res.render("edit", {cats: data}))
        .catch(err => res.json(err));
    },
    edit_submit: function (req, res){
        Cat.findOneAndUpdate({_id: req.params.id}, {
            name: req.body.name,
            age: req.body.age
        })
            .then(catEdit => {
                console.log('cat updated: ', catEdit)
                res.redirect(`/cats/${req.params.id}`);
            })
            .catch(err => {
                console.log(err)
                for (var key in err.errors) {
                    req.flash('errors', err.errors[key].message);
                }
                res.redirect(`/cats/edit/${req.params.id}`);
            });
    },
    destroy: function (req, res){
        Cat.remove({_id: req.params.id})
        .then(deletedCat => {
            console.log('cat deleted: ', deletedCat)
            res.redirect('/');
        })
        .catch(err => {
            console.log(err)
            for (var key in err.errors) {
                req.flash('errors', err.errors[key].message);
            }
            res.redirect(`/cat/${req.params.id}`);
        });
    },
    new_submit: function (req, res){
        const cat = new Cat();
        cat.name = req.body.name;
        cat.age = req.body.age;
        cat.created_at = new Date()
        cat.save()
            .then(data => {
                console.log('Created Cat: ', data)
                res.redirect('/');
            })
            .catch(err => {
                console.log(err)
                for (var key in err.errors) {
                    req.flash('errors', err.errors[key].message);
                }
                res.redirect('/cats/new');
            });
    }
}