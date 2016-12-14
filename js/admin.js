var angular = require("angular");
require("wangeditor");

var app = angular.module('blog');
app.controller('AdminController', function($scope, $routeParams, $http){
	var editor = new wangEditor('editor');
	editor.create();
	if($routeParams['blog_id'] == 'empty'){
		$scope.blog = {'content':'请输入内容', 'title':'', 'subtitle':'', 'description':''};
	}else{
		$http({
			method: 'GET',
			url: 'http://106.75.76.72:9000/blog',
			params: {'blog_id':$routeParams['blog_id']}
		}).success(function(rep){
				$scope.blog = rep;
			})
	}

	$scope.publish = function(){
		var content = "content=" + editor.$txt.html() + "&title=" + $scope.title + "&subtitle=" + $scope.subtitle + "&description=" + $scope.description;	
		$http({
			method:'POST',
			url:'http://106.75.76.72:9000/publish',
			data: content,
			headers: {'Content-Type':'application/x-www-form-urlencoded'}
		}).success(function(rep){
				alert(rep);
			});
	};

	$scope.list = function(filter){
		$http({
			method:'GET',
			url:'http://106.75.76.72:9000/list',
			params:{"filter":$scope.filter},
		}).success(function(rep){
				$scope.blogs = rep;
			});
	};

	$scope.list();
});
