function imgSlider3(anything) {
    document.getElementById("three").src = anything;
  }
  
  var finishContainer = document.getElementById("finish-container");
  var finishParts = finishContainer.getElementsByClassName("first");
  for (var i = 0; i < finishParts.length; i++) {
    finishParts[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
  this.className += " active";
    });
  }
