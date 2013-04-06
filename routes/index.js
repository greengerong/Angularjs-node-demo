
/*
* GET home page.
*/
var fs = require("fs");

exports.index = function(req, res){
	
	fs.readdir("./public/javascripts/filter/",function(err,filters){
		fs.readdir("./public/javascripts/services/",function(err,services){
			fs.readdir("./public/javascripts/ctrs",function(err,ctrls){
				res.render('index', { title: 'Angularjs work with node.js', filters:filters, 
					services:services ,ctrls:ctrls});
			});
		});
	});
  
}