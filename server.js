var express = require('express');
var app = express();

app.get('/', function (req, res) {
    
    res.writeHead(200, {'content-type':'application/JSON'});
    
    var ipAddress = req.headers["x-forwarded-for"];
    var language = req.headers["accept-language"].split(',')[0];
    var userAgent = req.headers["user-agent"];

    var dataJSON = {
        "ipAddress": ipAddress,
        "Language": language,
        "Software": userAgent
    }
    
    console.log(req.headers);

    res.end(JSON.stringify(dataJSON));
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port!');
});