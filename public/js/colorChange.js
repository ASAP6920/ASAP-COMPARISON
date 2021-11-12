
let finishContainer1 = document.getElementById("collection4");
let finishPart1 = finishContainer1.getElementsByClassName("color4");
for (let j = 0; j < finishPart1.length; j++) {
  finishPart1[j].addEventListener("click", function() {
    // console.log('Helllo')
    let current1 = document.getElementsByClassName("active4");
    if (current1.length > 0) {
      current1[0].className = current1[0].className.replace(" active4", "");
    }
    this.className += " active4";
  });
}

let finishContainer2 = document.getElementById("collection5");
let finishPart2 = finishContainer2.getElementsByClassName("color5");
for (let k = 0; k < finishPart2.length; k++) {
  finishPart2[k].addEventListener("click", function() {
    let current2 = document.getElementsByClassName("active5");
    if (current2.length > 0) {
      current2[0].className = current2[0].className.replace(" active5", "");
    }
    this.className += " active5";
  });
}

