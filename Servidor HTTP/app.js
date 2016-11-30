var express = require('express'); //importamos el paquete express
var app = express(); //ejecutamos la funcion express

app.get('/TecnologiasWeb', function (req, res) {
    //request => req  - que es lo que me manda el cliente
    //response => res
    res.send('con javascript! (get)');
});

app.get('/', function (req, res) {
    //request => req  - que es lo que me manda el cliente
    //response => res
    res.send('Hola mundo! (get)');
});


app.post('/TecnologiasWeb', function (req, res) {
    console.log('REQUEST:');
    console.log(req.headers);


    //res.send('con post!');    
    //No se pueden enviar dos respuestas, NO vale poner otro send()

    //Para responder objetos: 

    var usuario = {
        nombre: 'Juan',
        cedula: '1718269671'
    }

    res.json(usuario);

        console.log('RESPONSE:');
    console.log(res.headers);

});

app.listen(5050, function () {
    console.log('Example app listening on port 5050!');
});