function route(urlRequested, handle, res) {
	if (handle[urlRequested] === 'function') {
		console.log('function found');
		handle[urlRequested](res);
		//..
	} else {
		console.warn('page not found')
		handle['/pagenotfound'](res);
		//..
	}
}

module.exports.route = route;