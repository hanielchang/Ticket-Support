// var usernameEL = document.querySelector("#username");
// var passwordEL = document.querySelector("#password");
// var userformEl = document.querySelector("#user-form");
// var modal = document.querySelector(".modal-fade");
// var ticketContainerEl = document.querySelector("#ticket-container");
// // buttons
// var createBtn = document.querySelector("#create-account");
// var closeBtn = document.querySelector(".close");
// var modalClose = document.querySelector("#modal-close");
// var loginBtn = document.querySelector("#login-btn");
// var signUpBtn = document.querySelector("sign-up");

// //fetch api for login
// var getTicket = (user) => {
//   var apiKey = "";
//   var apiUrl = "" + user + `${apiKey}`;
//   fetch(apiUrl).then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         console.log(data);
//         displayLogin(data, tickets);
//         // Another apiUrl for ticket  details
//         apiUrl = "";
//         fetch(apiUrl).then(function (response2) {
//           if (response2.ok) {
//             response2.json().then(function (data2) {
//               console.log(data2);
//             })
//           }
//         })
//       })
//     } else {
//       alert("Error: User Not Found");
//     }
//   }) .catch(function(error) {
//     alert("Unable to connect to fetch(apiUrl)");
//   })
// };

// // check-in username password
// var submitHandler = (event) => {
//   event.preventDefault();
//   var username = usernameEL.value;
//   var password = passwordEL.value;
//   //   var passwordInput = passwordEl.value;
//   if (username && password) {
//     console.log(username);
//     console.log(password);
//     getTicket(username);

//     usernameEL.textContent = '';
//     passwordEL.textContent = '';
//   } else {
//     alert("Please Enter the username");
//   }
// }
// userformEl.addEventListener("submit", submitHandler);


// //create a new Account
// var modalSubmitHandler = (event) => {
//   event.preventDefault();
//   var nameFirst = document.querySelector("#firstname").value;
//   var nameLast = document.querySelector("#lastname").value;
//   var email = document.querySelector("#email").value;
//   var passNew = document.querySelector("#newpassword").value;

// }



// var displayLogin = (tickets) => {

// for( let i = 0; i < tickets.length; i++) {
//   var ticketEl = document.createElement("a");
//   ticketEl.setAttribute=("target","_blank" );
// }
//   // clear 
// }


// loginBtn.addEventListener('submit', displayLogin);
// createBtn.addEventListener('click', () => {
//   modal.style.display = "grid";
// });
// closeBtn.addEventListener('click', () => {
//   modal.style.display = "none";
// });
// modalClose.addEventListener('click', () => {
//   modal.style.display = "none";
// });
// $("#modal").addEventListener