const fs = require('fs');

function getDataFromFile(dataPath, contentType, res) {

	var data = "";
	const readStream = fs.createReadStream(dataPath).setEncoding('utf8');
	//if fs.exists()
	//if file not found - page not found
	//res.statusCode = 404;
 	//res.setHeader('Content-Type', 'text/plain');
	//res.end(`Error\n${err}`);
	//..


	//read stream event:'data'
	readStream.on('data', (chunk) => {
		console.info('stream is reading');
		data += chunk;
	});

	//no data will be consumed event:'end'
	readStream.on('end', () => {
		console.info('end of file');
		res.statusCode = 200;
		res.setHeader('Content-Type'. contentType)		
		res.end(data);
	});

	//close stream event:'close'
	readStream.on('close', () => {
		console.info('stream is closed');
		
	});

	//error  event:'error'
	readStream.on('error', (err) => {
		console.error(`Some error:\n${err}`);
		res.statusCode = 500;
		res.setHeader('Content-Type'. 'text/html')
		res.write('Internal Server Error')
		res.end(err);
	});
}

function getHtml(fileName, res){
	let path=`./src/html/${fileName}.html`;
	getDataFromFile(path, 'text/html', res);
}

//get css too

 function getCssFromFile(res) {
 	getDataFromFile('./src/css/style1.css', 'text/css', res);	
}

module.exports.getHtml = getHtml;
module.exports.getCssFromFile = getCssFromFile;
