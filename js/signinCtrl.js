app.controller('SignInCtrl', function (userFactory, $scope, $state, $ionicLoading) {

    $scope.signIn = function (user) {
        $scope.submitted = true;
        if (user != null && user.username != null && user.password) {
            $ionicLoading.show({
                template: 'Loading...',
                animation: 'fade-in',
                noBackdrop: false
            });

            userFactory.loginUser(user).success(function (data) {
                console.log(data);
                var el = document.getElementById("divError");
                an_el = angular.element(el);

                if (data != null) {
                    $ionicLoading.hide();
                    $state.go('tabs.dashboard');
                }
                else {
                    $ionicLoading.hide();
                    an_el.text("Username or password is incorrect!");
                    an_el.removeClass("hide");
                    an_el.addClass("show");
                }
            }).error(function (data) {
                an_el.text(data.ExceptionMessage);
                an_el.removeClass("hide");
                an_el.addClass("show");

                alert(data.ExceptionMessage);
                $scope.error = "An Error has occured while Adding customer! " + data.ExceptionMessage;
            });
        }
    }
});