# pastel
## super-colored connect logging middlware
## Installation
```
npm install pastel
```
## Usage
```javascript
var pastel = require("pastel"),
connect = require("connect");

var app = connect();

app.use(pastel.log());
```

```pastel.log``` accepts a config object. It has the following fields.

* date
* time
* method
* url

You can set them to any of the following color or style strings (from [colors](https://github.com/Marak/colors.js)).

* bold
* italic
* underline
* inverse
* yellow
* cyan
* white
* magenta
* green
* red
* grey
* blue
* rainbow
* zebra
* random

###Example Config
```javascript
app.use(pastel.log({
	date: "yellow",
	time: "cyan",
	method: "magenta",
	url: "red"
}));
```
