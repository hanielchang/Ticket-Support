var usernameEL = document.querySelector("#username");
var userformEl = document.querySelector("#user-form");
var modal = document.querySelector(".modal-fade");
var signUpBtn = document.querySelector("#modal");
var closeBtn = document.querySelector(".closeBtn");


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


function toogleModal() {
  modal.classList.toggle("show-modal");
}
signUpBtn.addEventListener('click', toogleModal);
closeBtn.addEventListener('click', toogleModal);
  
