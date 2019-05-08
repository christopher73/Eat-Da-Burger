module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Burgers;
};

// ============================================
// NOTES:
// All number types (INTEGER, BIGINT, FLOAT, DOUBLE, REAL, DECIMAL)
// expose the properties UNSIGNED and ZEROFILL
// The CHAR and STRING types expose the BINARY property
// ============================================
