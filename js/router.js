function route(urlRequested, handle, res) {
	if (typeof handle[urlRequested] === 'function' ) {
		handle[urlRequested](res);
		//..
	} else {		
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Page not found');
	}
}

module.exports.route = route;
