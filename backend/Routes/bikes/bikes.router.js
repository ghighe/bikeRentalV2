const express = require("express");
const {
  getAllBikes,
  getBike,
  addNewBike,
  updateBike,
  deleteBike
} = require("./bikes.controller");

const bikeRouter = express.Router();

//here we will defined all our routes to bike

bikeRouter.get("/api/v1/allbikes", getAllBikes);
bikeRouter.get("/api/v1/bike/:id", getBike);
bikeRouter.post("/api/v1/bikes", addNewBike);
bikeRouter.put("/api/v1/bike/:id", updateBike);
bikeRouter.delete("/api/v1/bike/:id", deleteBike);

module.exports = bikeRouter;
