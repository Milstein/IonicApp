app.factory('userFactory', function ($http) {
    return {
        loginUser: function (user) {
            var data = { Username: user.username, Password: user.password };
            serviceUrl = baseAddress + "UserService/LoginUser";
            return $http.post(serviceUrl,data);
        },
        userSignUp: function (user) {
            //var data = { Username: user.username, Password: user.password };
            serviceUrl = baseAddress + "UserService/UserSignUp";
            return $http.post(serviceUrl, user);
        }
    };
});
