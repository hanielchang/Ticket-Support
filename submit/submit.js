const submitEl = document.querySelector('#submit');
const optionEl = document.querySelector('#options');


function submitTicket(event) {
    event.preventDefault();

    const titleEl = document.querySelector('#title');
    const descriptionEl = document.querySelector('#description');

    if (titleEl && descriptionEl) {
        const response = fetch('api/tickets', {
            method: 'POST',
            body: JSON.stringify({
                titleEl,
                descriptionEl
            }),
            headers: {'Content-type': 'application/json'}
        });
        console.log(response);
    }
}

submitEl.addEventListener('click', submitTicket);
