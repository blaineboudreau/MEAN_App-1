//1.
var express = require('express');
var router = express.Router();

var Product = require('../models/products.js');


//2. INDEX
router.get('/', function(req, res) {
    Product.find(function(err, data) {
		res.send(data);
	});
    // res.send('foods index'); //--> working
})




//1.
module.exports = router;
