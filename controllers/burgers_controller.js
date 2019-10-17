//import Express
var express = require("express");
//create router
var router = express.Router();
//import burger.js
var burger = require("../models/burgerModel.js");


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
});
router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    burger.update({
        devoured: req.body.devoured
    }, condition, function(burgers){
        if(burgers.changedRows === 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router;
//export router