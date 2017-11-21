const server = require('./js/server');
const handler = require('./js/handler');
const router = require('./js/router');


const hostname = '0.0.0.0';
// const hostname = '127.0.0.1';
const port = 8080;

let handle = {};
// valid urls
handle["/"] = handler.indexPage;
handle["/index"] = handler.indexPage;
handle["/blog"] = handler.blogPage;
handle["/portfolio"] = handler.portfolioPage;
handle["css"] = handler.getCSS;
// handle["js"] = handler.getJS;

server.startServer(hostname, port, router.route, handle);
