console.log('app.js connected'); //--> yes

//1.
var app = angular.module('MeanApp', []);


//2.
app.controller('mainController', ['$http', function($http){

    $http({
        method: 'GET',
        url: 'http://localhost:3000'
    }).then(
        function(response){
            console.log(response);
        },
        function(response){
            console.log(response);
        }
    );


}]);
