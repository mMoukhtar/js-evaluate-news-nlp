function updateScreen(data) {
    console.log('::: Running updateScreen :::', JSON.stringify(data));
    document.getElementById('results').innerHTML = data.sentence_list;
}

export { updateScreen };
