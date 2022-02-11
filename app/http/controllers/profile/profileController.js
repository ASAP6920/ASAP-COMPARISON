const User = require("../../../models/user");
const multer = require("multer");
const path = require("path");
const cloudinary = require("../../../config/cloudinary");

//FACTORY FUNCTION USED TO CREATE OBJECT
function profileController() {

  let storage = multer.diskStorage({
    destination: "public/img/profile/",
    filename: (req, file, cb) => {
      const uniqueName = `${Date.now()}-${Math.round(
        Math.random() * 1e9
      )}${path.extname(file.originalname)}`;
      cb(null, uniqueName);
    },
  });

  let upload = multer({ storage: storage }).single("image");


  return {
    async index(req, res) {
      return res.render("customers/profile",{title: "View profile"});
    },

    async update(req, res) {
      // console.log(req.body);
            upload(req, res, async (err) => {
              // console.log(req.file);
      if(!req.file){
      return res.redirect(`/customer/${req.params.id}`)
      }
      const result = await cloudinary.uploader.upload(req.file.path, {folder: 'profile'});
      // console.log(result);
                const user = {
                  image: result.secure_url,
                };
      
                //CREATING Menu IN DB
                await User.updateOne({ _id: req.params.id }, user)
                  .then((user) => {
                    return res.redirect(`/customer/${req.params.id}`);
                  })
                  .catch((err) => {
                    // req.flash("error", "Something went wrong");
                    return res.redirect("/");
                  });
              })
          },
        };
      }
      module.exports = profileController;