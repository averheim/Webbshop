angular.module("cart")
    .controller("cartController", ["$scope", "$location", "cartServiceFactory", "loginServiceFactory",
        function ($scope, $location, cartServiceFactory, loginServiceFactory) {
        var cart = cartServiceFactory.getCart();
        $scope.cart = cart;

        $scope.sendOrder = function () {
            if (loginServiceFactory.isLoggedIn() == true){
                cartServiceFactory.sendOrder(cart, loginServiceFactory.getUser()).then(function () {
                    $location.url("/order-sent");
                    cart = [];
                }, function () {
                    $scope.errorMessage = "Något gick fel. Kontrollera din anslutning!"
                });
            } else {
                $location.url("/login");
            }
        };

        $scope.checkCart = function () {
            if(cart.length > 0){
                $scope.cartMessage = "Kundvagn!";
                calcTotalAmount();
                return true;
            } else {
                $scope.cartMessage = "Din kundvagn är tom!"
                return false;
            }
        };

        function calcTotalAmount() {
            var totalAmount = 0;
            angular.forEach(cart, function (product) {
                totalAmount += (product.price * product.amount);
            });
            $scope.totalAmount = totalAmount;

        }

        $scope.removeFromCart = function (product) {
            cartServiceFactory.removeFromCart(product);
        }

}]);