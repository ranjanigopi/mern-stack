const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const staticFilePath = path.join(__dirname, 'static');

app.use(express.static(staticFilePath));
app.use(bodyParser.json());

app.get('/*', (req,res) => {
    res.sendFile(path.join(staticFilePath, 'index.html'))
})

app.listen(8080, () => console.log('Listening at port: 8080'));
