var angular = require('angular');
require('angular-route');
var app = angular.module ('blog', ['ngRoute'], undefined);
require('./js/admin.js');

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/lab', {
				templateUrl: "./html/lab.html" 
			})
			.when('/blog', {
				templateUrl: "./html/blog.html"
			})
			.when('/console', {
				templateUrl: "./html/console.html"
			})
			.when('/admin', {
				templateUrl: "./html/admin.html",
				controller: "AdminController"
			})
	}]);
module.exports = app ;
