console.log('app.js connected'); //--> yes

//1.
var app = angular.module('MeanApp', []);


//2.
app.controller('mainController', ['$http', function($http){

    var controller = this;
    this.product = 'product';

//-------------------------------------------------
    //function to retrieve the list of all products when the page loads
    $http({
        method: 'GET',
        url: 'http://localhost:3000/products'
    }).then(
        function(response) { //success
            console.log(response.data);
            controller.allProducts = response.data;
            console.log(response.data.image);
        },
        function(response) { //failure
            console.log(response);
        }
    );

//-------------------------------------------------



//-------------------------------------------------







}]); //--> end of function
