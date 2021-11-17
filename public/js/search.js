document
  .getElementById("searchbar_img")
  .addEventListener("click", switchVisible, false);

function switchVisible() {
  if (document.getElementById("searchbar") !== undefined) {
    if (document.getElementById("searchbar").style.display == "block") {
      document.getElementById("searchbar").style.display = "none";
      document.getElementById("searchbar_img").src = "/img/home/search.svg";
    } else {
      document.getElementById("searchbar").style.display = "block";
      document.getElementById("searchbar_img").src = "/img/home/close.svg";
    }
  }
}


$(function() {
  $("#searchName").autocomplete({
    source: function(req, res) {
      $.ajax({
        url: "/searching",
        contentType: "application/json",
        type: "GET",
        data: { search: req.term },
        success: function(data) {
          res(data);
        },
        error: function(err) {
          console.log(err.status);
        },
      });
    },

    minLength: 1,
    select: function(event, ui) {
      if (ui.item) {
        $("#searchName").val(ui.item.label);
      }
    },
  });
});


function searchSlider(data1, data2) {
  document.getElementById("searchImageChange" + data2).src = data1;
}
