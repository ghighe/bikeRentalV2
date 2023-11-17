const { Sequelize } = require("sequelize");
const { DB_NAME, DB_SERVER, DB_USERNAME, DB_PASSWORD } = require("../config");

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_SERVER,
  dialect: "mysql"
});

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection to database was established!");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
}

module.exports = {
  connectToDatabase,
  sequelize
};
