angular.module("product").factory("productServiceFactory", ["$http", function ($http) {

    return {
        getProducts         :   function () {
            return $http.get("http://nackbutik.azurewebsites.net/api/product");
        }
    }
}]);