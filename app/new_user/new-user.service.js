angular.module("newUser").factory("newUserFactoryService", ["$http", function ($http) {

    return {
    	createNewCustomer    :   function (customer) {
            console.log(customer);
            return $http.post("http://nackbutik.azurewebsites.net/api/customer ", customer);
        }
    };

}]);