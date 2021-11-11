$("#lightslider").lightSlider({
  controls: false,
  item: 5,
  speed: 400,
  auto: true,
  slideMargin: 20,
  loop: true,
  pause: 900,
  pager: false,
  enableDrag: false,
});

$(function() {
  $("#historyForm").on("submit", function(e) {
    e.preventDefault();
    $.ajax({
      type: "post",
      url: "/history",
      data: $("#historyForm").serialize(),
      success: function(result) {
        console.log(result.success);
         $("#success").html(result.success);
      },
    });
  });
});


// Scroll to TOP
var btn = $(".scrollup");
$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});
btn.on("click", function(e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "500");
});

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye / eye slash icon
  this.classList.toggle('fa-eye-slash');
});