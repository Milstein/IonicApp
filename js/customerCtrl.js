app.controller('CustomerCtrl', function ($scope, customerFactory, $ionicPopup, $state) {
    var pageSize = 200;
    var page = 1;
    $scope.customers = [];
    //buttons
    $scope.listCanSwipe = true;

    //get all Customers
    $scope.getAll = function () {
        customerFactory.getCustomers(page, pageSize).success(function (data) {
            // console.log(data);
            $scope.customers = data;
            page += 1;
        }).error(function (data) {
            $scope.error = "An Error has occured while Loading customers! " + data.ExceptionMessage;
        });

    };

    //edit customer
    $scope.edit = function (id) {
        // go to view
        $state.go('tabs.editcustomer', { customerId: id }, {});
    }

    //view customer
    $scope.view = function (id) {
        // go to view
        $state.go('tabs.viewcustomer', { customerId: id }, {});
    }

    // delete Customer
    $scope.delete = function (customer) {
        //customer = $scope.customer;
        customerFactory.deleteCustomer(customer).success(function (data) {
            $scope.customers.pop(customer);
            // go to view
            $state.go('tabs.customers', {}, { reload: true });
        }).error(function (data) {
            $scope.error = "An Error has occured while Deleting customer! " + data.ExceptionMessage;
        });
    };

    // A confirm dialog
    $scope.showConfirm = function (customer) {
        //ionic confirm popup
        var confirmPopup = $ionicPopup.confirm({
            title: 'Confirm Action',
            template: 'Are you sure to delete customer?',
        });
        confirmPopup.then(function (res) {
            if (res) {
                $scope.delete(customer);
            } else {
                //console.log('You are not sure');
            }
        });
    };

    // initialize your customers data
    $scope.getAll();
});

