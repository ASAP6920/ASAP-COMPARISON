const model = require("../../../models/model");
const brand = require("../../../models/brand");
const Detail = require("../../../models/detail");

//FACTORY FUNCTION USED TO CREATE OBJECT
function preComparedController() {
  return {
    async show(req, res) {
                           const compare = req.query.compare;
                          //  console.log(req.query);
                           Detail.find(
                             {
                               preCompared: { $regex: compare, $options: "i" },
                             },
                             (err, data) => {
                               if (err) {
                                 console.log(err);
                                 return res.redirect("/");
                               } else {
                                 // console.log(data);
                                 return res.render("customers/preCompared", {
                                   compares: data,
                                 });
                               }
                             }
                           );
                         },
  };
}
module.exports = preComparedController;
