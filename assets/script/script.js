var usernameEL = document.querySelector("#username");
var passwordEL = document.querySelector("#password");
var userformEl = document.querySelector("#user-form");
var signUpformEl = document.querySelector("#modal-form");
var modal = document.querySelector(".modal-fade");
var ticketContainerEl = document.querySelector("#ticket-container");
// buttons
var createBtn = document.querySelector("#create-account");
var closeBtn = document.querySelector(".close");
var modalClose = document.querySelector("#modal-close");
var loginBtn = document.querySelector("#login-btn");
var signUpBtn = document.querySelector("#sign-up");

//
var Username = document.querySelector("#Username").value;
var Password = document.querySelector("#newPassword").value;
var Email = document.querySelector("#Email").value;

//fetch api for login
var getTicket = (user) => {
  var apiKey = "";
  var apiUrl = "http:localHost3001." + user + `${apiKey}`;
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        displayLogin(data, tickets);
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
  }).catch(function (error) {
    alert("Unable to connect to fetch(apiUrl)");
  })
};

// check-in username password
var submitHandler = (event) => {
  event.preventDefault();
  var username = usernameEL.value;
  var password = passwordEL.value;
  //   var passwordInput = passwordEl.value;
  if (username && password) {
    console.log(username);
    console.log(password);
    getTicket(username);
    displayLogin(tickets);
    usernameEL.textContent = '';
    passwordEL.textContent = '';
  } else {
    alert("Please Enter the username");
  }
}
userformEl.addEventListener("submit", submitHandler);


//create a new Account
var signUpHandler = (event) => {
  event.preventDefault();
  var Username = document.querySelector("#Username").value;
  var Password = document.querySelector("#newPassword").value;
  var Email = document.querySelector("#Email").value;
  let usernameProfile = [];
  let profile_object = {};
  profile_object.username = Username;
  profile_object.password = Password;
  profile_object.email = Email;

  var apiUrl = "";

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        method: 'PUT'
        // push data to `database`
        usernameProfile.push(profile_object);
        console.log(data);
        //
      });
    } else {
      // call the function that displays err text in modal
      alert('');
    }
  });
};
//display list of tickets with link <a>
var displayLogin = (ticket) => {

  for (let i = 0; i < ticket.length; i++) {
    var ticketEl = document.createElement("a");
   
    ticketEl.setAttribute = ("href", "./homepage.html?ticket=");
    ticketEl.setAttribute = ("target", "_blank");
    ticketContainerEl.appendChild(ticketEl);
  }
  // clear 
}


loginBtn.addEventListener('submit', () => {

  if (Username && Password) {
    displayLogin(ticket);
  }

});




signUpBtn.addEventListener('submit', () => {
  
  if (Username && Password && Email) {
    console.log("Sign Up  completed successfully!");
    // Display "Sign Up  completed successfully!" function in green..
    modal.style.display = "none";
    signUpHandler;
  } else {
    // Display "Username already exits!" in red // create function that checks if username exits and displays
  }
});

createBtn.addEventListener('click', () => {
  modal.style.display = "grid";
});
closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});
modalClose.addEventListener('click', () => {
  modal.style.display = "none";
});

// $("#create-account").click(function(){
//   console.log("click");
//  $(".modal-fade").css("display", "grid");
// })  
