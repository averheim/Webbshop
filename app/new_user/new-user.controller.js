angular.module("newUser").controller("newUserController", ["$scope", "$location", "newUserFactoryService", function ($scope, $location, newUserFactoryService) {

    $scope.create = function () {

        var customer = {
            firstName: $scope.firstname,
            lastName: $scope.lastname,
            email: $scope.email,
            phone: $scope.phone,
            password: $scope.password,
            address: $scope.address,
            postalCode: $scope.postalcode,
            city: $scope.city
        };

        newUserFactoryService.createNewCustomer(customer).then(function () {
            $location.url("/create-success");
        }, function () {
            console.log("lol");
            $location.url("/new-user");
            $scope.errorMessage = "Ett error har uppstått. Försök igen!";
        });

    };

}]);