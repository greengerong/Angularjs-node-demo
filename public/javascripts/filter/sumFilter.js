
app.filter("sum",["underscore",function(underscore){
	return function(input,property){
		var propertyValues = underscore.map(input,function(n){
	      		return n[property];
	      	});

	    return underscore.reduce(propertyValues, function(memo, num){
	         return memo + num; 
	    }, 0);
	};
}]);