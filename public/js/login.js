async function logInFormHandler(event) {

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
    window.location.reload();
  }
}

$('#login-form').on('submit', logInFormHandler);


async function registerFormHandler(event) {
  // event.preventDefault();

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
    window.location.reload();
  }
}

$('#sign-up').on('click', registerFormHandler);

$("#create-account").on('click', () => {
  $(".modal-fade").css('display', 'grid');
});
$(".close").on('click', () => {
  $(".modal-fade").hide();
});
$("#modal-close").on('click', () => {
  $(".modal-fade").hide();
});