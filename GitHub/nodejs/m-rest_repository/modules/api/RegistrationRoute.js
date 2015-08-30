var express = require('express');
var router  = express.Router();

var BLL = require(global.config.__base + 'modules/BLL/RegistrationBll');


router.post('/User', function (req, res) {
   BLL.Registration(function(data){
    	res.send(data);
    });
});


router.get('/User/:UserID', function (req, res) {
   BLL.FindUser(req.params.UserID, function(data){
    	res.send(data);
    });
});



router.delete('/User/:UserID', function (req, res) {
   BLL.DeleteUser(req.params.UserID, function(data){
    	res.send(data);
    });
});

router.put('/User/:UserID', function (req, res) {
	console.log(req.body);
   //BLL.EditUser(req.params.UserID, req.body.data, function(data){
   // 	res.send(data);
   // });
res.send(req);
});



var exports = module.exports = {};
exports.router = router;