app.controller('SignUpCtrl', function (userFactory,$scope, $state) {
   
    $scope.submitted = false;
    $scope.SignUp = function (user) {
        // Set the 'submitted' flag to true
        $scope.submitted = true;
        if (user!=null) {
            userFactory.userSignUp(user).success(function (data) {
                if (data)
                    $state.go('tabs.dashboard');
                else
                    console.log("There is some  errors!");
            }).error(function (data) {
                $scope.error = "An Error has occured while Adding customer! " + data.ExceptionMessage;
            });
        }
        else {
            console.log("Please correct errors!");
        }
    };
});