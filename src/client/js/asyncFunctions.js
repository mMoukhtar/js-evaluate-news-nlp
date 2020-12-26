// Async Functions Module
const postData = async (url = '', data = {}) => {
    let newData = {};
    try {
        await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                newData = data;
            });
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

const getData = async (url = '') => {
    let newData = {};
    try {
        await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                getData = newData;
            });
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

export { postData, getData };
