
var ItemViewCtrl = function($scope,$routeParams,$location,itemsResource){
   
	itemsResource.get($routeParams.id,function(item){
		 $scope.item =item;
	});

	$scope.save =function(){
		itemsResource.update(this.item,function(){
			$location.path("#items");
		});
	 };
	
};

app.controller("ItemViewCtrl",ItemViewCtrl);