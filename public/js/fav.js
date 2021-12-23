function favourite(data,data2, data3, data4, data5) {
    let fav = document.getElementById("favourite"+ data5);
    if (fav.classList.value === "favourite") {
        fav.classList.remove("favourite");
        fav.classList.add("favourite1");
      if (data !== "") {
        $.ajax({
          url: "/favoriteAddRoute",
          method: "POST",
          contentType: "application/json",
          data: JSON.stringify({ id: data, name: data2, image: data3, price: data4 }),
          success: function (results) {},
        });
      }
    } else if (fav.classList.value === "favourite1") {
        fav.classList.remove("favourite1");
        fav.classList.add("favourite");
      if (data !== "") {
        $.ajax({
          url: "/favoriteRemoveRoute",
          method: "POST",
          contentType: "application/json",
          data: JSON.stringify({ id: data, name: data2, image: data3, price: data4 }),
          success: function (results) {},
        });
      }
    }
    }