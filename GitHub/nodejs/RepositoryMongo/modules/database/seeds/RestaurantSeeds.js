var exports = module.exports = {};
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    
var Schema_Restaurant = 
	new  mongoose.Schema(
{ 	
		Contact:{
	 		Name:String,
		 	Address:String,
		 	Phone:String,
		 	Email:String,
		 	WebSite:String

		 },
		Info:{
			Establishment:Date,
			Description:String

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
		UserID:String,
	
		Map:{
			lat: Number,
			lng: Number
		},
		Time:{
			Sun:String,
			Mon:String,
			Tue:String,
			Wed:String,
			Thur:String,
			Fri:String,
			Sat:String
		},
		PriceRange:String,
	
		Pictures:{
			Logo:String,
			Banner:String,
			Gallery:Array			
		},
		MoreBusinessInfo:{
			Takes_Reservations: String,
			Delivery: String,
			Take_out: String,
			Accepts_Credit_Cards:String,
			Good_For: String,
			Parking: String,
			Bike_Parking: String,
			Wheelchair_Accessible: String,
			Good_for_Kids: String,
			Good_for_Groups: String,
			Attire_Casual: String,
			Ambience_Casual: String,
			Noise_Level_Quiet: String,
			Alcohol_Beer_Wine_Only: String,
			Outdoor_Seating: String,
			Wi_Fi: String,
			Has_TV: String,
			Waiter_Service: String,
			Caters: String,
			Restroom: String
		},
		BrowseNearBy:Array,
		Menus:{
			Category: [
				{
					Name: String,
					Menu: []
					
				}
			]
		
		}

});	


var Test_Data = {
	Add : { 	
		Contact:{
	 		Name:"Swagat Indian Cuisine ",
		 	Address:"1901 Salvio St Concord, CA 94520",
		 	Phone:"(925) 685-2777",
		 	Email:"eat@Swagat.com",
		 	WebSite:"http://swagat.com"

		 },
		Info:{
			Establishment:"01/10/1992",
			Description:"South Indian: Dosas, Idli, Vada, many more other south indian dishes North Indian Dishes Lunch Buffet 7 Days a week Dinner Buffet Friday and Saturday",

		},
		Verify:{
			Phone:"Yes",
			Email:"Yes",
			SMS:"Yes"		
		},
		DateTime:{
			Registration:Date.now(),
			LastVisit:Date.now(),
			Modified:Date.now(),
			LastOrder:Date.now()
		},
		FacebookID:"",
		GoogleID:"",
		UserID:"nasihere",
	
		Map:{
			lat: 37.9765098,
			lng: -122.0372935
		},
		Time:{
			Sun:"11:00 am - 3:00 pm / 5:00 pm - 9:30 pm",
			Mon:"11:00 am - 3:00 pm / 5:00 pm - 9:30 pm",
			Tue:"11:00 am - 3:00 pm / 5:00 pm - 9:30 pm",
			Wed:"11:00 am - 3:00 pm / 5:00 pm - 9:30 pm",
			Thur:"11:00 am - 3:00 pm / 5:00 pm - 9:30 pm",
			Fri:"11:00 am - 3:00 pm / 5:00 pm - 9:30 pm",
			Sat:"11:00 am - 3:00 pm / 5:00 pm - 9:30 pm"
		},
		PriceRange:"$11-30",
	
		Pictures:{
			Logo:"http://s3-media3.fl.yelpcdn.com/bphoto/45ByvC4zD5MEIR7C7O90zw/ls.jpg",
			Banner:"http://s3-media4.fl.yelpcdn.com/bphoto/z0XQYRbEySTGZuj2aESDjw/258s.jpg",
			Gallery:[
				{
					Title:"Biryani Hot & Spicy",
					picture: "http://s3-media1.fl.yelpcdn.com/bphoto/WAbFeHEGacIYR-BOlHy16w/258s.jpg"
				},
				{
					Title:"Mutton Hot & Spicy",
					picture: "http://s3-media1.fl.yelpcdn.com/bphoto/kxym62GIZ-CLXM3J4OLovA/258s.jpg"
				},
				{
					Title:"Veg Hot & Spicy",
					picture:"http://s3-media2.fl.yelpcdn.com/bphoto/ElXZvy19SnalbjbbEnIRnQ/258s.jpg"
				},
				{
					Title:"Coke Hot & Spicy",
					picture: "http://s3-media1.fl.yelpcdn.com/bphoto/_mm0Q2KBGtiKdHH_Jmu8Tg/258s.jpg"
				},
				{
					Title:"Table Hot & Spicy",
					picture:"http://s3-media2.fl.yelpcdn.com/bphoto/CEbbQxlLwCrQBZIEKwVdbQ/258s.jpg"
				}
			]
				
				
		},
		MoreBusinessInfo:{
			Takes_Reservations: "Yes",
			Delivery: "Yes",
			Take_out: "Yes",
			Accepts_Credit_Cards:"No",
			Good_For: "Lunch",
			Parking: "Street",
			Bike_Parking: "Yes",
			Wheelchair_Accessible: "No",
			Good_for_Kids: "Yes",
			Good_for_Groups: "Yes",
			Attire_Casual: "Yes",
			Ambience_Casual: "Yes",
			Noise_Level_Quiet: "Yes",
			Alcohol_Beer_Wine_Only: "Yes",
			Outdoor_Seating: "Yes",
			Wi_Fi: "Yes",
			Has_TV: "Yes",
			Waiter_Service: "Yes",
			Caters: "Yes",
			Restroom: "Yes"
		},
		BrowseNearBy:[
			{ url: "http://abc.com",
				Name:"Restaurants"
			},
			{ url: "http://Shopping.com",
				Name:"Shopping"
			}
		],
		Menus:{
			Category: [
				{
					Name: "Drink",
					Menu: [
						{
							Item:"Coke",
							Picture:"http://s3-media1.fl.yelpcdn.com/bphoto/WAbFeHEGacIYR-BOlHy16w/258s.jpg",
							Price:"35.00",
							Size:{
								Small:"10.00",
								Medium:"15.00",
								Large:"35.00"
							},
							Spice:{
								Hot:"Yes",
								Medium:"No",
								Regular:"No"
							}
						},
						{
							Item:"Lassi",
							Picture:"http://s3-media1.fl.yelpcdn.com/bphoto/WAbFeHEGacIYR-BOlHy16w/258s.jpg",
							Price:"2.50",
							Size:{
								Small:"1.00",
								Medium:"1.50",
								Large:"2.50"
							}
						},
						{
							Item:"Coffee",
							Price:"2.50",
							Size:{
								Small:"1.00",
								Medium:"1.50",
								Large:"2.50"
							}
						}
					]
					
				},

				{
						Name: "Non-Vegetarian Entrees",
						Menu: [
						{
							Item:"Chicken Curry	",
							Picture:"http://s3-media1.fl.yelpcdn.com/bphoto/WAbFeHEGacIYR-BOlHy16w/258s.jpg",
							Price:"11.90",
							Spice:{
								Spicy:"Yes",
								Medium:"No",
								VerySpicy:"No",
								Mild:"No"
							}
						},
						{
							Item:"Chicken Karai",
							Picture:"http://s3-media1.fl.yelpcdn.com/bphoto/WAbFeHEGacIYR-BOlHy16w/258s.jpg",
							Price:"12.50",
							Spice:{
								Hot:"Yes",
								Medium:"No",
								Regular:"No"
							}
						},
						{
							Item:"Chicken Karai",
							Price:"12.50",
							Spice:{
								Hot:"Yes",
								Medium:"No",
								Regular:"No"
							}
						}
					]
				}


			]
		
		}
	},
	Update : {
		
	}
};
exports.schema = Schema_Restaurant; 
exports.data = Test_Data; 


