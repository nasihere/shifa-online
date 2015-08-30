var BLL = require(global.config.__base + 'modules/BLL/RegistrationBll');


router.get('/', function (req, res) {
    BLL.Registration(function(data){
    	res.send(data);
    });
});


app.use('/Login/v1', router);



var exports = module.exports = {};
exports.app = app;