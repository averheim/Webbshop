
angular.module("login").factory("loginServiceFactory", ["$http", "$location", function ($http, $location) {

    var isLoggedIn = false;
    var user = null;

    return {
        logIn   :   function (inEmail, inPassword) {

            return $http.post("http://nackbutik.azurewebsites.net/api/customer/login", {
                email   :   inEmail,
                password    :   inPassword
            }).then(function (response) {

                if(response.status == 200){
                    isLoggedIn = true;
                    user = response.data;
                    $location.url("/logged-in");
                    document.getElementById("login").innerHTML = "<li ng-controller='userController' ng-click='getData()'><a id='login' href='/user'><span class='glyphicon glyphicon-log-in'></span>" + ' ' + user.firstName + ' ' + user.lastName + "</a></li>"
                } else {
                    isLoggedIn = false;
                }

            }, function (response) {
                console.log(response.data.status)
            });
        },
        isLoggedIn  :   function () {
            return isLoggedIn;
        },
        getUser :   function () {
            return user;
        },
        getUserId   :   function () {
            return user.customerId;
        }
    }

}]);