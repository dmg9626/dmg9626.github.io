// load modules
var express = require('express');

var app = express();
var port = 8081;

app.use(express.static("."));
app.listen(port, function(){
    console.log("Server running...");
});