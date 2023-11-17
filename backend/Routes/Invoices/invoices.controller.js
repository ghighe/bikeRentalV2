const { attributes } = require("../../config");
const { sequelize } = require("../../DB/connection");
const { invoice } = require("../../DB/Models/Invoice");

const getCountAndInvoicesSum = async (req, res) => {
  try {
    const countInvoices = await invoice.count();

    const totalNetAmount = await invoice.findAll({
      attributes: [
        [sequelize.fn("sum", sequelize.col("net_amount")), "total_amount"]
      ],
      raw: true
    });

    if (isNaN(countInvoices)) {
      return new Error("Count of all invoices should be a number");
    }
    res.status(200).json({
      successMessage: "OK",
      countInvoices,
      totalNetAmount
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(`Was not able to count invoices ${error}`);
  }
};

module.exports = {
  getCountAndInvoicesSum
};
