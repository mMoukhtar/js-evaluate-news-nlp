var dotenv = require('dotenv');
dotenv.config();

// I am adding this just in case it essential to meet the project rubric :)
var meaningcloudApi = {
    application_key: process.env.meaningcloud_API_KEY,
};

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

class MeaningCloudApi {
    constructor(text, lang) {
        this.text = text;
        this.lang = lang;
        this.baseUrl = 'https://api.meaningcloud.com/sentiment-2.1';
    }
    get apiRequest() {
        return `${this.baseUrl}?key=${process.env.meaningcloud_API_KEY}&of=json&txt=${text}&model=general&lang=en`;
    }
    analyze() {
        console.log(this.apiRequest);
    }
}

export { meaningcloudApi, MeaningCloudApiLangEnum };
