//connection to database
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "becca",
    database: "burgers_db"
});

//sets up the actual connection
connection.connect(function(err){
    if (err) throw err;
    console.log(`Connected`);
});


//export connection
module.exports = connection;