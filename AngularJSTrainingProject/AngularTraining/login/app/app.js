'use strict';

// Declare app level module which depends on views, and components
angular.module('tandem', [
  'ngRoute',
  'user'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
           when('/login', {
               templateUrl: 'app/user/views/login.html',
               controller: 'userCtrl'
           }).
           when('/home', {
               templateUrl: 'app/user/views/home.html',
               controller: 'userCtrl'
           }).
           otherwise({
               redirectTo: '/'
           });
}]);
