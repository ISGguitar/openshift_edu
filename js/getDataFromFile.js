const fs = require('fs');

function getDataFromFile(dataPath, contentType, res) {

	var data = "";
	if (!fs.existsSync(dataPath)) {
			console.error(`File ${dataPath} not found`);
			res.statusCode = 404;
			res.setHeader('Content-Type', 'text/plain');
			res.end('Page not found');
	} else {
		const readStream = fs.createReadStream(dataPath).setEncoding('utf8');

		readStream.on('data', (chunk) => {			
			// console.info('stream is reading');			
			data += chunk;
		});

		readStream.on('end', () => {
			// console.info('end of file');
			// console.log(data)
			res.statusCode = 200;
			res.setHeader('Content-Type', contentType)		
			res.end(data);
		});

		readStream.on('close', () => {
			// console.info('stream is closed');		
		});

		readStream.on('error', (err) => {
			console.error(`Some error:\n${err}`);
			res.statusCode = 500;
			res.setHeader('Content-Type', 'text/plain');
			res.write('Internal Server Error\n')
			res.end(err);
		});
	}
}

function getHtml(fileName, res) {
	let dataPath = `./src/html/${fileName}.html`;
	getDataFromFile(dataPath, 'text/html', res);
}

 function getCssFromFile(fileName, res) {
 	getDataFromFile(`./src/css${fileName}`, 'text/css', res);
}

function getJavaScriptFromFile(fileName, res) {
	getDataFromFile(`./src/js${fileName}`, 'text/javascript', res);
}

module.exports.getHtml = getHtml;
module.exports.getCssFromFile = getCssFromFile;
module.exports.getJavaScriptFromFile = getJavaScriptFromFile;