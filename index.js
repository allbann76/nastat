'use strict';

const express = require('express');

const {db} = require('./server/db');
const schemes = require('./server/schemes');

if (Number(process.version[1]) < 6) {
    console.warn('Update Node.js to >= v6')
    process.exit(1)
}

const app = express();
const {join} = require('path');

const PORT = 1992;
const argvPort = process.argv.length >= 3 ? process.argv.pop() : PORT;

app.use(express.static('./static'));

schemes(app);

app.get('*', (req, res) => res.sendFile(join(__dirname, './static/index.html')));

db().then(() => {
    app.listen(argvPort, () => {
        console.log(`Web Server started. Listening port: ${argvPort}`);
    });    
});
