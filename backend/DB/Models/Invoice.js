const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const invoice = sequelize.define("invoices", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  gross_amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  vat: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  net_amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  paid: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = { invoice };
