var mongoose = require( 'mongoose' );
var Schema   = ;
 
var Table = mongoose.Schema({
    user_id    : String,
    content    : String,
    updated_at : Date
});
 
mongoose.model( 'Table', Table );
mongoose.connect( 'mongodb://localhost/myapp' );