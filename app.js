const server = require('./js/server');
const handler = require('./js/handler');
const router = require('./js/router');

const hostname = '0.0.0.0';
const port = 8080;

let handle = {};
// pages here
handle['/'] = handler.indexPage;
handle['/index'] = handler.indexPage;

handle['/pagenotfound'] = handler.notFoundPage;
handle['/about'] = handler.aboutPage;
handle['/blog'] = handler.blogPage;

server.startServer(hostname, port, router.route, handle);
