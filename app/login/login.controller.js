angular.module("login").controller("loginController", ["$scope", "loginServiceFactory", function ($scope, loginServiceFactory) {

    $scope.logIn = function() {
        loginServiceFactory.logIn($scope.email, $scope.password);
    };

}]);