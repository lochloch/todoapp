var app = angular.module("myApp", []);

app.controller("firstController", function($scope){
$scope.message = 'To Do App';
// Add product to list
$scope.product = { title: "", desc: ""};
$scope.products = [];
$scope.cur = { title: "", desc: ""};
$scope.addItem = function () {
    $scope.products.push($scope.product);
    $scope.product = { title: "", desc: ""};
} 
// Remove product from list
$scope.removeItem = function (x) {
    $scope.products.splice(x, 1);
    
}  

// Display particular product-description
$scope.displayItem = function (x) {
    $scope.cur = $scope.products[x];
}  

});