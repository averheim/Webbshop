angular.module("app").controller("appController", ["$scope", "appServiceFactory","productServiceFactory", "loginServiceFactory", function ($scope, appService, productServiceFactory, loginServiceFactory) {

    $scope.categoryChosen = function (id) {
        console.log("Category " + id +  " clicked!");
        productServiceFactory.setChosenCategory(id);
    };

    $scope.loggedIn = function () {
        return loginServiceFactory.isLoggedIn();
    };

    $scope.logOut = function () {
        loginServiceFactory.setLoginState(false);
        return loginServiceFactory.isLoggedIn();
    }
}]);