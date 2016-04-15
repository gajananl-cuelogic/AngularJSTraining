angular.module('user.controller', ['services', 'provider'])
      .controller('userCtrl', ['$rootScope', '$scope', 'loginService', 'employeeProvider', UserController])

function UserController($rootScope, $scope , loginService, employeeProvider) {
    if (getLocalStorage() == undefined) {
        window.location = '#/login';
    }

    $scope.users = employeeProvider.getEmployee();
    $scope.userEmail = "";
    $scope.password = "";
    $scope.fullName = function () {
        var message = '';
        if ($scope.userEmail == undefined || $scope.password == undefined) {
            return "User name or password is Empty";
        }
    };
    
    $scope.loginMessage = "";
    $scope.user = getLocalStorage();
    $scope.login = function () {
        $scope.loginMessage = loginService.login($scope.userEmail, $scope.password);
        if ($scope.loginMessage !== 'Login Fail') {
            localStorage.user = 'Welcome ' + $scope.loginMessage;
            $rootScope.user = 'Welcome ' + $scope.loginMessage;
            $rootScope.loginMessage = getLocalStorage();
            window.location = '#/home';
        } else { $scope.isValid = true; }
    }
};

function getLocalStorage()
{
    return localStorage.user;
}