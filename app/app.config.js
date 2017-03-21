angular.module("app").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl :   "app/product/product-list.template.html",
            controller  :   "productController"
        })
        .when("/category/:categoryId", {
            templateUrl :   "app/category/category.template.html",
            controller  :   "categoryController"
        })
        .when("/login", {
            templateUrl :   "app/login/login.template.html",
            controller  :   "loginController"
        })
        .when("/cart", {
            templateUrl :   "app/cart/cart.template.html",
            controller  :   "cartController"
        })
        .when("/new-user", {
            templateUrl :   "app/new_user/new-user.template.html",
            controller  :   "newUserController"
        })
        .when("/logged-in", {
            templateUrl :   "app/login/login-success.template.html"
        })
        .when("/create-success", {
            templateUrl :   "app/new_user/create-success.template.html"
        })
        .when("/order-sent", {
            templateUrl :   "app/cart/order-sent.template.html"
        })
        .when("/user", {
            templateUrl :   "app/user/user-detail.template.html",
            controller  :   "userController"
        })
        .when("/order-details/:id", {
            templateUrl :   "app/user/order-details.template.html",
            controller  :   "orderDetailsController"
        })
        .otherwise("/");
    $locationProvider.html5Mode(true);
}]);