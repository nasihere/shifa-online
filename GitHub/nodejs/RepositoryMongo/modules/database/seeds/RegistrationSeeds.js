var exports = module.exports = {};
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    
var Schema_UserRegistration = 
	new  mongoose.Schema(
{ 	
		Contact:{
	 		Name:String,
		 	Address:String,
		 	Phone:String,
		 	Email:String
		 },
		Verify:{
			Phone:Boolean,
			Email:Boolean,
			SMS:Boolean		
		},
		DateTime:{
			Registration:Date,
			LastVisit:Date,
			Modified:Date,
			LastOrder:Date
		},
		FacebookID:String,
		GoogleID:String,
		UserID:String
	
});	


var Test_Data = {
	Add : { 	
		Contact:{
	 		Name:"Nasir Sayed",
		 	Address:"3205 Northwood Dr #111, Concord CA - 94520",
		 	Phone:"323-300-4756",
		 	Email:"nasihere@gmail.com"
		 },
		Verify:{
			Phone:true,
			Email:true,
			SMS:true		
		},
		DateTime:{
			Registration:Date.now(),
			LastVisit:Date.now(),
			Modified:Date.now(),
			LastOrder:Date.now()
		},
		FacebookID:"",
		GoogleID:"",
		UserID:"nasihere"
	
	},
	Update : {
		Contact:{
	 		Name:"Uttam Solanki",
		 	Address:"Gujrat",
		 	Phone:"+91 9773657443",
		 	Email:"Uttamsolanki@gmail.com"
		 },
		Verify:{
			Phone:true,
			Email:true,
			SMS:true		
		},
		DateTime:{
			Registration:Date.now(),
			LastVisit:Date.now(),
			Modified:Date.now(),
			LastOrder:Date.now()
		},
		FacebookID:"",
		GoogleID:"",
		UserID:"uttamhere"
	
	}
};
exports.schema = Schema_UserRegistration; 
exports.data = Test_Data; 


