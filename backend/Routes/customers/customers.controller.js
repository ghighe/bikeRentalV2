const { customer } = require("../../DB/Models/Customer");
const { sequelize } = require("../../DB/connection");
const { attributes } = require("../../config");

const getAllCustomers = async (req, res) => {
  const getAllCustomers = await customer.findAll({
    attributes
  });
  res.status(200).json({
    successMessage: "Fetch of the customers was successfull",
    getAllCustomers
  });
};

const countAllCustomers = async (req, res) => {
  const countAllCustomers = await customer.findAll({
    attributes: [[sequelize.fn("COUNT", sequelize.col("id")), "cust_total"]]
  });
  //this will result in an array of objects, we just need to extract the first object at index 0 all the time
  const formatedResultCount = countAllCustomers[0];
  res.status(200).json({
    successMessage: "Customers count successfully",
    totalCustomersCount: formatedResultCount
  });
};

const getCustomer = async (req, res) => {};

const addNewCustomer = async (req, res) => {
  try {
    //this will be received from the frontend interface as a JS object
    const testNewCustomer = {
      name: "Alice Smith",
      billing_address: "456 Elm Avenue"
    };
    const newCustomer = await customer.create(testNewCustomer);
    res.status(201).json({
      successMessage: "New customer was successfully added in DB!",
      customer: newCustomer
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: `Cannot add a customer ${error}` });
  }
};

const updateCustomer = async (req, res) => {};

const deleteCustomer = async (req, res) => {};

module.exports = {
  getAllCustomers,
  countAllCustomers,
  getCustomer,
  addNewCustomer,
  updateCustomer,
  deleteCustomer
};
