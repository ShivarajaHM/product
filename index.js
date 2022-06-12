var express = require('express')
var app = express(); 
var port = process.env.PORT || 3000; 
var routes = require('./routes/index'); 
// routes(app); 
app.use(routes)
app.listen(port,()=>
{ 
    console.log('Server started on port: ' + port); 
});