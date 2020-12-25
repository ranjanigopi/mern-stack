const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('./static'));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send('<p>HYYYY</p>');
});

app.get('/apple', (req, res) => {
    res.sendFile(__dirname + '/static/second.html');
});

app.listen(8080);
