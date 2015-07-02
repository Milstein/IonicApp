//app.constant("baseAddress", "http://localhost:56853/");
app.constant("baseAddress", "http://app.dotnettricks.io/");

app.service("userService", function ($http, baseAddress) {
    return {
        loginUser: function (user) {
            var data = { Username: user.username, Password: user.password };
            serviceUrl = baseAddress + "UserService/LoginUser";
            return $http.post(serviceUrl, data);
        },
        SignupUser: function (user) {
            serviceUrl = baseAddress + "UserService/UserSignUp";
            return $http.post(serviceUrl, user);
        }
    }
});

app.service("customerService", function ($http, baseAddress) {
    return {
        GetCustomers: function () {
            serviceUrl = baseAddress + "CustomerService/GetCustomers";
            return $http.get(serviceUrl);
        },
        GetCustomer: function (id) {
            serviceUrl = baseAddress + "CustomerService/GetCustomer/" + id;
            return $http.get(serviceUrl);
        },
        AddCustomer: function (customer) {
            serviceUrl = baseAddress + "CustomerService/AddCustomer";
            return $http.post(serviceUrl, customer);
        },
        DeleteCustomer: function (customer) {
            serviceUrl = baseAddress + "CustomerService/DeleteCustomer/" + customer.CustomerId;
            return $http.delete(serviceUrl);
        },
        UpdateCustomer: function (customer) {
            serviceUrl = baseAddress + "CustomerService/UpdateCustomer/" + customer.CustomerId;
            return $http.put(serviceUrl, customer);
        }
    };
});