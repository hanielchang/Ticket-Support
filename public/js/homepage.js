async function logoutHandler(event) {

  const response = await fetch('/api/users/logout');
  window.location.reload();
  console.log(response);

};

$('#logout').on('click', logoutHandler);