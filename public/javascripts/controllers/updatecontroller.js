var app = angular.module('CoffeeWebApp');

app.controller('updateController', ['$scope', '$location', '$http', '$routeParams',function($scope, $location, $http, $routeParams) {
    var id = $routeParams.id;
    $scope.formData = {};


    $scope.updateCoffee = function(){


        $http.put('/coffees/'+ id, $scope.formData)
            .success(function(data) {

                $location.path('/coffees');
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };


}

]);
