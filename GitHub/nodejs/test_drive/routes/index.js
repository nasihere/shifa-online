var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );


var TableScehma = new  mongoose.Schema({
    username    : String,
    email    : String,
    updated_at : Date
});

var Table  = mongoose.model( 'Table',TableScehma );
mongoose.connect( 'mongodb://localhost' );
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/newuser',function(req,res){

	Table.find({},function(e,doc){
		res.render('newuser',{title:'Add User'});
		//res.json(doc);
	});
});

router.post('/adduser',function(req,res){
	var t = new Table({
		username:req.body.username,
		email:req.body.useremail,
		updated_at : Date.now()
	});

	t.save(function(err,msg){
		if(err)
			console.log(err);
		else
		res.redirect('/userlist');
	});
})


router.get('/userlist',function(req,res){

	Table.find({},function(e,doc){
		res.render('userlist',{'userlist':doc});
		//res.json(doc);
	});
});



module.exports = router;
