const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { v4: uuidv4 } = require("uuid");

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
app.get("/posts/:id", function (req, res) {
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === req.params.id) {
            res.render("posts", {newPostTitle: posts[i].title, newPostContent: posts[i].content});
            return;
        }
    }
    res.status(404).send();
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
        id: uuidv4(),
        title: req.body.postTitle,
        content: req.body.postContent
    };
    posts.push(newPost);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("The server is running on port 3000");
});