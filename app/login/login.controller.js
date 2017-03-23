angular.module("login").controller("loginController", ["$scope", "$location", "loginServiceFactory", function ($scope, $location, loginServiceFactory) {

    $scope.logIn = function () {
        var login = {
            email   :   $scope.email,
            password:   $scope.password
        };

        loginServiceFactory.logIn(login).then(function (response) {
            if(response.status == 200){

                loginServiceFactory.setLoginState(true);
                loginServiceFactory.setUser(response.data);
                $location.url("/logged-in");

            } else {
                loginServiceFactory.setLoginState(false);
                $scope.loginFailed = true;
            }

        }, function (response) {
            console.log(response.data.status)
        });
    }

}]);
