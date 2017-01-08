console.log('app.js connected'); //--> yes

//1.
var app = angular.module('MeanApp', []);


//2.
app.controller('mainController', ['$http', function($http){

    var controller = this;
    // this.product = [];

//-------------------------------------------------
    //function to retrieve the list of all products when the page loads (images links)
    $http({
        method: 'GET',
        url: 'http://localhost:3000/products'
    }).then(
        function(response) { //success
            console.log(response.data); //not sure why this is returning undefined because I can see the image links displaying in the index.html?
            controller.allProducts = response.data;
            console.log(response.data.name); //undefined
        },
        function(response) { //failure
            console.log(response);
        }
    );

//-------------------------------------------------
    //set product image link
    this.getProductImage = function(productImage) {
        controller.product = productImage;
        console.log(controller.product); //this returns the whole product as an object
    };

//-------------------------------------------------
    //get product info
    this.getProductInfo = function(product) {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/products/byImage/' + controller.product
        }).then(
            function(response) {
                console.log(response.data);//response.data is returning as empty object
                controller.productInfo = response.data;

                // console.log(info.name);
                // console.log(info.price);
                // console.log(info.description);
         },
         function(response) {
                console.log(response);
         }
        )
    };

//-------------------------------------------------



}]); //--> end of function
