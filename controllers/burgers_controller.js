//import Express
var express = require("express");
//create router
var router = express.Router();
//import burger.js
var burger = require("../models/burger");
var app = express();

router.get("/", function(req, res){
    burger.all(function(data){
        //the data being sent need to be an object
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        //tells handlebars the name of template and what to render on page 
        res.render("index", hbsObject);
    })
})

module.exports = router;
//export router