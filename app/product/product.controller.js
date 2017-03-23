angular.module("product")
    .controller("productController", ["$scope", "$location", "productServiceFactory","cartServiceFactory",
        function ($scope, $location, productServiceFactory,cartServiceFactory) {

            $scope.$watch(function () {
                    return productServiceFactory.getChosenCategory();
                }, function (value) {
                    $scope.categoryFilter = value;
                }
            );

            $scope.addToCart = function (product, amount) {
                cartServiceFactory.addToCart(product, amount);
            };


            productServiceFactory.getProducts().then(function (response) {
                $scope.products = response.data;
            });


            $scope.checkStock = function (unitsInStock) {
                if (unitsInStock >= 1) {
                    return false;
                } else {
                    return true;
                }
            };

            $scope.productsInStock = function (product) {

                var inStock = [];
                for (var i = 1; i < product.unitsInStock + 1; i++) {
                    inStock.push(i);
                }
                return inStock;
            }

        }]);
