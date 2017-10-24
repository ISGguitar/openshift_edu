function indexPage(res) {
	responseFunc(res);
	//..
}

function aboutPage(res) {
	responseFunc(res);
	//..
}

function blogPage(res) {
	responseFunc(res);
	//..
}

function notFoundPage(res) {
	res.statusCode = 404;
 	res.setHeader('Content-Type', 'text/plain');
 	res.end('Page not found\n');
	//..
}

function responseFunc(res) {
	res.statusCode = 200;
 	res.setHeader('Content-Type', 'text/plain');
 	res.end('Hello World\n');
}

module.exports.indexPage = indexPage;
module.exports.notFoundPage = notFoundPage;
module.exports.aboutPage = aboutPage;
module.exports.blogPage = blogPage;