/* Filters */
define([
    'angular'
],function(angular){

	angular.module('y.filters', []).
	//字符串反转
	filter('reverse', function () {
	    return function(input) {
			var out = "";
			for (var i = 0; i < input.length; i++) {
				//out放后面实现字符反转
				out = input.charAt(i) +out ;
			}
			return out;
	    }
	});

});