define([
    'angular',
],function(angular){
    'use strict';
    /* Controllers */
    angular.module('myApp.controllers',[]).
    //首页控制器
    controller('indexCtrl', ['$scope',function($scope) {
        $scope.name = 'hello';
    }]).
    controller('loginCtrl', ['$scope',function($scope) {
        
    }]);
});
