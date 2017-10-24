const getHtml = require('./getDataFromFile').getHtml;
const getCSS = require('./getDataFromFile').getCssFromFile;

function indexPage(res) {
	getHtml('index', res);
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
	getHtml('pagenotfound', res);
}

function responseFunc(res) {
	getHtml('I_Will_Get_An_Error', res);
}

function getCSSpage(res) {
	getCSS(res);
}

module.exports.indexPage = indexPage;
module.exports.notFoundPage = notFoundPage;
module.exports.aboutPage = aboutPage;
module.exports.blogPage = blogPage;
module.exports.getCSSpage = getCSSpage;

