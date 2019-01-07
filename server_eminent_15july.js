// BASE SETUP
// =============================================================================

// call the packages we need- import
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');
var request = require('request');
var path = require('path');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 80; // set our port



// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests- filter
router.use(function(req, res, next) {
	app.use(express.static(path.join(__dirname, '/')));
	
	// do logging
	console.log('Something is happening.');
	var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
	console.log("IP "+ip);
	var data = {ip: ip, browser: req.headers['user-agent']};
    console.log("request came");
    console.log("ser-Agent: " + req.headers['user-agent']);	
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

    
router.get('/', function(req, res) {
	res.sendFile(__dirname+"/index.html");
	 
});

/*router.post('/', function(req, res) {
	
	res.json({ message: 'hooray! welcome to our api post!' });	
});
*/
// REGISTER OUR ROUTES -------------------------------
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
module.exports = app;
