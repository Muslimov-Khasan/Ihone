var elCheckMony = document.querySelector("#mony");
var elCheckPhone = document.querySelector("#phone");
var elCheckIphone = document.querySelector("#iphone");
var elCheckCheap = document.querySelector("#cheap");

var elBtnGo = document.querySelector(".btn");
var elOutStudy = document.querySelector(".output");
var messages = "";

elBtnGo.addEventListener("click", function (e) {
  e.preventDefault();
  var mony = elCheckMony.checked;
  var phone = elCheckPhone.checked;
  var iphone = elCheckIphone.checked;
  var cheap = elCheckCheap.checked;

  if ((mony && !phone && !iphone) || (mony && !cheap && !iphone)) {
    messages = "Telefon olishgiz Mumkin!!";
  } else {
    messages = "Kengi oy keling";
  }

  elOutStudy.textContent = messages;
})