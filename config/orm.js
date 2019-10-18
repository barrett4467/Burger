var connection = require("../config/connection");

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {

  //select all()
  all: function (tableName, cb) {
    //SELECT * FROM burgers
    var queryString = `SELECT * FROM ${tableName};`;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  //selectOne()
  create: function (table, columns, values, cb) {
    //INSERT INTO burgers (columns) VALUES (values);
    console.log("columns")
    console.log(columns.toString());
    console.log("values")
    console.log(objToSql(values));

    if (values[1] === "devoured") {
      values[1] = 0;
      console.log("values 1");
      console.log(values[1]);
    }

    var queryString = `INSERT INTO ${table} (${columns[0].toString()}, ${columns[1].toString()})
        VALUES ("${values[0]}", "${values[1].toString()}");`;

    console.log(queryString);
    connection.query(queryString, function (err, data) {
      if (err) throw err;
      cb(data);
    })

  },
  //updateOne()
  update: function (table, change, id, cb) {
    //UPDATE burgers SET {devoured: true} WHERE id = id 
    console.log(change);

    var queryString = "UPDATE " + table + " SET devoured = " + objToSql(change) + " WHERE " + id;

    connection.query(queryString, function (err, data) {
      if (err) throw err;
      cb(data);
    })
  }
}

//export
module.exports = orm;