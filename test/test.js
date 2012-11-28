var colors = require("colors"),
pastel = require("../index");

pastel.log()({method: "GET", url: "/test/about?me=90"}, {}, function(){});
pastel.log({
	date: "yellow",
	time: "magenta",
	method: "cyan",
	url: "green"
})({method: "GET", url: "/test/about?me=90"}, {}, function(){})
