angular.module('user.route', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'app/user/views/login.html',
    controller: 'userCtrl'
  });
}]);