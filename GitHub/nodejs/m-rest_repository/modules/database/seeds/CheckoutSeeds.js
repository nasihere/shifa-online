var exports = module.exports = {};
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    
var Schema_Checkout = 
	new  mongoose.Schema(
	{ 	
		
		Order:[
			{
		 		Item:String,
			 	Qty:Number,
			 	Price:Number,
			 	Extra:String
			}
		],
		Total:{
			Sub:Number,
			Tax:Number,
			Final:Number,
			Balance:Number
		},
		Note:String,
		OrderType:String,
		ExpectedTime:{
			Day:String,
			Time:String,
			DateTime:Date
		},
		ModeofPayment:String,
		CreditCardInfo:{
			Name:String,
			Address:String,
			Cardno:Number,
			CVV:Number,
			Expirydate:String
		},
		DeliveryAddress:String,
		Status:{
			OrderStatus:String,
			PaymentStatus:String
		},
		UserID:String


});	


var Test_Data = {
	Add : { 	
	
		Order:[
			{
		 		Item:"Onion Pakoras",
			 	Qty:1,
			 	Price:5.25,
			 	Extra:"Spice: Hot"
			},
			{
		 		Item:"Hot Chili Pakoras",
			 	Qty:6,
			 	Price:31.50,
			 	Extra:"Spice: Hot"
			},
			{
		 		Item:"Vada Sambar",
			 	Qty:3,
			 	Price:12.75,
			 	Extra:"Spice: Hot"
			}
		],
		Total:{
			Sub:91.50,
			Tax:8.24,
			Final:99.74
		},
		Note:"kXBajdaJDGjdvjDV",
		OrderType:"Pickup",
		ExpectedTime:{
			Day:"Mon Aug 24th",
			Time:"11 Am",
			DateTime:Date.now()
		},
		ModeofPayment:"CreditCard",
		CreditCardInfo:{
			Name:"Uttam",
			Address:"Ahmedabad",
			Cardno:"5656565656565",
			CVV:"567",
			Expirydate:"06/2020"
		},
		DeliveryAddress:"Jay mangal,Ahmedabad",
		Status:{
			OrderStatus:"Pending",
			PaymentStatus:"Complete"
		},
		UserID:"nasihere"
	

		
	},
	Update : {
		
	}
};
exports.schema = Schema_Checkout ; 
exports.data = Test_Data; 


