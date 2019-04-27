var express = require("express");
var hbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.engine(".hbs", hbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT  127.0.0.1:" + PORT);
});
