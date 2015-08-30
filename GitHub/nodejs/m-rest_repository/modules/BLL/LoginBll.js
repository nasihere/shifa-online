var exports = module.exports = {};

var tseed = require(global.config.__base + 'modules/database/seeds/RegistrationSeeds');
var db = require(global.config.__base + 'modules/database/Repository/DatabaseHelper');


exports.Login = function(callback){
	//db.helper.POST(tseed.schema,tseed.data.Add,callback);		
}

exports.Logout = function(param, callback){
	//db.helper.FIND(tseed.schema,{UserID:param},callback);
}

exports.ForgotPassword = function(param, callback){
	//db.helper.DELETE(tseed.schema,{UserID:param},callback);	
}