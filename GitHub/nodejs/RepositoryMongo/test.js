global.config = require("./app.config.js");
var TDD_DB_Registration = require('./modules/TDD/database_registration');
var TDD_Database = require('./modules/TDD/database_test');
var TDD_DB_Restaurant = require('./modules/TDD/database_restaurant');
var TDD_DB_Checkout = require('./modules/TDD/database_checkout');
//TDD_Database.RunTest();
TDD_DB_Registration.RunTest();
//TDD_DB_Checkout.RunTest();

//TDD_DB_Restaurant.RunTest();