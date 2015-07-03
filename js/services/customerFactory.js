app.factory('customerFactory', function ($http) {
    return {
        getCustomers: function (page, pageSize) {
            serviceUrl = baseAddress + "CustomerService/GetCustomers/?page=" + page + "&pageSize=" + pageSize;
            return $http.get(serviceUrl);
        },
        getCustomer: function (id) {
            serviceUrl = baseAddress + "CustomerService/GetCustomer/" + id;
            return $http.get(serviceUrl);
        },
        addCustomer: function (customer) {
            serviceUrl = baseAddress + "CustomerService/AddCustomer";
            return $http.post(serviceUrl, customer);
        },
        deleteCustomer: function (customer) {
            serviceUrl = baseAddress + "CustomerService/DeleteCustomer/" + customer.CustomerId;
            return $http.get(serviceUrl);
        },
        updateCustomer: function (customer) {
            serviceUrl = baseAddress + "CustomerService/UpdateCustomer";
            return $http.post(serviceUrl, customer);
        }
    };
});
