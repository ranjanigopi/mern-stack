const http = require('http');
const router = require('./route');
const file = require('./file');

router.get('/hello', (req, res) => {
    res.write('<p>HYYYY</p>');
    res.end();
});

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        req.url = '/index.html';
    }
    file.handle(req, res, () => {
        router.handle(req, res);
    });
});

server.listen(8080);
