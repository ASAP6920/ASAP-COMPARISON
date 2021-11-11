const model = require("../../../models/model");
const brand = require("../../../models/brand");
const Detail = require("../../../models/detail");

function historyController() {
  return {
    async index(req, res) {
      return res.render("customers/history");
    },
    async store(req, res) {
      if (!req.session.history) {
        req.session.history = {
          items: {},
          totalProduct: 0,
        };
      }

      let history = req.session.history;
      //   console.log(req.body);

      // Check if item does not exist in history
      if (!history.items[req.body.drop + req.body.drop1 + req.user._id]) {
        history.items[req.body.drop + req.body.drop1 + req.user._id] = {
          user: req.user._id,
          item: req.body,
          qty: 1,
        };
        // console.log(history.items);
        history.totalProduct = history.totalProduct + 1;
        let success = "<span>Added To history</span>";
        await res.json({ success });
      } else {
        let success = "<span>Already exists in history</span>";
        await res.json({ success });
      }
    },
  };
}
module.exports = historyController;
