'use strict';
/* Controllers */
angular.module('myApp.controllers',[]).
//首页控制器
controller('indexCtrl', ['$scope','$http','$timeout',function($scope,$http,$timeout) {
    console.log('indexController');
    $scope.name = [1,2];
    var watch = $scope.$watch('name',function(newValue,oldValue, scope){
        console.log("=====");
        console.log(newValue);
        console.log(oldValue);
    });
    $timeout(function(){
        $scope.name[0] = 9;
        console.log($scope.name);
    },1000);
}]).
controller('loginCtrl', ['$scope',function($scope) {
    console.log('login');
}]);

