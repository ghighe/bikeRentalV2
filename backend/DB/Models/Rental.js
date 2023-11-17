const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const rental = sequelize.define("rentals", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  bike_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  start_date_time: {
    type: Sequelize.DATE,
    allowNull: false
  },

  end_date_time: {
    type: Sequelize.DATE,
    allowNull: false
  },

  invoice_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = { rental };
