// BASE SETUP

var express 		= require('express');
var bodyParser 	= require('body-parser');
var app 				= express(); 

var mongoose 		= require('mongoose'); 
mongoose.connect('mongodb://localhost/blah'); 

var Bear 				= require('./app/models/bear.js')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

var port 				= process.env.PORT || 8080; 

// ROUTES for API
var router 			= express.Router(); // get an instance of the Express Router

// middleware used for testing
router.use(function(req, res, next) {
	console.log('somethin b happenin');
	next(); // app would stop at this middleware if it didn't call next
})

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api' });
});

// bear routing
router.route('/bears')

	// POST to create a bear
	.post(function(req, res) {
		var bear = new Bear();
		bear.name = req.body.name;

		// save the bear
		bear.save(function(err) {
			if (err) 
				res.send(err);

			res.json({ message: 'Bear created!' });
		});
	})

	.get(function(req, res) {
		Bear.find(function(err, bears) {
			if (err) 
				res.send(err);

			res.json(bears);
		})
	})

router.route('/bears/:bear_id')

	// get the bear with that id
	.get(function(req, res) {
		Bear.findById(req.params.bear_id, function(err, bear) {
			if (err)
				res.send(err);
			res.json(bear);
		});
	})

	// update the bear with this id
	.put(function(req, res) {
		Bear.findById(req.params.bear_id, function(err, bear) {

			if (err)
				res.send(err);

			bear.name = req.body.name;
			bear.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Bear updated!' });
			});

		});
	})


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api e.g. localhost:8080/api is the index
app.use('/api', router); 

// START THE SERVER
app.listen(port);
console.log('magic happening on port ' + port);