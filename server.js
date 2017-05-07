/*
 * Modules
 */
var express = require('express');

/*
 * App with Express.js
 */
var app = express();

app.get('/', function (req, res) {
	
	res.writeHead(200, {'content-type':'application/JSON'});
	
	var ipAddress = req.headers["x-forwarded-for"];
	var language = req.headers["accept-language"].split(',')[0];
	var userAgent = req.headers["user-agent"];
	
	//Only match the first sequence in parenthesis
	var regExp = /\(([^)]+)\)/;
	var software = regExp.exec(userAgent)[1];

	var dataJSON = {
		"ipAddress": ipAddress,
		"Language": language,
		"Software": software
	}
	
	res.end(JSON.stringify(dataJSON));
	
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port!');
});