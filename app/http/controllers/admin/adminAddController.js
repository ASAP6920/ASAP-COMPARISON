const Brand = require("../../../models/brand");
const Model = require("../../../models/model");
const Detail = require("../../../models/detail");
const multer = require("multer");
const path = require("path");
const cloudinary = require("../../../config/cloudinary");

//FACTORY FUNCTION USED TO CREATE OBJECT
function adminAddController() {

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
    async index(req, res) {
        const brands = await Brand.find();
        return res.render("admin/addModel", {
          brands: brands,
          title: "Add model",
        });
    },

    add(req,res){
        upload(req, res, async (err) => {

        const {brandName, name, color, colorName, startingPrice, displaySize,display1, networkImg, network, chipsetImg, chipset, batteryImg, battery, faceImg, face, fingerImg, finger, waterImg, water, memory, display2, display3,dimension,weight, os, cpu, gpu, camera, wifi,bluetooth ,nfc ,batteryCapacity ,charging ,sim ,connector ,colors} = req.body;  

        if (!req.file) {
          req.flash("name", name);
          req.flash("color", color);
          req.flash("colorName", colorName);
          req.flash("startingPrice", startingPrice);
          req.flash("displaySize", displaySize);
          req.flash("display1", display1);
          req.flash("battery", battery);
          req.flash("water", water);
          req.flash("memory", memory);
          req.flash("display2", display2);
          req.flash("display3", display3);
          req.flash("dimension", dimension);
          req.flash("weight", weight);
          req.flash("os", os);
          req.flash("cpu", cpu);
          req.flash("gpu", gpu);
          req.flash("camera", camera);
          req.flash("wifi", wifi);
          req.flash("bluetooth", bluetooth);
          req.flash("nfc", nfc);
          req.flash("batteryCapacity", batteryCapacity);
          req.flash("charging", charging);
          req.flash("sim", sim);
          req.flash("connector", connector);
          req.flash("colors", colors);
          req.flash("error", "image not selected");
          return res.redirect("/admin/addModel");
        }

          const existName = await Detail.findOne({ name: name })

          if(existName){
            req.flash("name", name);
            req.flash("color", color);
            req.flash("colorName", colorName);
            req.flash("startingPrice", startingPrice);
            req.flash("displaySize", displaySize);
            req.flash("display1", display1);
            req.flash("battery", battery);
            req.flash("water", water);
            req.flash("memory", memory);
            req.flash("display2", display2);
            req.flash("display3", display3);
            req.flash("dimension", dimension);
            req.flash("weight", weight);
            req.flash("os", os);
            req.flash("cpu", cpu);
            req.flash("gpu", gpu);
            req.flash("camera", camera);
            req.flash("wifi", wifi);
            req.flash("bluetooth", bluetooth);
            req.flash("nfc", nfc);
            req.flash("batteryCapacity", batteryCapacity);
            req.flash("charging", charging);
            req.flash("sim", sim);
            req.flash("connector", connector);
            req.flash("colors", colors);
            req.flash("error", "Product already exist");
            return res.redirect("/admin/addModel");
          }

          const details = await Detail.find();
          let prevId = 100;
          // details.forEach((detail) => {
          //   prevId = detail.id;
          // });
          let newId = prevId + 1;

          const brand = await Brand.findOne({ name: brandName });
          
          // console.log(req.file);
          const result = await cloudinary.uploader.upload(req.file.path, {folder: 'img'});
          // console.log(result);

          const detail = new Detail({
            id: newId,
            modelId: newId,
            brandName,
            name,
            image: result.secure_url,
            color,
            colorName,
            startingPrice,
            displaySize,
            display1,
            networkImg,
            network,
            chipsetImg,
            chipset,
            batteryImg,
            battery:"Up to "+ battery + " hours of video playback",
            faceImg,
            face,
            fingerImg,
            finger,
            waterImg,
            water,
            memory,
            display2,
            display3,
            dimension,
            weight: weight + " grams",
            os,
            cpu,
            gpu,
            camera: camera + "MP Camera system",
            wifi,
            bluetooth,
            nfc,
            batteryCapacity: batteryCapacity + " mAh",
            charging,
            sim,
            connector,
            colors,
          });

          const collection = {
            color: color,
            image: result.secure_url,
            name: colorName,
          };

          const model = new Model({
            id: newId,
            modelId: newId,
            name,
            brandName ,
            brandId: brand.id,
          });

          await model.save();
          await detail.save();
          await Detail.updateOne(
            { id: newId },
            {
              $push: { collections: collection },
            }
          )

          return res.redirect("/admin/home");
        })
      }
  }
}

module.exports = adminAddController;

