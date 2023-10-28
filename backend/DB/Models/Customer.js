const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const customer = sequelize.define("customers", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  billing_address: {
    type: DataTypes.STRING,
    length: 30,
    allowNull: false,
    unique: true
  }
});

module.exports = { customer };
