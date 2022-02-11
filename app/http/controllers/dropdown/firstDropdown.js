const Detail = require("../../../models/detail");
const Model = require("../../../models/model");

function firstDropdown() {
  return {

index(req, res){
          
            const brand = req.body.model;
            Model.find({brandId: brand }, async function(err, results) {
              if (err) {
              } else {
                let openingTable =
                  '<option value="" selected disabled>Select Model</option>';
                await results.forEach(function(result) {
                  openingTable +=
                    '<option value="' +
                    result.id +
                    '">' +
                    result.name +
                    "</option>";
                });
                res.send({ html: openingTable });
              }
            });
        },

         index1(req, res){
          
            const brand1 = req.body.detail;
            Detail.find({ modelId: brand1 }, async function(
              err,
              results
            ) {
              if (err) {
              } else {
                let img;
                let collection ="";
                let colorName;
                let startingPrice;
                let learnMore;
                let displaySize;
                let displaySizeInch;
                let display1;
                let networkImg;
                let network;
                let chipsetImg;
                let chipset;
                let batteryImg;
                let battery;
                let faceImg;
                let face;
                let fingerImg;
                let finger;
                let waterImg;
                let water;
                let memory;
                let display2;
                let display3;
                let dimension;
                let weight;
                let os;
                let cpu;
                let gpu;
                let camera;
                let wifi;
                let bluetooth;
                let nfc;
                let batteryCapacity;
                let charging;
                let sim;
                let connector;
                let colors;
                let finalPrice;
                let drop_id;
                let message="<span></span>";
                await results.forEach(function(result) {
                img = "<img id='one' src='" +
                        result.image +
                        "'>";
                       
                result.collections.forEach(function(coll) {
                  collection +=
                    "<li class='color1' style='background-color: " +
                    coll.color +
                    ";' onclick=\"(imgSlider(this.id, '" +
                    coll.name +
                    "'))\" id='" +
                    coll.image +
                    "'> </li>";
                });
                colorName = "<span id='oneColor'>" + result.colorName + "</span>";
                startingPrice = "<span> Starting at $"+result.startingPrice + "</span>";
                learnMore = "<a target='_blank' href='/mobile/" + result._id + "'>Learn more<i class='fa fa-chevron-right'></i></a>";
                displaySize = "<span>" + result.displaySize + "″</span>";
                displaySizeInch = "<span>" + result.displaySize + " Inches</span>";
                display1 = "<span>" + result.display1 + "</span>";
                networkImg = "<img src='/img/home/" + result.networkImg + "'>";
                network = "<span>" + result.network + "</span>";
                chipsetImg = "<img src='/img/home/" + result.chipsetImg + "'>";
                chipset = "<span>" + result.chipset + "</span>";
                batteryImg = "<img src='/img/home/" + result.batteryImg + "'>";
                battery = "<span>" + result.battery + "</span>";
                faceImg = "<img src='/img/home/" + result.faceImg + "'>";
                face = "<span>" + result.face + "</span>";
                fingerImg = "<img src='/img/home/" + result.fingerImg + "'>";
                finger = "<span>" + result.finger + "</span>";
                waterImg = "<img src='/img/home/" + result.waterImg + "'>";
                water = "<span>" + result.water + "</span>";
                memory = "<span>" + result.memory + "</span>";
                display2 = "<span>" + result.display2 + "</span>";
                display3 = "<span>" + result.display3 + "</span>";
                dimension = "<span>" + result.dimension + "</span>";
                weight = "<span>" + result.weight + "</span>";
                os = "<span>" + result.os + "</span>";
                cpu = "<span>" + result.cpu + "</span>";
                gpu = "<span>" + result.gpu + "</span>";
                camera = "<span>" + result.camera + "</span>";
                wifi = "<span>" + result.wifi + "</span>";
                bluetooth = "<span>" + result.bluetooth + "</span>";
                nfc = "<span>" + result.nfc + "</span>";
                batteryCapacity = "<span>" + result.batteryCapacity + "</span>";
                charging = "<span>" + result.charging + "</span>";
                sim = "<span>" + result.sim + "</span>";
                connector = "<span>" + result.connector + "</span>";
                colors = "<span>" + result.colors + "</span>";
                finalPrice =
                  "<span> $"+result.startingPrice + "</span>";
                drop_id =
                  "<input type='hidden' name='drop' id='drop' value='" +
                  result._id +
                  "'> <input type='hidden' name='image' id='image' value='" +
                  result.image +
                  "'> <input type='hidden' name='name' id='name' value='" +
                  result.name +
                  "'><input type='hidden' name='price' id='price' value='" +
                  result.startingPrice +
                  "'>";
                });
                await res.send({
                  img,
                  collection,
                  colorName,
                  startingPrice,
                  learnMore,
                  displaySize,
                  displaySizeInch,
                  display1,
                  networkImg,
                  network,
                  chipsetImg,
                  chipset,
                  batteryImg,
                  battery,
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
                  weight,
                  os,
                  cpu,
                  gpu,
                  camera,
                  wifi,
                  bluetooth,
                  nfc,
                  batteryCapacity,
                  charging,
                  sim,
                  connector,
                  colors,
                  finalPrice,
                  drop_id,
                  message,
                });
              }
            });
        },
        
      }
    }

module.exports = firstDropdown;
