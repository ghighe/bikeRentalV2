const express = require("express");
const {
  getAllBikesTypes,
  getBikeType,
  addNewBikeType,
  updateBikeType,
  deleteBikeType
} = require("../bikeTypes/bikeType.controller");

const bikeTypeRouter = express.Router();

//here we will defined all our routes to bikesType

bikeTypeRouter.get("/api/v1/allBikeTypes", getAllBikesTypes);
bikeTypeRouter.get("/api/v1/bikeType/:id", getBikeType);
bikeTypeRouter.post("/api/v1/bikeType", addNewBikeType);
bikeTypeRouter.put("/api/v1/bikeType/:id", updateBikeType);
bikeTypeRouter.delete("/api/v1/bikeType/:id", deleteBikeType);

module.exports = bikeTypeRouter;
