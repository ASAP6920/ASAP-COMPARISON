const Detail = require("../../../models/detail");
const multer = require("multer");
const path = require("path");

//FACTORY FUNCTION USED TO CREATE OBJECT
function adminEditController() {


    let storage = multer.diskStorage({
      destination: "public/img/",
      filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(
          Math.random() * 1e9
        )}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
      },
    });
    let upload = multer({ storage: storage }).single("image");

  return {
    async show(req, res) {
      const { id: id } = req.params;
      const detail = await Detail.findById({ _id: id });
      return res.render("admin/addColor", { detail: detail });
    },
    update(req, res) {
      upload(req, res, async (err) => {
        // console.log(req.file);

        const { name, color } = req.body;
        //VALIDATING REQUESTS
        if (!name || !color) {
            req.flash("error", "All fields are required");
            return res.redirect(`/admin/addColor/${req.params.id}`);
          }
  
            const detail = {
              color: color,
              image: req.file.filename,
              name: name,
            };
            //CREATING Menu IN DB
          await Detail.updateOne(
            { _id: req.params.id },
            {
              $push: { "collections": detail },
            }
          )
            .then((detail) => {
              return res.redirect("/admin/home");
            })
            .catch((err) => {
                req.flash("error", "Something went wrong");
              return res.redirect(`/admin/addColor/${req.params.id}`);
            });
      });
    },
  };
}
module.exports = adminEditController;