'use strict';
angular.module('myApp', [
    'ngRoute','y.controllers','chieffancypants.loadingBar', 'ngAnimate'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'templates/index.html',
        controller: 'indexCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
    //$sceProvider.enabled(false);
}]);
    
