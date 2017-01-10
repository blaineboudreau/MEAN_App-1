console.log('app.js connected'); //--> yes

//1.
var app = angular.module('MeanApp', []);




//2.
app.controller('mainController', ['$http', function($http){

    var controller = this;
    // this.product = [];


//-------------------------------------------------
    //retrieve the list of all products when the page loads (images links)
    $http({
        method: 'GET',
        url: 'http://localhost:3000/products/allProducts'
    }).then(
        function(response) { //success
            console.log(response); //gets the array of objects
            controller.allProducts = response.data;
            console.log(response.data); //returns as object
        },
        function(response) { //failure
            console.log(response);
        }
    );


//-------------------------------------------------
    //get product info / click event
    this.getProductInfo = function(product) {
        // console.log(this, " is this");

        $http({
            method: 'GET',
            url: 'http://localhost:3000/products/byName/' + product
        }).then(
            function(response) {
                console.log(response);
                controller.productInfo = response.data;
                console.log(response.data);//response.data is returning as an empty object

                console.log(product.name);//returning the name of that specific product which is what I want
                console.log(product.price);
                console.log(product.description);

         },
         function(response) {
                console.log(response);
         }
        );
    };

//-------------------------------------------------
    //click event to add to cart
    this.addToCart = function(){

        $http({
            method: 'GET',
            url: 'http://localhost:3000/products/cart'
        }).then(
            function(response) {
                console.log(response);
                console.log('buy button was clicked');
                controller.productInfo = response.data;
         },
         function(response) {
                console.log(response);
         }
        );

    };


}]); //--> end of function

// app.controller('mapController', [function($scope){
// function myMap() {
//   var mapCanvas = document.getElementById("map");
//   var myCenter = new google.maps.LatLng(40.7128,-74.0059);
//   var mapOptions = {center: myCenter, zoom: 5};
//   var map = new google.maps.Map(mapCanvas,mapOptions);
//   var marker = new google.maps.Marker({
//     position: myCenter,
//     icon: "http://buffetsingapore.sg/wp-content/uploads/2015/10/icon-clothing-store.svg"
//   });
//   marker.setMap(map);
//
//   var infowindow = new google.maps.InfoWindow({
//     content: "eTrendy"
//   });
//   infowindow.open(map,marker);
// }
// }]);
// myMap();
