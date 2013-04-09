
var app = angular.module("app",["ngResource"]);
app.
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/items', {templateUrl: 'items-template',   controller: ItemsCtrl}).
      when('/items/:id', {templateUrl: 'items-view-template',   controller: ItemViewCtrl}).
      when('/item', {templateUrl: 'items-view-template',   controller: ItemAddCtrl}).
      otherwise({redirectTo: '/items'});
}]).factory("underscore",["$window",function($window){
	return $window._;
}])

app.value("messageBoxContainer","messageBoxContainer").
value("messageBoxColor",{"error":"alert-error","warring":"","info":"alert-info","success":"alert-success"}).
 factory("errorBoxService",["messageBoxContainer","messageBoxColor",function(messageBoxContainer,messageBoxColor){
	var $container = $("#" +messageBoxContainer)
 	$container.bind("click",function(){
		$container.find(".alert-body").toggle();
	});
    
	return {
		show : function(title,content,type){
			//check once append, another only change text and class.
		$container.html('<div class="box alert alert-block ' + messageBoxColor[type] + ' fade in">' +
	      '<button data-dismiss="alert" class="close" type="button">×</button>' +
	      '<h4 class="alert-heading">' + title + '</h4>' + 
	      '<div class="alert-body hide">' + content + '<div>' +
    	'</div>');
			$container.fadeIn();
		},
		hide : function(){
			//hiden , not remove.
		    $container.html("");
		}
	};
}]);

var errorBoxServiceTestController = function ($scope,errorBoxService) {
	
     var i = 0;
     var type =["info","error","warring","success"];
	 $scope.change =function(){
	 	errorBoxService.show("hi should be change " + (i++),"<p>nothing<a>link</a></p>",type[i%3]);
	 };
	 $scope.hide =function(){
	 	errorBoxService.hide();
	 }
}
app.controller("errorBoxServiceTestController",errorBoxServiceTestController);
