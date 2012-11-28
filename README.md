#crayon
##super-colored connect logging middlware
##Installation
```
npm install crayon
```
##Usage
```javascript
var crayon = require("crayon"),
connect = require("connect");

var app = connect();

app.use(crayon.log());
```
