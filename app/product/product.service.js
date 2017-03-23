angular.module("product").factory("productServiceFactory", ["$http", function ($http) {
    var chosenCategory;
    return {

        getProducts         :   function () {
            return $http.get("http://nackbutik.azurewebsites.net/api/product");
        },

        setChosenCategory   :   function (categoryId) {
            chosenCategory = categoryId;
        },
        getChosenCategory   : function () {
            return chosenCategory;
        },
        getOrderById    :   function (id) {
            return $http.get("http://nackbutik.azurewebsites.net/api/order/" + id);
        },
        getProductById  :   function (id) {
            return $http.get("http://nackbutik.azurewebsites.net/api/product/" + id);
        }

    }
}]);