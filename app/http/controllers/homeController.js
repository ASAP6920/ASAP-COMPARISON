const model = require("../../models/model");
const brand = require("../../models/brand");
const Detail = require("../../models/detail");

//FACTORY FUNCTION USED TO CREATE OBJECT
function homeController() {
  return {
    async index(req, res) {
      const brands = await brand.find().sort({ 'name': -1 });
      const models = await model.find().sort({ 'name': -1 });
      const details = await Detail.find().sort({ 'name': -1 });
      // console.log(details);
      return res.render("home", {
        brands: brands,
        details: details,
        models: models,
      });
    },
    about(req, res) {
      return res.render("about");
    },
  };
}
module.exports = homeController;
