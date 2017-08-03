const path = require('path');
const express = require('express');

var publicPath = path.join(__dirname+'/../public')
var app = express();
 app.use(express.static(publicPath));
 const _port = process.env.PORT||3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(_port,()=>
{
console.log(`server is listening at port ${_port}`);
});