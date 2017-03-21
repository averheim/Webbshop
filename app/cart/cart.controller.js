var cart = [];

angular.module("cart")
    .controller("cartController", ["$scope", "$location", "cartServiceFactory", "loginServiceFactory",
        function ($scope, $location, cartServiceFactory, loginServiceFactory) {




            $scope.addToCart = function (product) {
                if (cart.length == 0){
                    product.amount = $scope.amount;
                    cart.push(product);
                    console.log("Första produkten lades till");
                } else {
                    for (var i = 0; i < cart.length; i++){
                        if (cart[i].id == product.id){
                            cart[i].amount = $scope.amount;
                            console.log("Produkten inkrementerades med: " + $scope.amount);
                            return;
                        }
                    }
                    product.amount = $scope.amount;
                    cart.push(product);
                    console.log("Ny produkt lades till");
                }
            };









        $scope.addToCart1 = function (product) {

            if (cart.length == 0){
                product.amount = $scope.amount.value;
                cart.push(product);
                $scope.amount.value = 1;
                console.log("Första produkten lades till");
            } else {
                for (var i = 0; i < cart.length; i++){
                    if (cart[i].id == product.id){
                        cart[i].amount += $scope.amount.value;
                        console.log("Produkten inkrementerades med: " + $scope.amount.value);
                        $scope.amount.value = 1;
                        return;
                    }
                }
                product.amount = $scope.amount.value;
                cart.push(product);
                $scope.amount.value = 1;
                console.log("Ny produkt lades till");
            }
        };

        $scope.removeFromCart = function (product) {

            var index = cart.indexOf(product);
            if (index >-1){
                cart.splice(index, 1);
            }
        };

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
        $scope.cart = cart;
}]);