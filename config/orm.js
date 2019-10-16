var connection = require("./connection");

var Burger = {

    //select all()
    all: function(tableName, cb){
        //SELECT * FROM burgers
        var queryString = `SELECT * FROM ${tableName};`;
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    //selectOne()
    create: function(table, columns, values, cb){
        //INSERT INTO burgers (columns) VALUES (values);
        var queryString = `INSERT INTO ${table} (${columns})
        VALUES (${values});`;
        connection.query(queryString, function(err, data){
            if (err) throw err;
            cb(data);
        })

    },
    //updateOne()
    update: function(table, change, id, cb){
        //UPDATE burgers SET {devoured: true} WHERE id = id 
        
        var queryString = `UPDATE ${table} SET {devoured = ${change}} WHERE id = ${id}`

        connection.query(queryString, function(err, data){
            if(err) throw err;
            cb(data);
        })
    }
}

//export
module.exports = Burger;