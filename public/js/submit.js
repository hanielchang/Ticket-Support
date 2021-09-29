async function SubmitFormHandler(event) {
    let title = $('#title').val();
    let user = '1';
    let content = $('#description').val().trim();
    let category = $('#options').val();
    let status = 'pending';
    if(!title && !user && !content && !category && !status)
    {
      return console.log('Error cannot leave empty fields!');
    }

    const test = await fetch('/api/users//user_data');
    console.log(test);

      const response = await fetch('/api/ticket/', {
        method: 'POST',
        body: JSON.stringify({
          title,
          category,
          content,
          status,
          user
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response, 'ticket submitted');
      // window.location.reload();
    
  }
  $('#submit').on('click', SubmitFormHandler);