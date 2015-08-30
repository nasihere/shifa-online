
var request = require('request');
var http = require("http");
var querystring = require('querystring');
global.config = require("app/config/api_config");




var exports =  module.exports = {};

exports.httpurl = function(url,param,callback){
	var auth = 'Bearer ' + global.config.API.tokenId;
	var postData = querystring.stringify(param);
	
	var options = {
		host: global.config.API.DOMAIN_NAME,
		 method: global.config.API.METHOD,
		path: null,
		headers:null,
		 port: 80
	};

	options.path = url;
	options.headers =  {
	    'Content-Type': 'application/x-www-form-urlencoded',
	    'Content-Length': postData.length,
	     "IsAdEntID": global.config.API.IsAdEntID,
	    Authorization: auth
	  };
	 
	  
   var req = http.request(options, callback);
	
	req.on('error', function(e) {
		console.log('problem with request: ' + e.message);
		console.log(options);
	});


	req.write(postData);
	req.end();
};


exports.httpjson = function(url,param,callback){
	
	var auth = 'Bearer ' + global.config.API.tokenId;
	var options = {
	    method: global.config.API.METHOD,
	    url: url,
	    headers: {
	        'Content-Type': 'application/json',
	         "IsAdEntID": global.config.API.IsAdEntID,
	        Authorization: auth
	    },
	    json: param

	};
		console.log("Reading URL: "  + options.url);
	  request(options, callback);
 	

};

