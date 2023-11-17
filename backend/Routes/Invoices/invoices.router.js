const express = require("express");
const { getCountAndInvoicesSum } = require("../Invoices/invoices.controller");

const invoicesRouter = express.Router();

invoicesRouter.get(
  "/api/v1/invoices/InvoicesCountAndSum",
  getCountAndInvoicesSum
);

module.exports = invoicesRouter;
