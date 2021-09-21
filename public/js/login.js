async function logInFormHandler(event) {
  event.preventDefault();

  const username = $('#username-login').val().trim();
  const password = $('#password-login').val().trim();

  console.log(username, password);

  if (username && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(response,'login submitted');
  }
}

document.querySelector('.login-form').addEventListener('submit', logInFormHandler);


async function registerFormHandler(event) {
  event.preventDefault();

  const username = $('#username-register').val().trim();
  const email = $('#email-register').val().trim();
  const password = $('#password-register').val().trim();

  if (username && password && email) {
    const response = await fetch('/api/user/register', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(response);
  }
}

document.querySelector('.register-form').addEventListener('submit', registerFormHandler);