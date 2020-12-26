// Imports
import mockAPIResponse from './mockAPI.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

//Main Variables

// Express as Backend Server
const app = express();

/* Middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

//FIXME: Remove this __dirname log
console.log(__dirname);

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
    //TODO: Add post functionality
    console.log(`:: Analyze End point on server ::
    Request Body = ${JSON.stringify(req.body)}`);
    res.send({});
});
