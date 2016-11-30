var express = require('express');
var app = express();

app.get('/TecnologiasWeb', function (req, res) {
  res.send('con javascript!');
});

app.listen(5050, function () {
  console.log('Example app listening on port 5050!');
});