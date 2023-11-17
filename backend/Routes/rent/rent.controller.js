const { rental } = require("../../DB/Models/Rental");
const { attributes } = require("../../config");

const getAllRentalBikes = async (req, res) => {
  const getAllRentalBikes = await rental.findAll({
    attributes
  });
  res.status(200).send(JSON.stringify(getAllRentalBikes));
};

const getRental = async (req, res) => {
  const rentId = req.params.id;
  let getRent = null;
  if (rentId != null) {
    getRent = await rental.findOne({
      where: { id: rentId },
      attributes
    });
    res.status(200).send(JSON.stringify(getRent));
  } else {
    res.status(500).send("Rental record was not found!");
  }
};

const addNewRental = async (req, res) => {
  try {
    //this will come from the frontend
    const testRental = {
      customer_id: 1,
      bike_id: 6,
      start_date_time: "2023-11-10",
      end_date_time: "2023-11-10",
      invoice_id: 1
    };
    const newRental = await rental.create(testRental);
    res.status(201).json({
      successMessage: "New bike rent was successfully added to the DB!",
      rent: newRental
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Cannot add a bike rent" });
  }
};

const updateRental = async (req, res) => {
  let rentId = null;
  try {
    rentId = req.params.id;
    const existingRendId = await rental.findByPk(rentId);

    if (!existingRendId) {
      return res
        .status(404)
        .json({ errorMessage: "bike rental was not found!" });
    }

    const updatedRent = {
      customer_id: 1,
      bike_id: 5,
      start_date_time: new Date(),
      end_date_time: new Date(),
      invoice_id: 1
    };
    await rental.update(updatedRent, { where: { id: rentId } });

    res.json({
      updateMessage: "Bike rent was successfully updated!",
      updatedBikeRent: updatedRent
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ errorMessage: `Cannot update bike rent with id ${bikeId}` });
  }
};

const deleteRental = async (req, res) => {
  let deletedRentId = null;

  try {
    //extract the id of the rent to be deleted
    deletedRentId = req.params.id;
    //check if rent with the specified id in the url exist and delete it
    if (deletedRentId) {
      await bike.destroy({
        where: {
          id: deletedRentId
        }
      });
      res.status(201).json({
        successMessage: `Bike with id ${deletedRentId} was successfully deleted!`
      });
    } else {
      res.status(404).json({
        errorMessage: `Rent id was not found!`
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({ errorMessage: "Rent cannot be deleted!" });
  }
};

module.exports = {
  getAllRentalBikes,
  getRental,
  addNewRental,
  updateRental,
  deleteRental
};
