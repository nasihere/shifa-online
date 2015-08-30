

var config = require("app/config/api_config");
var app = require('modules/routes').app;


var server = app.listen(3000, function () {
	console.log(server.address().address);
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

