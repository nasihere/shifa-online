var exports = module.exports = {};
var tseed = require(global.config.__base + 'modules/database/seeds/RegistrationSeeds');
var Verify = require(global.config.__base + 'modules/BLL/VerificationSMSBll');
var db = require(global.config.__base + 'modules/database/Repository/DatabaseHelper.js');

exports.Test   = {

	DELETEAll: function(callback){
		db.helper.DELETE(tseed.schema,{},callback);
	},
	DELETE: function(callback){
		db.helper.DELETE(tseed.schema,{UserID:"nasihere"},callback);
	},
	FIND: function(callback){
		db.helper.FIND(tseed.schema,{UserID:"nasihere"},callback);
	},
	POST: function(callback){
		db.helper.POST(tseed.schema,tseed.data.Add,callback);		
	},
	GET: function(callback){
		db.helper.GET(tseed.schema,callback);	
	},
	PUT: function(callback){
		db.helper.PUT(tseed.schema,tseed.data.Update, {UserID:"nasihere"}, callback);	
	}

}; 

exports.Registration = function(callback){
	db.helper.POST(tseed.schema,tseed.data.Add,callback);		
	Verify.SMS(PHONENO,CODE);
}

exports.FindUser = function(param, callback){
	db.helper.FIND(tseed.schema,{UserID:param},callback);
}

exports.DeleteUser = function(param, callback){
		db.helper.DELETE(tseed.schema,{UserID:param},callback);	
}
exports.EditUser  =function(param,data, callback){
		db.helper.PUT(tseed.schema,data, {UserID:param}, callback);	
	
}

