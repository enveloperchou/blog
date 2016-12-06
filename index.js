var angular = require('angular');
require('angular-route');
var html = require("./html/header.html");

var app = angular.module ('blog', ['ngRoute'], undefined);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/', {
				template: html 
			})
	}]);

module.exports = app ;
