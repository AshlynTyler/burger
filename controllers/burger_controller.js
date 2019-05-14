const express = rquire("express")

const burger = require("./../models/burger")

var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//api routes

app.get("/api/burgers", function(req,res){
    return res.json(burger.selectAllBurgers)
});

app.post("/api/newburger/:burgerName", function(req,res){
    burger.createBurger(req.params.burgerName)
});

app.put("/api/eatburger/:id", function(req,res){
    burger.eatBurger(req.params.id)
});

//page routes

app.get("/", function(req,res){
    res.render("index", {list: burger.selectAllBurgers})
});