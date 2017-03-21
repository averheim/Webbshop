angular.module("product")
    .controller("productController", ["$scope", "$location", "productServiceFactory",
        function ($scope, $location, productServiceFactory) {

            productServiceFactory.getProducts().then(function (response) {
                $scope.product = response.data;
            });

            $scope.categoryChosen = function (category) {
                $location.url("/");
                $scope.categoryFilter = category.id;
            };

            $scope.checkStock = function (unitsInStock) {
                if (unitsInStock >=1){
                    return false;
                } else {
                    return true;
                }
            };

            $scope.productsInStock = function (product) {

                var inStock = [];
                for (var i = 1; i < product.unitsInStock + 1; i++){
                    inStock.push(i);
                }
                return inStock;
            }

        }]);
