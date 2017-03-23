angular.module("user").factory("userFactoryService", ["$http", function ($http) {
    return {
        getUserInfo :   function (id) {
            return $http.get("http://nackbutik.azurewebsites.net/api/customer/" + id);
        },
        updateUserInfo  :   function (userId, userInfo) {
            return $http.put("http://nackbutik.azurewebsites.net/api/customer/" + userId, userInfo);
        },
        getUserOrders   :   function (userId) {
            return $http.get("http://nackbutik.azurewebsites.net/api/order?customerid=" + userId);
         }
    }
}]);