console.log('app.js connected'); //--> yes

//1.
var app = angular.module('MeanApp', []);


//2.
app.controller('mainController', ['$http', function($http){

    this.product = [];

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
            controller.images = response.data;
        },
        function(response){
            console.log(response);
        }
    );

//-------------------------------------------------
    //click event
    this.find = function(product){
        $http({
            method: 'GET',
            url: 'http://localhost:3000/products/byName/'+ product,
        }).then(
            function(response){
                console.log(response);
                controller.product = response.data;
                console.log(response.data); //this is returning undefined
                console.log(product.name);
                console.log(product.price);
                console.log(product.description);

            },
            function(response){
                console.log(response);
            }
        );
    }





}]); //--> end of function
