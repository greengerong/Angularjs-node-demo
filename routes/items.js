

var itemService = require("./service/itemService").itemService;

var doneCallback = function(req,res){
	
	return function(data){
		console.log("done:"+ JSON.stringify(data))
		res.send(data);
	};
};

var errorCallback =function(req,res){
	return function(error){
		console.log(error);
		res.send(500);
	};
};

exports.getAll = function(req, res){
	itemService.find({},doneCallback(req,res),errorCallback(req,res));
};

exports.getById = function(req, res){
	var itemId = req.params.id;	
	console.log("findById:" + itemId);
	itemService.findById(itemId,doneCallback(req,res),errorCallback(req,res));
};

exports.add = function(req, res){
	var item = req.body;	
	itemService.save(item,doneCallback(req,res),errorCallback(req,res));
};

exports.update = function(req, res){
	var itemId = req.params.id;	
	var item = req.body;	
	itemService.update(ietmId,item,doneCallback(req,res),errorCallback(req,res));
};

exports.remove = function(req, res){
	var itemId = req.params.id;		
	itemService.remove(itemId,doneCallback(req,res),errorCallback(req,res));
};

