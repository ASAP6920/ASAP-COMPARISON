let captchaText = document.querySelector("#captcha");
let captchaText1 = document.querySelector("#captcha1");
let userText = document.querySelector("#textBox");
let refreshButton = document.querySelector("#refresh");

let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];
for(let i = 1; i <= 6; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
let preCaptcha = emptyArr.join("");


captchaText.innerHTML = preCaptcha;
captchaText1.value = preCaptcha;

refreshButton.addEventListener("click", function () {
  userText.value = "";
  let refreshArr = [];
  for (let k = 1; k <= 6; k++) {
    refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
  }
  let preRefreshCaptcha = refreshArr.join("");
  captchaText.innerHTML = preRefreshCaptcha;
  captchaText1.value = preRefreshCaptcha;
});