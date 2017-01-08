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





//1.
module.exports = router;
