const ticketListEl = document.querySelector("#ticket-list");

function checkTicket(event) {
    event.preventDefault();

    // Since the button clicked is nested 2 layers deep beyond the
    // main ticket element itself, I need to call parentElement twice
    // in order to obtain the ticket element which contains the id number
    var buttonEl = event.target.id;
    var ticketID = event.target.parentElement.parentElement.id

    if (buttonEl === "edit") {
        
        // window.location.replace('file:///C:/Users/Haniel%20Chang/Bootcamp/group-projects/Ticket-Support/submit/submit.html')
        var ticketEl = document.getElementById(ticketID);
        console.log(ticketEl.innerHTML);
    }
    else if (buttonEl === "delete") {
        const response = fetch('api/tickets', {
            method: 'DELETE',
            body: JSON.stringify({
                ticketID
            }),
            headers: {'Content-type': 'application/json'}
        });
        console.log(response);
    }
}
    ticketListEl.addEventListener("click", checkTicket);