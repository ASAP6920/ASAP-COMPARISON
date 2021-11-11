const model = require("../../models/model");
const brand = require("../../models/brand");
const Detail = require("../../models/detail");

//FACTORY FUNCTION USED TO CREATE OBJECT
function homeController() {
  return {
    async index(req, res) {
      const brands = await brand.find();
      const models = await model.find();
      const details = await Detail.find();
      // console.log(details);
      return res.render("home", {
        brands: brands,
        details: details,
        models: models,
      });
    },
  };
}
module.exports = homeController;
