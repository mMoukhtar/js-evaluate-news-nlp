function validate() {
    const text = document.querySelector('#name').value;
    const regEx = /^([A-Za-z]{3,})+/;
    return regEx.test(text);
}

export { validate };
