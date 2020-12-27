function updateScreen(data) {
    //Check for successful status code
    if (data.status.code == 0) {
        showHideFormResults(true);
        addResult(data);
    } else {
        showHideFormResults(false);
    }
    // document.getElementById('results').innerHTML = data.sentence_list;
}

function showHideFormResults(show) {
    const formResults = document.querySelector('#formResults');
    if (show) {
        formResults.style.display = 'block';
    } else {
        formResults.style.display = 'none';
    }
}

function addResult(data) {
    clearResult();
    const { score_tag, agreement, subjectivity, confidence, irony } = data;
    const container = document.createDocumentFragment();
    const scoreTagP = document.createElement('p');
    scoreTagP.innerHTML = `Score Tag: ${score_tag}`;
    const agreementP = document.createElement('p');
    agreementP.innerHTML = `Agreement: ${agreement.toLowerCase()}`;
    const subjectivityP = document.createElement('p');
    subjectivityP.innerHTML = `Subjectivity: ${subjectivity.toLowerCase()}`;
    const confidenceP = document.createElement('p');
    confidenceP.innerHTML = `Confidence: ${confidence.toLowerCase()}`;
    const ironyP = document.createElement('p');
    ironyP.innerHTML = `Iorny: ${irony.toLowerCase()}`;
    container.appendChild(scoreTagP);
    container.appendChild(agreementP);
    container.appendChild(subjectivityP);
    container.appendChild(confidenceP);
    container.appendChild(ironyP);
    document.querySelector('#results').appendChild(container);
}

function clearResult() {
    const results = (document.querySelector('#results').innerHTML = '');
}

export { updateScreen };
