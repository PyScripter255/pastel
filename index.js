require("colors");
var url = require("url");

exports.log = function(){
	var d = new Date()
	var date = d.toLocaleDateString();
	var time = d.toLocaleTimeString();
	return function(req, res, next){
	console.log("%s %s\n\t %s request for %s recieved", date.grey, time.cyan, req.method.green, url.parse(req.url).pathname.yellow);
	next()
	}
}
