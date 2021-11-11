const model = require("../../../models/model");
const brand = require("../../../models/brand");
const Detail = require("../../../models/detail");

function historyViewController() {
  return {
    async show(req, res) {
      const { h_id, h_id1 } = req.query;
      // console.log(req.body)
      const details = await Detail.find({ _id: h_id });
      const details1 = await Detail.find({ _id: h_id1 });
      return res.render("customers/historyView", {
        details: details,
        details1: details1,
      });
    },
  };
}
module.exports = historyViewController;
