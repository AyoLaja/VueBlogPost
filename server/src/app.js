let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/post');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
    console.log("Connection Succeeded");
})

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

let Post = require ('../models/post')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//Add new post
app.post('/posts', (req, res) => {
    let db = req.db;
    let title = req.body.title;
    let description = req.body.description;
    let new_post = new Post({
        title: title,
        description: description
    })

    new_post.save((error) => {
        if (error) {
            console.log(error);
        }
        res.send({
            success: true,
            message: 'Post saved successfully'
        })
    })
})

//Fetch all posts
app.get('/posts', (req, res) => {
    Post.find({}, 'title description', (error, posts) => {
        if (error) {
            console.log(error);
        }
        res.send({
            posts: posts
        })
    }).sort({_id:-1})
})

app.listen(process.env.PORT || 8081)
