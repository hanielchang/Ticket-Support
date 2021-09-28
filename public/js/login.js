// var createBtn = $("#create-account");
// var closeBtn = $(".close");
// var modalClose = $("#modal-close");
// var signUpBtn = $("sign-up");

async function logInFormHandler(event) {
  event.preventDefault();

  const username = $('#username-login').val().trim();
  const password = $('#password-login').val().trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(response, 'login submitted');
    if (response.ok) {
      // window.location.href = '/homepage';
    }
  }
}

$('#login-form').on('submit', logInFormHandler);


async function registerFormHandler(event) {
  event.preventDefault();

  console.log('submit signup');

  const username = $('#username-register').val().trim();
  const email = $('#email-register').val().trim();
  const password = $('#password-register').val().trim();
  // const role = 'user';

  if (username && password && email) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(response);
    // window.location.href = '/homepage';
  }
}

$('#sign-up').on('click', registerFormHandler);

// var displayLogin = (tickets) => {

//   for (let i = 0; i < tickets.length; i++) {
//     var ticketEl = document.createElement("a");
//     ticketEl.setAttribute = ("target", "_blank");
//   }
//   // clear 
// }


$("#create-account").on('click', () => {
  $(".modal-fade").css('display', 'grid');
});
$(".close").on('click', () => {
  $(".modal-fade").hide();
});
$("#modal-close").on('click', () => {
  $(".modal-fade").hide();
});