'use strict';

angular.module('myApp', ['ngRoute','myApp.controllers', 'angular-loading-bar','ngAnimate']).
config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {

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
    
    //$logProvider.debugEnabled = true;
    //$sceProvider.enabled(false);
    //$locationProvider.html5Mode(true);

}]).run(['$rootScope','$location','$http',function($rootScope,$location,$http){
    //所有模块加载完成初始化
    $rootScope.title = "asdf";
    $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w';
    console.log('== all the module loaded == ');
}]);
console.log(5);




    
