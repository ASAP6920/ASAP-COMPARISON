const Model = require("../../../models/model");
const brand = require("../../../models/brand");
const Detail = require("../../../models/detail");

//FACTORY FUNCTION USED TO CREATE OBJECT
function adminHomeController() {
  return {
    async index(req, res) {
      
      const details = await Detail.find().sort({ 'name': -1 });
      // console.log(details);
      return res.render("admin/adminHome", {
        details: details,
      });
    },
    async delete(req, res){
      const {modelId: modelId} = req.params
      await Detail.deleteOne({ modelId: modelId });
      await Model.deleteOne({ modelId: modelId });
      return res.redirect('/admin/home')
  },
  };
}
module.exports = adminHomeController;
