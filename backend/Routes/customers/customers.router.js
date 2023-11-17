const express = require("express");
const {
  getAllCustomers,
  getCustomer,
  addNewCustomer,
  updateCustomer,
  deleteCustomer,
  countAllCustomers
} = require("../customers/customers.controller");

const customersRouter = express.Router();

//here we will defined all our routes to bikesType

customersRouter.get("/api/v1/customers/countAllCustomers", countAllCustomers);
customersRouter.get("/api/v1/customers", getAllCustomers);
customersRouter.get("/api/v1/customer/:id", getCustomer);
customersRouter.post("/api/v1/customer", addNewCustomer);
customersRouter.put("/api/v1/customer/:id", updateCustomer);
customersRouter.delete("/api/v1/customer/:id", deleteCustomer);

module.exports = customersRouter;
