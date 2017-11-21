function route(urlRequested, handle, res) {
	if (typeof handle[urlRequested] === 'function' ) {
		handle[urlRequested](res);
		//..
	} else {		
		res.writeHead('404');
		res.end('Page not found');
	}
}

module.exports.route = route;