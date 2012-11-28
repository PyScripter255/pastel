require("colors");
var url = require("url"),
defConfig = {
	method: "green",
	date: "grey",
	time: "cyan",
	url: "yellow"
};

exports.log = function(config){
	if (!config) config = defConfig;
	var d = new Date()
	var date = d.toLocaleDateString();
	var time = d.toLocaleTimeString();
	return function(req, res, next){
	console.log("%s %s\n\t %s request for %s recieved", date[config.date], time[config.time], req.method[config.method], url.parse(req.url).pathname[config.url]);
	next()
	}
}
