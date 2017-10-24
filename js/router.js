function route(urlRequested, handle, res) {
	if (handle[urlRequested] === 'function') {
		res.statusCode = 200;
 		res.setHeader('Content-Type', 'text/plain');
 		res.end(`funcFound:${urlRequested}`);
		//handle[urlRequested](res);
		//..
	} else {
		res.statusCode = 200;
 		res.setHeader('Content-Type', 'text/plain');
 		res.end(`urlRequested:${urlRequested}`);
		//handle['/pagenotfound'](res);
		//..
	}
}

module.exports.route = route;