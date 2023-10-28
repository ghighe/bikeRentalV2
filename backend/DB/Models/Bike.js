const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const bike = sequelize.define("bikes", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  type: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  register_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = { bike };
