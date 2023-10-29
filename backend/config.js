const DB_NAME = "test_sequelizer";
const DB_USERNAME = "root";
const DB_PASSWORD = "asd123";

//this will exclude default created columns such as createdAt and updatedAt
const attributes = { exclude: ["createdAt", "updatedAt"] };

module.exports = {
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  attributes
};
