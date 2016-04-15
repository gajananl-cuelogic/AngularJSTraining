myApp.provider('credentialProvider', function () {
    this.credentialList = '';
    //To get credential list
    this.$get = function () {
        return {
            getCredential: function () {
                return getEmployeeList();
            }
        }
    };
    //To set credential list 
    this.setName = function () {
        this.credentialList = getCredentialList();
    };
});

function getCredentialList() {
    return [{        
        "email": "nilesh@gmail.com",
        "pw": "12345"
    }, {
        "email": "rishikesh@gmail.com",
        "pw": "12345"
    }, {
        "email": "amey@gmail.com",
        "pw": "12345"
    }
    , {
        "email": "john@gmail.com",
        "pw": "12345"
    }];
}
