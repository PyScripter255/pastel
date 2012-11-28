#pastel
##super-colored connect logging middlware
##Installation
```
npm install pastel
```
##Usage
```javascript
var pastel = require("pastel"),
connect = require("connect");

var app = connect();

app.use(pastel.log());
```
