// Imports
const mockAPIResponse = require('./mockAPI.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { MeaningCloud, MeaningCloudApiLangEnum } = require('./meaningcloudApi');

//Main Variables

// Express as Backend Server
const app = express();

/* Middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

//Spin Express Server
const port = 8081;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

// GET Endpoints
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'));
});
app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

// POST Endpoints
app.post('/analyze', (req, res) => {
    const api = new MeaningCloud(req.body.text, MeaningCloudApiLangEnum.English);
    api.analyze().then((data) => {
        res.send(data);
    });
});
