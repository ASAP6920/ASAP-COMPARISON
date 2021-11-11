const Detail = require("../../models/detail");

//FACTORY FUNCTION USED TO CREATE OBJECT
function homeController() {
  return {
    async index(req, res) {
      const details = await Detail.find();
      return res.render("home", {details:details});
    },
  };
}
module.exports = homeController;
