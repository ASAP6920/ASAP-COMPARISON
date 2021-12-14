const User = require("../../../models/user");

//FACTORY FUNCTION USED TO CREATE OBJECT
function roleUpdateController() {
  return {
    async show(req, res) {
      
      const users = await User.find().sort({ '_id': -1 });
      // console.log(details);
      return res.render("admin/roleUpdate", {
        users: users,
        title: "Update role",
      });
    },
    async update(req, res) {
        // console.log(req.body)
        User.updateOne(
          { _id: req.body.usersId },
          { role: req.body.role },
          (err, data) => {
            if (err) {
              return res.redirect("/admin/roleUpdate");
            }
            return res.redirect("/admin/roleUpdate");
          }
        );
      },
  };
}
module.exports = roleUpdateController;
