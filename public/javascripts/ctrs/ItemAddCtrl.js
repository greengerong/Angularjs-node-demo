
var ItemAddCtrl = function($scope,$location,itemsResource){

	$scope.save =function(){
		itemsResource.save(this.item,function(){
			$location.path("#items");
		});
	 };
	
};

app.controller("ItemAddCtrl",ItemAddCtrl);