app.controller('addCustomerCtrl', function (customerFactory, $scope, $state) {
    // add Customer
    $scope.add = function (customer) {
        $scope.submitted = true;
        if (customer != null && customer.Name != null && customer.Address && customer.ContactNo) {
            customerFactory.addCustomer(customer).success(function (data) {
                //reset form
                $scope.customer = null;
                // go to view
                $state.go('tabs.customers');
            }).error(function (data) {
                $scope.error = "An Error has occured while Adding customer! " + data.ExceptionMessage;
            });
        }
    };

    $scope.cancel = function () {
        // go to view
        $state.go('tabs.customers');
    };
});

app.controller('editCustomerCtrl', function ($stateParams, customerFactory, $scope, $state) {
    //get data
    var id = $stateParams.customerId;
    $scope.editMode = true;
    customerFactory.getCustomer(id).success(function (data) {
        $scope.customer = data;
    }).error(function (data) {
        $scope.error = "An Error has occured while Loading customers! " + data.ExceptionMessage;
    });

    //update customer
    $scope.update = function (customer) {
        customerFactory.updateCustomer(customer).success(function (data) {
            // go to view
            $state.go('tabs.customers');
        }).error(function (data) {
            $scope.error = "An Error has occured while Updating customer! " + data.ExceptionMessage;
        });
    };

    $scope.cancel = function () {
        // go to view
        $state.go('tabs.customers');
    };
});

app.controller('viewCustomerCtrl', function ($stateParams, customerFactory, $scope, $state) {
    //get data
    var id = $stateParams.customerId;
    $scope.editMode = true;
    customerFactory.getCustomer(id).success(function (data) {
        $scope.customer = data;
    }).error(function (data) {
        $scope.error = "An Error has occured while Loading customers! " + data.ExceptionMessage;
    });
});