angular.module("cart").factory("cartServiceFactory", ["$http", function ($http) {
    var cart = [];
    return {
        sendOrder   :   function (cart, customer) {

            var orderList = [];

            angular.forEach(cart,function (product) {
                orderList.push(
                    {
                        productId   :   product.id,
                        quantity    :   product.amount
                    }
                );
            });


            var order = {
                customerId  :   customer.customerId,
                products    :   orderList
            };

            return $http.post("http://nackbutik.azurewebsites.net/api/order", order);
        },

        addToCart   :   function (product, amount) {
            if (cart.length == 0){
                product.amount = amount;
                cart.push(product);
                console.log("Första produkten lades till");
             } else {
                for (var i = 0; i < cart.length; i++){
                    if (cart[i].id == product.id){
                        cart[i].amount = amount;
                        console.log("Produkten inkrementerades med: " + amount);
                        return;
                    }
                }
                product.amount = amount;
                cart.push(product);
                console.log("Ny produkt lades till");
            }

        },

        removeFromCart : function (product) {

            var index = cart.indexOf(product);
            if (index > -1) {
                cart.splice(index, 1);
            }
        },

        getCart : function () {
            return cart;
        }
    }
}]);