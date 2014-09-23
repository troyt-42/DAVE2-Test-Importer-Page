var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request,response){
	response.writeHead(200, {"ContentType" : "text/html"});
	var data = fs.createReadStream('dataItemDetails.json');
	var tempMem = fs.createWriteStream('tempDB.json');
	data.pipe(tempMem);
	data.pipe(response);
}).listen(8080);

console.log("Server is listenning to 8080");