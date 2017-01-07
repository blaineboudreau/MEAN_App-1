console.log('app.js connected'); //--> yes

//1.
var app = angular.module('MeanApp', []);


//2.
app.controller('mainController', ['$http', function($http){
    var controller = this;

//-------------------------------------------------
    $http({
        method: 'GET',
        url: 'http://localhost:3000/'
    }).then(
        function(response){
            console.log(response);
        },
        function(response){
            console.log(response);
        }
    );

//-------------------------------------------------
    //making an ajax request to find the images of the products
    $http({
        method: 'GET',
        url: 'http://localhost:3000/products/uniqueProducts'
    }).then(
        function(response){
            console.log(response);
            controller.find = response.data;
            console.log(response.data);
        },
        function(response){
            console.log(response);
        }
    );


}]);
