//meow
const misc = require('./misc.js');
var express = require('express');
var app = express();
var myVisitCount = 0;

app.get('/', (req, res, next) => {
  ++myVisitCount;
  var result = misc.addthem(1, 2)
  res.send('Hi!<br><br>It seems that this page has been seen ' + myVisitCount + ' times! Rad!' + `<br><br> ${result}`);
})

app.listen(8080);
