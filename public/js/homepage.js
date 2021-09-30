async function logoutHandler(event) {

  const response = await fetch('/api/users/logout');
  window.location.reload();
  console.log(response);
};

$('#logout').on('click', logoutHandler);

async function deleteTicketHandler() {
  const btnvalue = $(this).data('id')

  const response = await fetch(`/api/ticket/${btnvalue}`, {
    method: 'DELETE'
  });
  console.log(response);
  window.location.reload();
}

$('.delete-btn').on('click', deleteTicketHandler);

async function editTicketHandler() {

  const btnvalue = $(this).data('id')
}

$('.edit-btn').on('click', editTicketHandler);