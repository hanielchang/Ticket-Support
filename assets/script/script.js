var usernameEL = document.querySelector("#username");
var passwordEL = document.querySelector("#password");
var userformEl = document.querySelector("#user-form");
var modal = document.querySelector(".modal-fade");
var signUpBtn = document.querySelector("#modal");
var closeBtn = document.querySelector(".close");
var modalClose = document.querySelector("#closeBtn")


//fetch api for login
var getTicket = (user) => {
  var apiKey = "";
  var apiUrl = "" + user + `${apiKey}`;
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        // Another apiUrl for ticket  details
        apiUrl = "";
        fetch(apiUrl).then(function (response2) {
          if (response2.ok) {
            response2.json().then(function (data2) {
              console.log(data2);
            })
          }
        })
      })
    } else {
      alert("Error: User Not Found");
    }
  }) .catch(function(error) {
    alert("Unable to connect to fetch(apiUrl)");
  })
};


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
modalClose.addEventListener('click', () => {
  modal.style.display = "none";
});
// $("#modal").addEventListener