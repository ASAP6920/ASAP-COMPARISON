const model = require("../../../models/model");
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
      const {id: id} = req.params
      const detail = await Detail.findOneAndDelete({_id: id}).then(() =>{
          return res.redirect('/admin/home')
      }).catch(err => {
          req.flash('error', 'Something went wrong')
          return res.redirect('/admin/home')
      })
  },
  };
}
module.exports = adminHomeController;
