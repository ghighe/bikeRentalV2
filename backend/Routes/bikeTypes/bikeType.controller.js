const { bike_type } = require("../../DB/Models/Bike_type");
const { attributes } = require("../../config");

const getAllBikesTypes = async (req, res) => {
  const getAllBikesTypes = await bike_type.findAll({
    attributes
  });
  res.status(200).send(JSON.stringify(getAllBikesTypes));
};

const getBikeType = async (req, res) => {
  const bikeTypeId = req.params.id;
  let getBikeType = null;
  if (bikeTypeId != null) {
    getBikeType = await bike_type.findOne({
      where: { id: bikeTypeId },
      attributes
    });
    res.status(200).send(JSON.stringify(getBikeType));
  } else {
    res.status(500).send("BikeType was not found!");
  }
};

const countAllBikeTypes = async (req, res) => {
  try {
    if (!bike_type) {
      return new Error("Model bikeType doesn't exist! ");
    }
    const bikeTypeCount = await bike_type.count();

    if (isNaN(bikeTypeCount)) {
      return new Error("Count should be a number");
    }
    res.status(200).json({
      successMessage: "Count bikeTypes successfully",
      bikeTypeCount
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      errorMessage: "Cannot count all bike types"
    });
  }
};

const addNewBikeType = async (req, res) => {
  const { bikeType, info, price } = req.body;

  // console.log("newBikeType", newBikeType);
  try {
    const addNewBikeType = {
      description: bikeType,
      info: info,
      price_per_minute: price
    };
    const newBikeType = await bike_type.create(addNewBikeType);
    res.status(201).json({
      successMessage: "New bikeType was successfully added to DB!",
      bikeType: newBikeType
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ errorMessage: `New BikeType cannot be create ${error}` });
  }
};

const updateBikeType = async (req, res) => {
  let bikeTypeId = null;
  try {
    bikeTypeId = req.params.id;

    const existingBikeType = await bike_type.findByPk(bikeTypeId);
    console.log(existingBikeType);
    if (!existingBikeType) {
      return res.status(404).json({ errorMessage: "bikeType was not found!" });
    }

    const updatedBikeType = {
      description: "Street Bike",
      price_per_minute: 10
    };
    await bike_type.update(updatedBikeType, { where: { id: bikeTypeId } });

    res.json({
      updateMessage: "BikeType was successfully updated!",
      updatedBikeType: updatedBikeType
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ errorMessage: `Cannot update bikeType with id ${bikeTypeId}` });
  }
};

const deleteBikeType = async (req, res) => {
  let deletedBikeTypeId = null;

  try {
    //extract the id of the bike to be deleted
    deletedBikeTypeId = req.params.id;
    //check if bike with the specified id in the url exist and delete it
    if (deletedBikeTypeId) {
      await bike_type.destroy({
        where: {
          id: deletedBikeTypeId
        }
      });
      res.status(201).json({
        successMessage: `BikeType with id ${deletedBikeTypeId} was successfully deleted!`
      });
    } else {
      res.status(404).json({
        errorMessage: `BikeType id was not found!`
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ errorMessage: "BikeType cannot be deleted!" });
  }
};

module.exports = {
  getAllBikesTypes,
  getBikeType,
  addNewBikeType,
  updateBikeType,
  deleteBikeType,
  countAllBikeTypes
};
