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
});


//get all product images
// router.get('/uniqueProducts', function(req, res) {
//     Product.find(function(err, uniqueProducts) {
// 		res.send(uniqueProducts);
// 	});
//     // res.send('unique products'); //-->working
// });


//get the info of that specific product
// router.get('/byName/:name', function(req, res) {
// 	Product.find({ product: req.params.data }, function(err, productInfo) {
// 		res.send(productInfo);
//         console.log(req.params.data);
// 	});
// });



//1.
module.exports = router;
