function handleSubmit(event) {
    event.preventDefault();
    const formText = document.getElementById('name').value;
    const validator = document.querySelector('.validation');
    if (Client.validate(formText)) {
        validator.style.display = 'none';
        // Question, how would I setup the url if I want to use webpack dev server with express?
        // I had to manually change the link between "http://localhost:8081/analyze" during dev and "/analyze" during production
        Client.postData('http://localhost:8081/analyze', { text: formText }).then((data) => {
            Client.updateScreen(data);
        });
    } else {
        validator.innerText = `Please enter a valid text!
        Text must start with at leaset 3 letters.`;
        validator.style.display = 'block';
    }
}

export { handleSubmit };
