function route(urlRequested, handle, res) {
	if (handle[urlRequested] === 'function') {
		handle[urlRequested](res);
		//..
	} else {
		handle['/pagenotfound'](res);
		//..
	}
}

module.exports.route = route;