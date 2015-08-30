global.config = require("./app.config.js");
var express = require("express"),
    app     = express()
 

var RouteRegistration = require(global.config.__base + 'modules/api/RegistrationRoute').router;

app.use("/Registration",RouteRegistration);
/*app.use("/Login",RouteClass);
app.use("/Menu",RouteClass);
app.use("/Restaurant",RouteClass);
app.use("/Checkout",RouteClass);
app.use("/OrderStatus",RouteClass);
app.use("/Verification",RouteClass);*/


var server = app.listen(3000, function () {
	console.log(server.address().address);
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});