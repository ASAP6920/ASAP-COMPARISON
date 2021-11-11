const Detail = require("../../../models/detail");

//FACTORY FUNCTION USED TO CREATE OBJECT
function singleController() {
  return {
    async index(req, res) {
      const details = await Detail.findById(req.params.id);
      return res.render("Customer/single", {details});
    },
  };
}
module.exports = singleController;
