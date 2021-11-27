$(function () {
    $("#newsForm").on("submit", function (e) {
      e.preventDefault();
      $.ajax({
        type: "post",
        url: "/subscribe",
        data: $("#newsForm").serialize(),
        success: function (result) {
          console.log(result.success);
          $("#success-subscribe").html(result.success);
        },
      });
    });
  });

  function checkForm()
{
    var name = document.getElementById("sub-email").value;
    var cansubmit = (name.length > 0);
    if (!cansubmit){
      document.getElementById("success-subscribe").innerHTML =
        "Subscribe for newsletters";
    }
    document.getElementById("sub-submit").disabled = !cansubmit;
};