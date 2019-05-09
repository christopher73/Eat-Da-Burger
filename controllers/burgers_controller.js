var express = require("express");

var router = express.Router();

// Import the model (burger_db.js) to use its database functions.

var burger_db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger_db.Burgers.findAll({
    attributes: ["id", "burger_name", "devoured"]
  }).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log(req.body.name);
  burger_db.Burgers.create({ burger_name: req.body.name }).then(function(
    result
  ) {
    // Send back the ID of the new quote
    res.json({ id: result });
    //console.log(result.insertId);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition HERE is", condition);

  burger_db.Burgers.update(
    { devoured: 1 },
    {
      where: { id: req.params.id }
    }
  ).then(function(data) {
    console.log(data[0]);
    res.json(data);
  });

  // .then(function() {

  // });
});

// Export routes for server.js to use.
module.exports = router;
