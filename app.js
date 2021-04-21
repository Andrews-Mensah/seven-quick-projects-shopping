var app = angular.module("ShoppingCartApp",[]);

app.controller("ShoppingCartController",function($scope) {
    $scope.cart = ["shoe","bag","toothbrush"];

    $scope.addItem = function(z) {
        $scope.cart.push(z);
        
    }



    $scope.remove = function(y) {
        var removeItem = $scope.cart.indexOf(y);
        $scope.cart.splice(removeItem,1);
    }

});