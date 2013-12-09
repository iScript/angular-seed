define([
    'angular',
],function(angular){
    'use strict';
    /* Controllers */
    angular.module('y.controllers',[]).
    //首页控制器
    controller('indexCtrl', ['$scope',function($scope) {
        $scope.name = 'hello';
    }]);
});
