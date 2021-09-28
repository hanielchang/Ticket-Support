async function logoutHandler(event){ 
    event.preventDefault();

    const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response, 'logout successful');
      window.location.href = '/';
};

$('#logout').on('click', logoutHandler);