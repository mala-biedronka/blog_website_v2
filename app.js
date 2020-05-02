const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const posts = [];

//Get requests
app.get("/", function (req, res) {
    res.render("home", {newPostAdded: posts});
});

//Get request using express route parameters
app.get("/posts/:name", function (req, res) {
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].title === req.params.name) {
            res.render("posts", {newPostTitle: posts[i].title, newPostContent: posts[i].content});
        }
    }
});

app.get("/compose", function (req, res) {
    res.render("compose");
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.get("/contact", function (req, res) {
    res.render("contact");
});

//Post requests
app.post("/", function (req, res) {
    let newPost = {
        title: req.body.postTitle,
        content: req.body.postContent
    };
    posts.push(newPost);
    res.redirect("/");
});



app.listen(3000, function () {
    console.log("The server is running on port 3000");
});