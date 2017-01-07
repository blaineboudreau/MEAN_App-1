//1. DEPENDENCIES
//require express, mongoose and body-parser after they have been installed
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// 2. CONFIGURATION
var app = express();
//to check if the connection on localhost:3000 is working
// app.get('/', function(req, res){
//     res.send('working')
// }); //--> yes, it is working


// 5. DATABASE
mongoose.connect('mongodb://localhost/27017/mean');


// 6. CONTROLLERS





// 4. MIDDLEWARE
app.use(express.static('public'));
app.use(bodyParser.json());


//3. LISTENER
app.listen(3000, function() {
    console.log('mean app is listening');
});
