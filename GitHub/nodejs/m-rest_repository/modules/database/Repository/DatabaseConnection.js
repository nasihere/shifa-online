var exports = module.exports = {};
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

 exports.db = mongoose.connect(global.config.mongodb);



 var TableSchema = null;
 var setModal = function(model){
	TableSchema = mongoose.model("Table",model);
 }
 
exports.GET = function(Schema,callback){
 	setModal(Schema);
 	global.log("Get Operation Execute");
 	TableSchema.find({},function(e,doc){
		callback(doc);
	});
 }; 
 exports.FIND = function(Schema,findByParam,callback){
 	setModal(Schema);
 	global.log("Find By Param Operation Execute");
 	TableSchema.find(findByParam,function(e,doc){
		callback(doc);
	});
 };
 exports.POST = function(Schema,data,callback){
	setModal(Schema);
 	global.log("POST Operation Execute");
	var t = new TableSchema(data);

	t.save(function(err,msg){
		if(err){
			console.log(err);
		}
		else{
			callback(msg);
		}

	});	
 };

 exports.DELETE = function(Schema,find_Delete,callback){
	setModal(Schema);
 	global.log("DELETE Operation Execute");
	TableSchema.find(find_Delete).remove(callback);	
 };

 exports.PUT = function(Schema,Data,find_Update,callback){
	setModal(Schema);
 	global.log("PUT  Operation Execute");
	global.log(find_Update);
	TableSchema.findOneAndUpdate(find_Update,Data,function(err,doc){
		if(err){
				console.log(err);
			}
			else{
				callback(doc);
			}

	});
 };
