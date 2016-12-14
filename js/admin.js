var angular = require("angular");
require("wangeditor");

var app = angular.module('blog');
app.controller('AdminController', function($scope, $http){
	var editor = new wangEditor('editor');
	editor.create();
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
})
