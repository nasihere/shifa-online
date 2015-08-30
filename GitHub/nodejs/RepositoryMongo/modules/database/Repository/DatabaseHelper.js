var exports = module.exports = {};
var db = require(global.config.__base + "modules/database/Repository/DatabaseConnection.js");



exports.cb_helper = null;
exports.data = null;


var Rest = {
	GET: function(Schema,callback){
		db.GET(Schema,callback);
	},
	FIND: function(Schema,FindByParam,callback){
		db.FIND(Schema,FindByParam,callback);
	},
	POST: function(Schema, Data,callback){
		db.POST(Schema, Data,callback);
	},
	PUT: function(Schema, Data, _Id,callback){
		db.PUT(Schema, Data,_Id, callback);
	},
	DELETE: function(Schema, _Id,callback){
		db.DELETE(Schema, _Id, callback);
	}

};

exports.helper = Rest;