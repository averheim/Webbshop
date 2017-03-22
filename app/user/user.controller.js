angular.module("user").controller("userController", ["$scope", "$location", "$http", "userFactoryService", "loginServiceFactory", function ($scope, $location, $http, userFactoryService, loginServiceFactory) {

    var user;
    var userOrders;

    $scope.getData = function () {

        userFactoryService.getUserInfo(loginServiceFactory.getUserId()).then(function (response) {
            user = response.data;

            $scope.firstname = user.firstName;
            $scope.lastname = user.lastName;
            $scope.email = user.email;
            $scope.phone = user.phone;
            $scope.address = user.address;
            $scope.postalcode = user.postalCode;
            $scope.city = user.city;
        });

        userFactoryService.getUserOrders(loginServiceFactory.getUserId()).then(function (response) {
            userOrders = response.data;

            angular.forEach(userOrders, function (order) {
                order.dateTime = order.dateTime.substring(0, 10) + " " + order.dateTime.substring(11, 16);
            });

            $scope.userOrders = userOrders;
        });

    };


    $scope.updateUser = function () {
        console.log("Hej");
        var userInfo = {
            firstName   :   $scope.firstname,
            lastName    :   $scope.lastname,
            email       :   $scope.email,
            phone       :   $scope.phone,
            address     :   $scope.address,
            postalCode  :   $scope.postalcode,
            city        :   $scope.city,
            password    :   $scope.password
        };

        console.log(user.customerId);
        console.log($scope.firstname);
        console.log($scope.lastname);
        console.log($scope.email);
        console.log($scope.phone);
        console.log($scope.address);
        console.log($scope.postalcode);
        console.log($scope.city);
        console.log($scope.password);
        userFactoryService.updateUserInfo(user.customerId, userInfo);

    };

    $scope.showDetailInfo = function (id) {
        $location.path("/order-details/" + id);
    }

}]);

