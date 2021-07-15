var express = require("express");
var app = express();
var session = require("express-session");
app.use(session({secret: 'jamesrocks'}));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

const flash = require('express-flash');
app.use(flash()); 

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board', {useNewUrlParser: true});

const CommentSchema = new mongoose.Schema(
    {
    name: {type: String, required: [true, 'Name required'], minlength: 2},
    content: {type: String, required: [true, 'Comments need content'], minlength: 9},
    }, {timestamps: true})

const PostSchema = new mongoose.Schema(
    {
    name: {type: String, required: [true, 'Name required'], minlength: 2}, 
    content: {type: String, required: [true, 'Posts need content'], minlength: 9},
    comments: [CommentSchema]
    }, {timestamps: true})

const Comment = mongoose.model('Comment', CommentSchema);
const Post = mongoose.model('Post', PostSchema);

app.get("/", (req, res) => 
{
    var errors = [];
    Post.find()
        .then(data => {
            for (var e of req.flash('errors')) {
                errors.push(e)
            }
            res.render("index", {posts: data, errors: errors})
        })
        .catch(err => res.json(err));
})

app.post("/post", (req, res) => {
    const post = new Post();
    post.name = req.body.post_name;
    post.content = req.body.post_content;
    post.save()
        .then(post_data => {
            console.log("Created post: " + post_data)
            res.redirect('/');
        })
        .catch(err => {
            console.log(err)
            for (var key in err.errors) {
                req.flash('errors', err.errors[key].message);
            }
            res.redirect('/');
        });
})

app.post("/comment/:id", (req, res) => {
    const comment = new Comment();
    comment.name = req.body.comment_name;
    comment.content = req.body.comment_content;
    comment.save()
        .then(comment_data => {
            console.log("Created comment: " + comment_data)
            Post.findOneAndUpdate({_id: req.params.id}, {$push: {comments: comment_data}}, (err, data) => {
                data.comments.push({data})
            })
            res.redirect('/');
        })
        .catch(err => {
            console.log(err)
            for (var key in err.errors)
            {
                req.flash('errors', err.errors[key].message);
            }
            res.redirect('/');
        })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})