const http = require('http');

function startServer(hostname, port, route, handle) {
	http.createServer((req, res) => {
		 if (req.url.indexOf('.css') !== -1) {
            handle['css'](req.url, res);
        } else if (req.url.indexOf('.js') !== -1) {
            handle['js'](req.url, res);
        } else {
            route(req.url, handle, res);
        }
	}).listen(port, hostname, function() {
		console.log(`Server is running on ${hostname}:${port}`);
	});
}

module.exports.startServer = startServer;