var express = require('express');
var app = express();
var TST_DATA = require('app/models/test_data');

var test = require('modules/test_login');
// accept POST request on the homepage
app.get('/', function (req, res) {
	res.send(test.test());
});

app.get('/TOKEN', function (req, res) {
	 res.header ('Access-Control-Allow-Origin', '*');
	test.TOKEN(TST_DATA.TD_login,function(chunk)
	{
		global.config.API.tokenId = chunk.access_token;
		res.send(chunk.access_token);
	});	
});


app.get('/WMG_BANKER_PROFILE_VIEWER', function (req, res) {
	res.header ('Access-Control-Allow-Origin', '*');	
	test.WMG_BANKER_PROFILE_VIEWER(TST_DATA.TD_WMG_BANKER_PROFILE_VIEWER,function(chunk)
	{
		res.send(chunk);
	});	
});

app.use(function(req, res, next) {
    var oneof = false;
    if(req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        oneof = true;
    }
    if(req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        oneof = true;
    }
    if(req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        oneof = true;
    }
    if(oneof) {
        res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
    }

    // intercept OPTIONS method
    if (oneof && req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});

var exports = module.exports = {};
exports.app = app;