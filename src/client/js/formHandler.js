function handleSubmit(event) {
    event.preventDefault();
    const formText = document.getElementById('name').value;

    // Question, how would I setup the url if I want to use webpack dev server with express?
    // I had to manually change the link between "http://localhost:8081/analyze" during dev and "/analyze" during production
    Client.postData('/analyze', { text: formText }).then((data) => {
        Client.updateScreen(data);
    });
}

export { handleSubmit };
