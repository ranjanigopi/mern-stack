const routes = {
    GET: {}
};

function get(path, handler) {
    routes.GET[path] = handler;
}

function handle(req, res) {
    const handler = routes[req.method][req.url];
    if (handler) {
        return handler(req, res);
    } else {
        res.writeHead(404);
        res.end();
    }

}

module.exports.get = get;
module.exports.handle = handle;
