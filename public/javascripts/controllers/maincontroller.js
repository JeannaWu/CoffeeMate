var app = angular.module('CoffeeWebApp');


app.controller('mainController', ['$scope', function($scope) {
    // create a message to display in our view
      $scope.message = 'CoffeeMate Web App';
     }
  ]);
