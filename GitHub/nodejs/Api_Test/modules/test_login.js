var zlib = require('zlib');
var exports = module.exports = {};
var http = require('modules/http_call');
var config = global.config;

	



exports.test = function(){
	
	return "i am from login login_credential " + JSON.stringify(config.API);
}

httpjson = function(url,param,callback){
	http.httpjson(url,param,function(error, response, body) {
		 console.log('server encoded the data as: ' + (response.headers['content-encoding'] || 'identity'))
     	 console.log('the decoded data is: ' + body)
     	
      	if (!error) {
	        var info = JSON.parse(JSON.stringify(body));
	    //    console.log(info);
	        callback(info);
	    }
	    else {
	        console.log('Error happened: '+ error);
	    }
	});

};

exports.TOKEN = function(login_info, callback){
	var url = config.API.baseurl_UAP + config.API.TOKEN;
	http.httpurl(url,login_info, function(res){
	  res.setEncoding('utf8');
	  res.on('data', function (chunk) {
	     callback(JSON.parse(chunk));
	  });
	});

}


exports.GetAccountModules = function(login_info, callback){
	var url =  config.API.DOMAIN+ config.API.baseurl_UAP + config.API.AccountInfo;
	httpjson(url,login_info,callback);
};

exports.RES_RATE_EXCEPTION_BANK = function(param, callback){
	var url = config.API.DOMAIN+config.API.BASE_URL_UCRA + config.API.RES_RATE_EXCEPTION_BANK;
	httpjson(url,param,callback);
};

exports.RES_RATE_EXCEPTION_APPID = function(param, callback){
	var url = config.API.DOMAIN+config.API.BASE_URL_UCRA + config.API.RES_RATE_EXCEPTION_APPID +  param.Appid;
	httpjson(url,param,callback);
};

exports.RES_RATE_EXCEPTION_CUST = function(param, callback){
	var url = config.API.DOMAIN+config.API.BASE_URL_UCRA + config.API.RES_RATE_EXCEPTION_CUST;
	httpjson(url,param,callback);
};

exports.RES_RATE_EXCEPTION_REQUEST_APP_ID = function(param, callback){
	var url = config.API.DOMAIN+config.API.BASE_URL_UCRA + config.API.RES_RATE_EXCEPTION_REQUEST_APP_ID + param.Appid;
	httpjson(url,param,callback);

};

exports.WMG_BANKER_PROFILE_VIEWER = function(param, callback){
	var url = config.API.DOMAIN+config.API.BASE_URL_UCRA + config.API.WMG_BANKER_PROFILE_VIEWER;
	httpjson(url,param,callback);
};