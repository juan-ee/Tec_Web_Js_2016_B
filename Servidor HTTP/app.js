var express = require('express'); //importamos el paquete express
var app = express(); //ejecutamos la funcion express

app.get('/TecnologiasWeb', function (req, res) {
  //request => req  - que es lo que me manda el cliente
  //response => res
  res.send('con javascript! (get)');
});

app.post('/TecnologiasWeb', function (req, res) {    
    console.log('REQUEST:');
    console.log(req.headers);
    console.log('RESPONSE:');
    console.log(res.headers);
    
  res.send('con post!');    
});

app.listen(5050, function () {
  console.log('Example app listening on port 5050!');
});

