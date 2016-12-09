var angular = require("angular");
require("wangeditor");

var app = angular.module('blog');
app.controller('AdminController', function($scope){
	var editor = new wangEditor('editor');
	editor.create();
	$scope.publish = function(){
		alert("publish");
	};
})
