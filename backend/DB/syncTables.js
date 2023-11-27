const { bike } = require("../DB/Models/Bike");
const { bike_type } = require("../DB/Models/Bike_type");
const { customer } = require("../DB/Models/Customer");
const { invoice } = require("../DB/Models/Invoice");
const { rental } = require("../DB/Models/Rental");

//database relationships
bike_type.hasOne(bike, {
  foreignKey: "type",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
bike.hasMany(rental, {
  foreignKey: "bike_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
customer.hasMany(rental, {
  foreignKey: "customer_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});
invoice.hasOne(rental, {
  foreignKey: "invoice_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE"
});

async function syncTables() {
  try {
    await bike_type.sync();
    await bike.sync();
    await customer.sync();
    await invoice.sync();
    await rental.sync();
    console.log(`All required DB_Tables were (re)created`);
  } catch (error) {
    console.error(`Error syncing the tables ${error}`);
  }
}

async function syncOneTable() {
  try {
    // await bike_type.sync({ alter: true }); -> in test mode it's safe to be used but it's a destructive way use migration instead
    console.log("model was synchronized successfully.");
  } catch (error) {
    console.error("Error, table was not sync ${error}");
  }
}

module.exports = {
  syncTables,
  syncOneTable
};
