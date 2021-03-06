var mongo = require("mongojs");
var databaseUrl = "angularjs-node-demo"; // "username:password@example.com/mydb"
var collections = ["items"];
 
var db = mongo.connect(databaseUrl, collections);


var itemService = {};

itemService.save = function(items,done,error){
	db.items.save(items,function(err, saved){
		if( err || !saved) {
			error(err);
		}
  		else {
			done(saved);
		}
	});
};


itemService.update = function(id,item,done,error){
	
	delete (item["_id"]);
	db.items.update({_id:db.ObjectId(id)},{$set: item},function(err, updated) {

	  if( err || !updated) {
		error(err);
	  }
	  else {
	  	done(updated);
	  }
	});
};

itemService.remove = function(id,done,error){
	db.items.remove({_id : db.ObjectId(id)},function(err, removed) {
		console.log("111",err,removed)
	  if(err ||!removed) {
		error(err);
	  }
	  else {
	  	done(removed);
	  }
	})
};

itemService.find = function(item,done,error){
	db.items.find( item, function(err, items) {
	  if( err) {
	  	error(err);
	  }
	  else {
  		done(items);
	  }
	});
};

itemService.findById = function(id,done,error){
	db.items.findOne( {_id:db.ObjectId(id)}, function(err, items) {
	  if( err) {
	  	error(err);
	  }
	  else {
  		done(items);
	  }
	});
};

exports.itemService = itemService;
