const model = require("../../../models/model");
const brand = require("../../../models/brand");
const Detail = require("../../../models/detail");
function compareController() {
  return {
    async index(req, res) {
      const brands = await brand.find().sort({ 'name': 1 });
      const models = await model.find().sort({ 'name': 1 });
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
