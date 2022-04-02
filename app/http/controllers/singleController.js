const model = require("../../models/model");
const brand = require("../../models/brand");
const Detail = require("../../models/detail");

//FACTORY FUNCTION USED TO CREATE OBJECT
function singleController() {
  return {
    async index(req, res) {
      const details = await Detail.findById(req.params.id);
      return res.render("customers/single", {
        details,
        title: "ASAP - Compare phones, smartphones - asapcomparison.live",
      });
    },
  };
}
module.exports = singleController;