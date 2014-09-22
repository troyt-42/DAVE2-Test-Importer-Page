'use strict';

var MyApp = angular.module('MyApp', [
  'ngRoute',
  'MyAppServices',
  'MyApp.directives',
  'MyApp.controllers'
  ]);

MyApp.config(function ($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider.when('/home', {templateUrl: 'app/views/home.htm', controller: 'home'});
  $routeProvider.when('/one', {templateUrl: 'app/views/one.htm', controller: 'one'});
  $routeProvider.when('/two', {templateUrl: 'app/views/two.htm', controller: 'two'});
  $routeProvider.when('/three', {templateUrl: 'app/views/three.htm', controller: 'three'});
  $routeProvider.when('/four', {templateUrl: 'app/views/four.htm', controller: 'four'});
  $routeProvider.when('/five', {templateUrl: 'app/views/five.htm', controller: 'five'});
  $routeProvider.when('/six', {templateUrl: 'app/views/six.htm', controller: 'six'});
  $routeProvider.when('/seven', {templateUrl: 'app/views/seven.htm', controller: 'seven'});
  $routeProvider.when('/eight', {templateUrl: 'app/views/eight.htm', controller: 'eight'});
  $routeProvider.when('/nine', {templateUrl: 'app/views/nine.htm', controller: 'nine'});
  $routeProvider.when('/ten', {templateUrl: 'app/views/ten.htm', controller: 'ten'});
  $routeProvider.when('/detail', {templateUrl: 'app/views/partials/dataItemDetails.html', controller: 'dataItemDetailController'});
  $routeProvider.otherwise({redirectTo: '/home'});

});

MyApp.controller('dataItemDisplayController', ['dataItem', '$scope', function(dataItem, $scope){
  $scope.data = dataItem.get();
  $scope.createFilter = function(field){
    if (field) { $scope.filter[$scope.length] = field;
      console.log($scope.filter)};
    }
    $scope.applyFilter = function(){

    }
  }]);

MyApp.controller('dataItemDetailController', ['dataItemDetail', '$scope',function (dataItemDetail, $scope) {
  $scope.data = dataItemDetail.get();
  console.log($scope.data);
  $scope.date = function(timestamp){
    console.log(timestamp);
    var year = timestamp.substring(0,4);
    if (timestamp[6] === ' ') {
      var month = timestamp.substring(5,6); 
      if (timestamp[8] === ' ') {
        var day = timestamp.substring(7,8);
      } else {
        var day = timestamp.substring(7,9); 
      };
    } else {
      var month = timestamp.substring(5,7);
      if (timestamp[9] === ' ') {
        var day = timestamp.substring(8,9);
      } else {
        var day = timestamp.substring(8,10);
      }; 
    };
    console.log(year);
    console.log(month);
    console.log(day);
    var time = (year.valueOf() - 1970) * (3600 * 24 * 365 * 1000)+ month.valueOf() * (3600 * 24 * 30 * 1000) + day.valueOf() * (3600 * 24 * 1000);
    console.log(time);
    return time;

    
  }
}]);