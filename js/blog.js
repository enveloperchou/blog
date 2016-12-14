var angular = require("angular");

var app = angular.module('blog');
app.controller('BlogController', function($scope, $routeParams, $http){
	var blog_id = $routeParams['blog_id'];
	(function(blog_id){
		$http({
			method:'GET',
			url:'http://106.75.76.72:9000/blog',
			params: {'blog_id':blog_id},	
		}).success(function(rep){
				alert(JSON.stringify(rep));
				$scope.blog = rep;
			})
	}(blog_id));
	
	$scope.list = function(filter){
		$http({
			method:'GET',
			url:'http://106.75.76.72:9000/list',
			params:{"filter":$scope.filter},
		}).success(function(rep){
				alert(JSON.stringify(rep));
				$scope.blogs = rep;
			});
	};

	$scope.list();
});
