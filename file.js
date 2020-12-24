const fs = require('fs');

const handle = (req, res, next) => {
    fs.readFile('./static' + req.url, (error, result) => {
        if (error) {
            next();
        } else {
            res.write(result);
        }
        res.end();
    });
};

module.exports.handle = handle;
