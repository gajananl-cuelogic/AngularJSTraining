angular.module('login.service', ['services', 'provider'])
      .service('loginService', ['employeeProvider','credentialProvider', loginService])

//login service to authenticate user
function loginService(employeeProvider, credentialProvider) {
    var service = {};
    service.login = login;
    return service; 

    function login(userEmail, password) {
        var loginMessage = "Login Fail";
        angular.forEach(credentialProvider.getCredential(), function (value, key) {
            if (value.email === userEmail && (value.pw === password)) {
                return loginMessage = value.fullname;
            }
        });
        return loginMessage;
    }
};