app.controller("mainCtrl", function ($scope, userService, $state) {
    $scope.signIn = function (user) {
       
        if (user != null && user.username != null && user.password) {
            userService.loginUser(user).success(function (data) {
               // console.log(data);
                $state.go('dashboard.home');
            }).error(function (data) {
                alert(data.ExceptionMessage);
                $scope.error = "An Error has occured while Adding customer! " + data.ExceptionMessage;
            });
        }
    };

    $scope.signUp = function (user) {
        if (user != null && user.email != null && user.password && user.address && user.contactno) {
            userService.SignupUser(user).success(function (data) {
                if (data)
                    $state.go('dashboard.home');
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

    $scope.cancel = function () {
        // go to view
        $state.go('signin');
    };
});