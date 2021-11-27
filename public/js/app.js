function showBrand(str) {
  if (str !== "") {
    $.ajax({
      url: "/model",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({ model: str }),
      success: function(results) {
        $("#model").html(results.html);
      },
    });
  }
}

function showModel(str) {
  if (str !== "") {
    $.ajax({
      url: "/data",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({ detail: str }),
      success: function(result) {
        $("#img").html(result.img);
        $("#collection").html(result.collection);
        $("#colorName").html(result.colorName);
        $("#startingPrice").html(result.startingPrice);
        $("#learnMore").html(result.learnMore);
        $("#displaySize").html(result.displaySize);
        $("#display1").html(result.display1);
        $("#networkImg").html(result.networkImg);
        $("#network").html(result.network);
        $("#chipsetImg").html(result.chipsetImg);
        $("#chipset").html(result.chipset);
        $("#batteryImg").html(result.batteryImg);
        $("#battery").html(result.battery);
        $("#faceImg").html(result.faceImg);
        $("#face").html(result.face);
        $("#fingerImg").html(result.fingerImg);
        $("#finger").html(result.finger);
        $("#waterImg").html(result.waterImg);
        $("#water").html(result.water);
        $("#memory").html(result.memory);
        $("#againdisplaySize").html(result.displaySizeInch);
        $("#againdisplay").html(result.display1);
        $("#display2").html(result.display2);
        $("#display3").html(result.display3);
        $("#dimension").html(result.dimension);
        $("#weight").html(result.weight);
        $("#againwater").html(result.water);
        $("#os").html(result.os);
        $("#cpu").html(result.cpu);
        $("#gpu").html(result.gpu);
        $("#camera").html(result.camera);
        $("#againnetwork").html(result.network);
        $("#wifi").html(result.wifi);
        $("#bluetooth").html(result.bluetooth);
        $("#nfc").html(result.nfc);
        $("#camera").html(result.camera);
        $("#againface").html(result.face);
        $("#againfinger").html(result.finger);
        $("#batteryCapacity").html(result.batteryCapacity);
        $("#charging").html(result.charging);
        $("#againbattery").html(result.battery);
        $("#sim").html(result.sim);
        $("#connector").html(result.connector);
        $("#colors").html(result.colors);
        $("#finalPrice").html(result.finalPrice);
        $("#drop_id").html(result.drop_id);
        $("#success").html(result.message);
      },
    });
  }
}

function showBrand1(str) {
  if (str !== "") {
    $.ajax({
      url: "/model1",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({ model: str }),
      success: function(results) {
        $("#model1").html(results.html);
      },
    });
  }
}

function showModel1(str) {
  if (str !== "") {
    $.ajax({
      url: "/data1",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({ detail: str }),
      success: function(result) {
      $("#img1").html(result.img);
      $("#collection1").html(result.collection);
      $("#colorName1").html(result.colorName);
      $("#startingPrice1").html(result.startingPrice);
      $("#learnMore1").html(result.learnMore);
      $("#displaySize1").html(result.displaySize);
      $("#display11").html(result.display1);
      $("#networkImg1").html(result.networkImg);
      $("#network1").html(result.network);
      $("#chipsetImg1").html(result.chipsetImg);
      $("#chipset1").html(result.chipset);
      $("#batteryImg1").html(result.batteryImg);
      $("#battery1").html(result.battery);
      $("#faceImg1").html(result.faceImg);
      $("#face1").html(result.face);
      $("#fingerImg1").html(result.fingerImg);
      $("#finger1").html(result.finger);
      $("#waterImg1").html(result.waterImg);
      $("#water1").html(result.water);
      $("#memory1").html(result.memory);
      $("#againdisplaySize1").html(result.displaySizeInch);
      $("#againdisplay1").html(result.display1);
      $("#display21").html(result.display2);
      $("#display31").html(result.display3);
      $("#dimension1").html(result.dimension);
      $("#weight1").html(result.weight);
      $("#againwater1").html(result.water);
      $("#os1").html(result.os);
      $("#cpu1").html(result.cpu);
      $("#gpu1").html(result.gpu);
      $("#camera1").html(result.camera);
      $("#againnetwork1").html(result.network);
      $("#wifi1").html(result.wifi);
      $("#img1").html(result.img);
      $("#bluetooth1").html(result.bluetooth);
      $("#nfc1").html(result.nfc);
      $("#camera1").html(result.camera);
      $("#againface1").html(result.face);
      $("#againfinger1").html(result.finger);
      $("#batteryCapacity1").html(result.batteryCapacity);
      $("#charging1").html(result.charging);
      $("#againbattery1").html(result.battery);
      $("#sim1").html(result.sim);
      $("#connector1").html(result.connector);
      $("#colors1").html(result.colors);
      $("#finalPrice1").html(result.finalPrice);
      $("#drop_id1").html(result.drop_id);
      $("#success").html(result.message);
      },
    });
  }
}



function imgSlider(data1, data2) {
  // console.log(data1, data2)
  document.getElementById("one").src = data1;
  document.getElementById("oneColor").innerHTML = data2;
}

function imgSlider1(data1, data2) {
  // console.log(data1, data2);
  document.getElementById("two").src = data1;
  document.getElementById("twoColor").innerHTML = data2;
}

function imgSlider3(anything) {
  document.getElementById("three").src = anything;
}


function imgSlider4(data1, data2) {
  // console.log(data1, data2)
  document.getElementById("preOne4").src = data1;
  document.getElementById("preOneColor4").innerHTML = data2;
}

function imgSlider5(data1, data2) {
  // console.log(data1, data2);
  document.getElementById("preOne5").src = data1;
  document.getElementById("preOneColor5").innerHTML = data2;
}


function imgSlider6(data1, data2) {
  // console.log(data1, data2)
  document.getElementById("hisOne").src = data1;
  document.getElementById("hisOneColor").innerHTML = data2;
}

function imgSlider7(data1, data2) {
  // console.log(data1, data2);
  document.getElementById("hisTwo").src = data1;
  document.getElementById("hisTwoColor").innerHTML = data2;
}

function slider(data1, data2) {
  // console.log("sachin" + data2);
  document.getElementById("imageChange" + data2).src = data1;
}
function onclickhandler(data) {
  // console.log(data.value);
  const colorChange = document.getElementById("colorCode");
  colorChange.style.backgroundColor = data.value;
}


let finishContainer3 = document.getElementById("finish-container");
let finishPart3 = finishContainer3.getElementsByClassName("first");
for (let i = 0; i < finishPart3.length; i++) {
  finishPart3[i].addEventListener("click", function() {
    let current3 = document.getElementsByClassName("active3");
    if (current3.length > 0) {
      current3[0].className = current3[0].className.replace(" active3", "");
    }
    this.className += " active3";
  });
}

