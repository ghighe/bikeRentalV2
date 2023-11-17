const express = require("express");
const {
  getAllRentalBikes,
  getRental,
  addNewRental,
  updateRental,
  deleteRental
} = require("./rent.controller");

const rentalRouter = express.Router();

rentalRouter.get("/api/v1/rent/allRentalBikes", getAllRentalBikes);
rentalRouter.get("/api/v1/rent/:id", getRental);
rentalRouter.post("/api/v1/rent/rentals", addNewRental);
rentalRouter.put("/api/v1/rent/:id", updateRental);
rentalRouter.delete("/api/v1/rent/:id", deleteRental);

module.exports = rentalRouter;
