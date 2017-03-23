
angular.module("login").factory("loginServiceFactory", ["$http", "$location", function ($http, $location) {

     var isLoggedIn = false;
     var user = null;

    return {
        logIn   :   function (login) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer/login", login);
        },
        isLoggedIn  :   function () {
            return isLoggedIn;
        },
        getUser :   function () {
            return user;
        },
        getUserId   :   function () {
            return user.customerId;
        },
        setUser :   function (inUser) {
            user = inUser;
        },
        setLoginState   :   function (state) {
            isLoggedIn = state;
        }
    }

}]);
