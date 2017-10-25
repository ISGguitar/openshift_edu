const server = require('./js/server');
const handler = require('./js/handler');
const router = require('./js/router');

//const hostname = '0.0.0.0';
const hostname = '127.0.0.1';
const port = 8080;

let handle = {};
// valid urls
handle["/"] = handler.indexPage;
handle["/index"] = handler.indexPage;
handle["/pagenotfound"] = handler.notFoundPage;
handle["/about"] = handler.aboutPage;
handle["/blog"] = handler.blogPage; 
// css as page
handle["/css/style"] = handler.getCSSpage;

server.startServer(hostname, port, router.route, handle);
