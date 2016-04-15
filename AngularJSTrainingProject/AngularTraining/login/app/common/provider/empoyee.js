var myApp = angular.module('provider', []);

myApp.provider('employeeProvider', function () {
    this.EmployeeList = '';
    //To get employee list
    this.$get = function () {
        return {
            getEmployee: function () {
                return getEmployeeList();
            }
        }
    };
    //To set employee list 
    this.setName = function () {
        this.EmployeeList = getEmployeeList();
    };
});


function getEmployeeList() {
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
