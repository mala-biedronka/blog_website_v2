const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//Get requests
app.get("/", function (req, res) {
    res.render("home");
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

app.listen(3000, function () {
    console.log("The server is running on port 3000");
});