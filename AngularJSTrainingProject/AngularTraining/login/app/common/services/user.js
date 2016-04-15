angular.module('user.service',[])
       .service('userService',[userService]);

function userService() {
    var service = {};
    service.get = get;
    return service;

    function get() {
        return [{
            "fullname": "Nilesh",
            "address": "pune",
            "email": "nilesh@gmail.com",
            "age": "23",    
            "gender": "male",
            "education": "BE",
            "pw": "12345"
        }, {
            "fullname": "Rishikesh",
            "address": "nashik",
            "email": "rishikesh@gmail.com",
            "age": "21",
            "gender": "male",
            "education": "ME",
            "pw": "12345"
        }, {
            "fullname": "Amey",
            "address": "pune",
            "email": "amey@gmail.com",
            "age": "25",
            "gender": "male",
            "education": "MBA",
            "pw": "12345"
        }
        , {
            "fullname": "John",
            "address": "nagpur",
            "email": "john@gmail.com",
            "age": "22",
            "gender": "male",
            "education": "MSC",
            "pw": "12345"
        }];
    }    
};

