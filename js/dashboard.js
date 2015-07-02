app.controller("dashboardCtrl", function ($scope, customerService, $state) {
    $scope.customers = [];

    //get all Customers
    $scope.getAll = function () {
        customerService.GetCustomers().success(function (data) {
            console.log(data);
            $scope.customers = data;
        }).error(function (data) {
            $scope.error = "An Error has occured while Loading customers! " + data.ExceptionMessage;
        });
    };

    // add Customer
    $scope.add = function (customer) {

        if (customer != null && customer.name != null && customer.address && customer.contactno) {
            customerService.AddCustomer(customer).success(function (data) {
                //reset form
                $scope.customer = null;
                // go to view
                $state.go('dashboard.home', { reload: true });
            }).error(function (data) {
                $scope.error = "An Error has occured while Adding customer! " + data.ExceptionMessage;
            });
        }
    };

    $scope.cancel = function () {
        // go to view
        $state.go('dashboard.home');
    };

    $scope.getAll();
});