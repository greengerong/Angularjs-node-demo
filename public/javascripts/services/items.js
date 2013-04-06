
app.factory('itemsResource', function($http){
	var log = function(data, status, headers, config){
		console.log(data, status, headers, config);
	};
      return {
      	query: function(done){
      		$http.get("items").success(done).error(log);
      	},
      	get:function(id,done){
      		$http.get("items/" + id).success(done).error(log);
      	},
      	update:function(id,item,done){
                  item._id = id;
      		$http.put("items/" + id, item).success(done).error(log);
      	},
      	save:function(item,done){
      		$http.post("items", item).success(done).error(log);
      	},
      	delete:function(id,done){
      		$http.delete("items/" + id).success(done).error(log);
      	}
      };
});