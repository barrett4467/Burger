var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();


// express will look to public first for html files
app.use(express.static("public"));

//sets up the middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
    console.log(`Server on http://localhost:${PORT}`);
})
