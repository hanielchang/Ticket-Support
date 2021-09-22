var usernameEL = document.querySelector("#username");
var userformEl = document.querySelector("#user-form");

var submitHandler = (event) => {
    event.preventDefault(event)
  var usernameInput = usernameEL.value;
//   var passwordInput = passwordEl.value;
  if(usernameInput) {
      console.log(usernameInput);
      usernameEL.textContent = '';
  } else {
      alert("Please Enter the username");
  }
}
userformEl.addEventListener("submit", submitHandler);