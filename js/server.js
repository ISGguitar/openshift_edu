const http = require('http');
const url = require('url');

function startServer(hostname, port, route, handle) {
	http.createServer((req, res) => {		
		
		let urlRequested = url.parse(req.url).pathname;
		console.log(`urlRequested:${urlRequested}`);
		route(urlRequested, handle, res);		
	}).listen(port, hostname, function() {
		console.log('Server is running');
	});
}

module.exports.startServer = startServer;