const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {connect} = require('./api/database');

const app = express();
const staticFilePath = path.join(__dirname, 'static');

app.use(express.static(staticFilePath));
app.use(bodyParser.json());

app.use('/user', require('./api/routes/user'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(staticFilePath, 'index.html'));
});

connect().then(() => {
    app.listen(8080, () => console.log('Listening at port: 8080'));
});
