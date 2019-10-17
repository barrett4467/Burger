//import orm js
var orm = require("../config/orm");

var burger = {
    all: function(cb){
        //orm.all needs table name 
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    create: function(columns, values, cb){
        orm.create("burgers", columns, values, function(res){
            cb(res);
        });
    },
    update: function(change, condition, cb){
        orm.update("burgers", change, condition, function(res){
            cb(res);
        });
    }
};


//export burger
module.exports = burger;