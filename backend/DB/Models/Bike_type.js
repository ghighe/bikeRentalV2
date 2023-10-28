const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const bike_type = sequelize.define("bike_types", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false
  },

  price_per_minute: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = { bike_type };
