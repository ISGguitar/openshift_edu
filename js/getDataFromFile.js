const fs = require('fs');


function getHtml(fileName, res){

	let path=`./src/html/${fileName}.html`;
	
	let dataFromFile = fs.readFile(path, 'UTF-8', function(err, data) {
		if (err) {
			res.statusCode = 404;
 			res.setHeader('Content-Type', 'text/plain');
			res.end(`Error\n${err}`);			
		} else {		
			res.statusCode = 200;
 			res.setHeader('Content-Type', 'text/html');
			res.end(data);			
		}		
	});
}

//get css too

 function getCssFromFile(res) {
 	fs.readFile('./src/css/style1.css', function (err, data) {
 		console.log('css');
    	if (err) {
    		res.statusCode = 404;
 			res.setHeader('Content-Type', 'text/plain');
			res.end(`Error\n${err}`);
    	} else {    		
    		res.statusCode = 200;
 			res.setHeader('Content-Type', 'text/css');
			res.end(data);	
    	}      
    	
  	});
 }

module.exports.getHtml = getHtml;
module.exports.getCssFromFile = getCssFromFile;