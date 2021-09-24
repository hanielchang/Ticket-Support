var usernameEL = document.querySelector("#username");
var passwordEL = document.querySelector("#password");
var userformEl = document.querySelector("#user-form");
var modal = document.querySelector(".modal-fade");
var signUpBtn = document.querySelector("#modal");
var closeBtn = document.querySelector(".close");

var submitHandler = (event) => {
  event.preventDefault(event)
  var username = usernameEL.value;
  var password = passwordEL.value;
  //   var passwordInput = passwordEl.value;
  if (username && password) {
    console.log(username);
    console.log(password);

    usernameEL.textContent = '';
    passwordEL.textContent = '';
  } else {
    alert("Please Enter the username");
  }
}
userformEl.addEventListener("submit", submitHandler);


signUpBtn.addEventListener('click', () => {
  modal.style.display = "grid";
});
closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

// $("#modal").addEventListener