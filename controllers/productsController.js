//1.
var express = require('express');
var router = express.Router();

var Product = require('../models/products.js');


//2. INDEX
router.get('/', function(req, res) {
    // Foods.find({}, function(err, allFoods){
    //     res.json(allFoods);
    // });
    res.send('foods index');
})




//1.
module.exports = router;
