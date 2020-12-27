//Axios to handle POST/GET Async Request from Express
const axios = require('axios').default;

//
var dotenv = require('dotenv');
dotenv.config();

// I am adding this just in case it essential to meet the project rubric :)
// var meaningcloudApi = {
//     application_key: process.env.meaningcloud_API_KEY,
// };

const MeaningCloudApiLangEnum = {
    English: 'en',
    Spanish: 'es',
    Italian: 'it',
    French: 'fr',
    Portuguese: 'pt',
    Catalan: 'ca',
    Danish: 'da',
    Swedish: 'sv',
    Norwegian: 'no',
    Finnish: 'fi',
};
Object.freeze(MeaningCloudApiLangEnum);

class MeaningCloud {
    constructor(text, lang) {
        this.text = text;
        this.lang = lang;
        this.baseUrl = 'https://api.meaningcloud.com/sentiment-2.1';
    }
    get requestURL() {
        return `${this.baseUrl}?key=${process.env.meaningcloud_API_KEY}&of=json&txt=${this.text}&model=general&lang=en`;
    }
    async analyze() {
        let analyzeData = {};
        await axios
            .post(this.requestURL)
            .then(({ data }) => {
                analyzeData = data;
            })
            .catch((error) => {
                console.log('error', error);
            });
        return analyzeData;
    }
}

module.exports = { MeaningCloud, MeaningCloudApiLangEnum };
