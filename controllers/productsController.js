//1.
var express = require('express');
var router = express.Router();

var Product = require('../models/products.js');


//2. INDEX
// '/' is the same as '/products' and it gets me to the products in json
router.get('/', function(req, res) {
    Product.find(function(err, data) {
		res.send(data);
	});
    // res.send('foods index'); //--> working
}); //--> ok


//3. GET ROUTE
//to get all the products
router.get('/products', function(req, res) {
	Product.find('product', function(err, productImage) {
		res.send(productImage);
	});
});


//4. GET ROUTE
//gets all images links that match the product name sent through the URI
router.get('/byImage/:name', function(req, res) {
	Product.find({ product: req.params.name }, function(err, info) {
		res.send(info);
	});
});



//1.
module.exports = router;
