const mongoose = require('mongoose');
const config = require('./database.config.json');

const uri = `mongodb://${config.user}:${config.pass}@${config.host}/${config.name}?authSource=${config.auth}`;

const connect = () => mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

module.exports.connect = connect;
