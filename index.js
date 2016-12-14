var angular = require('angular');
require('angular-route');
var app = angular.module ('blog', ['ngRoute'], undefined);
require('./js/admin.js');
require('./js/blog.js');

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/lab', {
				templateUrl: "./html/lab.html" 
			})
			.when('/blog', {
				redirectTo: '/blog/latest' 
			})
			.when('/console', {
				templateUrl: "./html/console.html"
			})
			.when('/admin', {
				redirectTo: '/admin/empty'
			})
			.when('/admin/:blog_id', {
				templateUrl: "./html/admin.html",
				controller: "AdminController"
			})
			.when('/blog/:blog_id', {
				templateUrl: "./html/blog.html",
				controller: "BlogController"
			})
	}]);
module.exports = app ;
