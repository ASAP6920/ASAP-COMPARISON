const model = require("../../../models/model");
const brand = require("../../../models/brand");
const Detail = require("../../../models/detail");
function compareController() {
  return {
    async index(req, res) {
      const brands = await brand.find();
      const models = await model.find();
      const details = await Detail.find();
      // console.log(details)
      return res.render("customers/dropdown", {
        brands: brands,
        details: details,
        models: models,
      });
    },
  };
}
module.exports = compareController;
