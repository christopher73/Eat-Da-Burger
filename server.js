var express = require("express");
var hbs = require("express-handlebars");

var app = express();
var db = require("./models");

var PORT = process.env.PORT || 3010;
//********* to display static !!!!!!!
app.use(express.static("public"));
//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine(
  ".hbs",
  hbs({
    defaultLayout: "main",
    extname: ".hbs"
  })
);
app.set("view engine", ".hbs");

var routes = require("./controllers/burgers_controller");

app.use(routes);

// Starts the server to begin listening
// =============================================================
//  =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
