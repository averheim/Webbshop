angular.module("cart").factory("cartServiceFactory", ["$http", function ($http) {

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
        }
    }
}]);