var exports = module.exports = {};
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    
var Schema_Test = 
	new  mongoose.Schema({
	    UserID    : String,
	    content    : String,
	    updated_at : Date
	});	


var Test_Data = {
	test : {
		UserID:"nasihere",
		content:"email@gmail.com",
		updated_at : Date.now()
	},
	update : {
		UserID:"nasihere",
		content:"nasihere@gmail.com",
		updated_at : Date.now()
	}
};
exports.schema = Schema_Test; 
exports.data = Test_Data; 