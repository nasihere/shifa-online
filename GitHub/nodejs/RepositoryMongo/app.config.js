var exports = module.exports = {};
exports.__base = __dirname + '/';
exports.mongodb = "mongodb://localhost/db";

global.log = function(data){
	console.log("---------------------------------------------------");
	console.log(data);

	console.log("---------------------------------------------------");
}
