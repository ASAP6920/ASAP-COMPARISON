const News = require("../../../models/news");
const multer = require("multer");
const path = require("path");
const cloudinary = require("../../../config/cloudinary");

//FACTORY FUNCTION USED TO CREATE OBJECT
function adminNewsController() {
    let storage = multer.diskStorage({
        destination: "public/img/news/",
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
      const news = await News.find().sort({ '_id': -1 });
      // console.log(details);
      return res.render("admin/adminNews", {
        news: news,
        title: "Admin news",
      });
    },
    async show(req, res) {
        const { id: id } = req.params;
        const news = await News.findById({ _id: id });
        return res.render("admin/editNews", { news: news, title: "Edit news"});
      },
      update(req, res) {
        upload(req, res, async (err) => {
          console.log(req.file);
  
          const { head, para } = req.body;
          //VALIDATING REQUESTS
          if (!head || !para) {
              req.flash("error", "All fields are required");
              return res.redirect(`/admin/newsEdit/${req.params.id}`);
            }
            const result = await cloudinary.uploader.upload(req.file.path, {folder: 'news'});
            console.log(result);
    
              const news = {
                heading: head,
                image: result.secure_url,
                paragraph: para,
              };
              //CREATING Menu IN DB
              await News.updateOne({ _id: req.params.id }, news)
              .then((news) => {
                return res.redirect("/admin/newsPage");
              })
              .catch((err) => {
                // req.flash("error", "Something went wrong");
                return res.redirect("/admin/newsPage");
              });
        });
      },
  };
}
module.exports = adminNewsController;
