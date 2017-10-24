function route(urlRequested, handle, res) {
	if (handle[urlRequested] === 'function') {
		handle[urlRequested](res);
		//..
	} ellse {
		handle['/pagenotfound'](res);
		//..
	}
}

module.exports.route = route;