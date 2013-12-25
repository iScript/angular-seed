define([
    'angular',
    'filters',
    'services',
    'directives',
    'controllers',
    'angularRoute',
    'angularAnimate',
    'loadingBar'
],function(angular,filters,services,directives,controllers,angularRoute,angularAnimate,loadingBar){

'use strict';
angular.module('myApp', ['ngRoute','myApp.controllers','chieffancypants.loadingBar', 'ngAnimate']).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'templates/index.html',
        controller: 'indexCtrl'
    }).
    when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'indexCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
    //$sceProvider.enabled(false);
}]).run(['$rootScope',function($rootScope){
    //所有模块加载完成初始化
    console.log('== all the module loaded == ');
}]);


});



    
