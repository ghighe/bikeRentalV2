const express = require("express");
const {
  getCountAndInvoicesSum,
  getAllInvoices
} = require("../Invoices/invoices.controller");

const invoicesRouter = express.Router();

invoicesRouter.get(
  "/api/v1/invoices/InvoicesCountAndSum",
  getCountAndInvoicesSum
);
invoicesRouter.get("/api/v1/invoices/getAllInvoices", getAllInvoices);

module.exports = invoicesRouter;
