

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
	itemService.findById(itemId,doneCallback(req,res),errorCallback(req,res));
};

exports.add = function(req, res){
	var item = req.body;	
	itemService.save(item,function(){
		res.send(201);
	},errorCallback(req,res));
};

exports.update = function(req, res){
	var itemId = req.params.id;	
	var item = req.body;	
	console.log(itemId,item);
	itemService.update(itemId,item,function(){
		res.send(204);
	},errorCallback(req,res));
};

exports.remove = function(req, res){
	var itemId = req.params.id;		
	itemService.remove(itemId,function(){
		res.send(204);
	},errorCallback(req,res));
};

