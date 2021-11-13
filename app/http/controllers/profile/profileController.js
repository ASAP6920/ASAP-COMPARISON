const User = require("../../../models/user");
const multer = require("multer");
const path = require("path");

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
      return res.render("customers/profile");
    },

    async update(req, res) {
      //console.log(req.body);
            upload(req, res, async (err) => {
              // console.log(req.file.filename, req.params.id);
      if(!req.file){
      return res.redirect(`/customer/${req.params.id}`)
      }
                const user = {
                  image: "/img/profile/"+req.file.filename,
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