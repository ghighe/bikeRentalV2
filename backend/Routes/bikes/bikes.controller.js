const { Model } = require("sequelize");
const { bike } = require("../../DB/Models/Bike");
const { bike_type } = require("../../DB/Models/Bike_type");
const { rental } = require("../../DB/Models/Rental");
const { attributes } = require("../../config");

//here we will have all the logic for bikes

const getAllBikes = async (req, res) => {
  const getAllBikes = await bike.findAll({
    attributes,
    include: [
      {
        model: bike_type,
        attributes: ["description"]
      }
    ]
  });
  res.status(200).send(JSON.stringify(getAllBikes));
};

const getBike = async (req, res) => {
  const bikeId = req.params.id;
  let getBike = null;
  if (bikeId != null) {
    getBike = await bike.findOne({
      where: { id: bikeId },
      attributes
    });
    res.status(200).send(JSON.stringify(getBike));
  } else {
    res.status(500).send("Bike was not found!");
  }
};

const getAvailableBikes = async (req, res) => {
  try {
    if (!bike || !rental) {
      return new Error("Model bike or rental doesn't exist! ");
    }
    //count the total bikes
    const totalBikes = await bike.count();
    //count the rental bikes
    const rentalBikes = await rental.count();
    let availableBikes = 0;
    //check if totalBikes and rentalBikes are numbers. If are not numbers return error
    if (isNaN(totalBikes) || isNaN(rentalBikes)) {
      return new Error("Count should be a number");
    }

    if (totalBikes > 0) {
      availableBikes = totalBikes - rentalBikes;
    }

    res.status(200).json({
      successMessage: "Bike count was possbile",
      totalBikes,
      rentalBikes,
      availableBikes
    });
  } catch (error) {
    res.status(500).json({
      error: `Error getting the available bikes ${error}`
    });
  }
};

const addNewBike = async (req, res) => {
  try {
    //this will come from the frontend
    const testBike = {
      type: 16,
      register_date: "2023-11-21"
    };
    const newBike = await bike.create(testBike);
    res.status(201).json({
      successMessage: "New bike was successfully added to DB!",
      bike: newBike
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Cannot add a bike" });
  }
};

const updateBike = async (req, res) => {
  let bikeId = null;
  try {
    bikeId = req.params.id;

    const existingBike = await bike.findByPk(bikeId);

    if (!existingBike) {
      return res.status(404).json({ errorMessage: "bike was not found!" });
    }

    const updatedBike = {
      type: 17,
      register_date: new Date(),
      attributes
    };
    await bike.update(updatedBike, { where: { id: bikeId } });

    res.json({
      updateMessage: "Bike was successfully updated!",
      updatedBike: updatedBike
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ errorMessage: `Cannot update bike with id ${bikeId}` });
  }
};

const deleteBike = async (req, res) => {
  let deletedBikeId = null;

  try {
    //extract the id of the bike to be deleted
    deletedBikeId = req.params.id;
    //check if bike with the specified id in the url exist and delete it
    if (deletedBikeId) {
      await bike.destroy({
        where: {
          id: deletedBikeId
        }
      });
      res.status(201).json({
        successMessage: `Bike with id ${deletedBikeId} was successfully deleted!`
      });
    } else {
      res.status(404).json({
        errorMessage: `Bike id was not found!`
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({ errorMessage: "bike cannot be deleted!" });
  }
};

module.exports = {
  getAllBikes,
  getBike,
  getAvailableBikes,
  addNewBike,
  updateBike,
  deleteBike
};
