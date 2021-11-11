const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye / eye slash icon
  this.classList.toggle('fa-eye-slash');
});


$(document).ready(function() {
    $('#lightslider-demo').lightSlider({
      controls: true,
      item: 5,
      speed: 400, 
          auto: true,
          slideMargin: 20,
          loop:true,
          pager:false,
          enableDrag:true,
    });
  });



  