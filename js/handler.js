const getDataFromFile = require('./getDataFromFile');

function indexPage(res) {
	getDataFromFile.getHtml('index', res);
}

function blogPage(res) {
	getDataFromFile.getHtml('blog', res);
}

function portfolioPage(res) {
	getDataFromFile.getHtml('portfolio', res);
}


function getCSS(requiredUrl, res) {
	
	getDataFromFile.getCssFromFile(requiredUrl, res);
}

function getJS(requiredUrl, res) {
	getDataFromFile.getJavaScriptFromFile(requiredUrl, res);
}

module.exports.indexPage = indexPage;
module.exports.blogPage = blogPage;
module.exports.portfolioPage = portfolioPage;

module.exports.getCSS = getCSS;
module.exports.getJS = getJS;