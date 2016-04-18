var app = angular.module('CoffeeWebApp');

app.controller('coffeesController', ['$scope','$http', '$location',function($scope, $http, $location) {
    // create a message to display in our view
    $scope.message = 'Coffee Page!';

    findAll();

    function findAll() {
        $http.get('/coffees')
            .success(function (data) {
                $scope.coffees = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    $scope.update = function(coffee) {

        console.log(coffee);
        $location.path('/update/'+coffee._id);


        }


    $scope.incrementUpvotes = function(id){
          $http.put('/coffees/' + id + '/votes')
            .success(function(data) {
                console.log(data);
                findAll();
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
          }

    $scope.delete = function(id) {
      if (confirm("Are you sure you want to delete this Coffee?")) {
              console.log('Deleting id : ' + id);
        $http.delete('/coffees/' + id)
            .success(function(data) {
                console.log(data);
                findAll();
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
          }
    };
  
  }
  ]);
