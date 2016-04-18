var app = angular.module('CoffeeWebApp');

app.controller('coffeeController', ['$scope', '$location', '$http', function($scope, $location, $http) {
    
    $scope.formData = {};

    $scope.message = 'Enter Your Coffee Details Below...';
    $scope.amount = 0;
    $scope.name = [];
    $scope.shop = [];

    $scope.formData.name = '';
    $scope.formData.shop = '';
    $scope.formData.amount = 0;
    $scope.formData.upvotes = 0;

    $scope.addCoffee = function(){
       $http.post('/coffees', $scope.formData)
            .success(function(data) {
                $scope.coffees = data;
                $location.path('/coffees');
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
              });
            };


    }

  ]);
