var express = require('express');
var router = express.Router();

var Product = require('../models/products.js');


var productInfo = [
    {
        name: "Black T-Shirt",
        image: "http://image.flaticon.com/icons/png/128/44/44255.png",
        price: 10,
        description: "This is a shirt... Lorem ipsum dolor sit amet, id sed sonet maluisset, ut sea viris accommodare, omnes laudem iriure sed eu. Recteque mediocrem vel et, an qui tempor electram, dicunt alterum quo ea. Melius oportere quo id, vel ei scripta utroque.",

    },
    {
        name: "Black Dress",
        image: "https://cdn4.iconfinder.com/data/icons/dress-2/60/long_dress_1-512.png",
        price: 50,
        description: "This is a dress... Lorem ipsum dolor sit amet, id sed sonet maluisset, ut sea viris accommodare, omnes laudem iriure sed eu. Recteque mediocrem vel et, an qui tempor electram, dicunt alterum quo ea. Melius oportere quo id, vel ei scripta utroque.",

    },
    {
        name: "Black Bag",
        image: "http://simpleicon.com/wp-content/uploads/bag-8.png",
        price: 80,
        description: "This is a bag... Lorem ipsum dolor sit amet, id sed sonet maluisset, ut sea viris accommodare, omnes laudem iriure sed eu. Recteque mediocrem vel et, an qui tempor electram, dicunt alterum quo ea. Melius oportere quo id, vel ei scripta utroque.",

    },
    {
        name: "other item 1",
        image: "http://simpleicon.com/wp-content/uploads/bag-8.png",
        price: 30,
        description: "This is a bag... Lorem ipsum dolor sit amet, id sed sonet maluisset, ut sea viris accommodare, omnes laudem iriure sed eu. Recteque mediocrem vel et, an qui tempor electram, dicunt alterum quo ea. Melius oportere quo id, vel ei scripta utroque.",

    },
    {
        name: "other item 2",
        image: "http://simpleicon.com/wp-content/uploads/bag-8.png",
        price: 15,
        description: "This is a bag... Lorem ipsum dolor sit amet, id sed sonet maluisset, ut sea viris accommodare, omnes laudem iriure sed eu. Recteque mediocrem vel et, an qui tempor electram, dicunt alterum quo ea. Melius oportere quo id, vel ei scripta utroque.",

    },
    {
        name: "other item 3",
        image: "http://simpleicon.com/wp-content/uploads/bag-8.png",
        price: 25,
        description: "This is a bag... Lorem ipsum dolor sit amet, id sed sonet maluisset, ut sea viris accommodare, omnes laudem iriure sed eu. Recteque mediocrem vel et, an qui tempor electram, dicunt alterum quo ea. Melius oportere quo id, vel ei scripta utroque.",

    },
];

router.get('/', function(req, res) {
	Product.create(productInfo, function(err) {
		if (err) {
			console.log(err);
			res.send('Error seeding database');
		} else {
			console.log('SEED EXECUTED');
			res.redirect('/') //this is to see the items in json
		}
	});
});



module.exports = router;
