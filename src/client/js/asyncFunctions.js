// Async Functions Module
const postData = async (url = '', data = {}) => {
    const newData = {};
    try {
        fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(`Post Data Successful: ${data}`);
                newData = data;
            });
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

const getData = async (url = '') => {
    newData = {};
    try {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                `Get Data Successful: ${data}`;
                getData = newData;
            });
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

export { postData, getData };
