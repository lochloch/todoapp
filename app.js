var app = angular.module("myApp", []);

app.controller("firstController", function($scope){
$scope.message = 'To Do App';
// Add product to list
$scope.product = { title: "", desc: ""};
$scope.products = [
        {title: 'Milk', desc: 'white'},
        {title: 'Coco', desc: 'Brown'}
];
$scope.cur = { title: "", desc: ""};
$scope.showCur = false;
$scope.addItem = function () {
    $scope.products.push($scope.product);
    $scope.product = { title: "", desc: ""};
    $scope.showCur = false;
} 
// Remove product from list
$scope.removeItem = function (x) {
    $scope.products.splice(x, 1); 
}  

// Display particular product-description
$scope.displayItem = function (x) {
    $scope.cur = $scope.products[x];
    $scope.showCur = true;
}  
// back button result
$scope.backDisp = function() {
 $scope.showCur = false;
} 

});