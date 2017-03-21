angular.module("user").controller("orderDetailsController", ["$scope", "$routeParams", "userFactoryService", function($scope, $routeParams, userFactoryService) {
    var productDetails = [];
    $scope.total = 0;
    //Hämta orderInfo
    userFactoryService.getOrderById($routeParams.id).then(function(response) {
        //Variabler
        var orderInfo = response.data;
        var orderProducts = orderInfo.products;
        $scope.order = orderInfo;
        $scope.date = orderInfo.dateTime.substring(0, 10);
        $scope.time = orderInfo.dateTime.substring(11, 16);
        //Hämta userInfo
        userFactoryService.getUserInfo($scope.order.customerId).then(function(response) {
            $scope.customer = response.data;
        });
        //Hämta detaljerad info om produkterna

        angular.forEach(orderProducts, function(product) {
            userFactoryService.getProductById(product.productId).then(function(response) {
                productDetails.push({
                    id: response.data.id,
                    name: response.data.name,
                    price: response.data.price,
                    quantity: product.quantity
                });
                var x = response.data.price;
                var y = product.quantity;

                $scope.total += (x * y);
            });
        });

        $scope.products = productDetails;
    });
}]);