angular.module("category").factory("categoryServiceFactory", ["$http", function ($http) {

    return {
        getCategories         :   function () {
            return $http.get("http://nackbutik.azurewebsites.net/api/category");
        }

    }
}]);