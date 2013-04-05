
var ItemsCtrl = function($scope,$location,itemsResource){
   
	itemsResource.query(function(items){
		 $scope.items =items;
	});

	$scope.delete = function(id){
		itemsResource.delete(id,function(){
			$location.path("#items");
		});
	};
	
};

app.controller("ItemsCtrl",ItemsCtrl);