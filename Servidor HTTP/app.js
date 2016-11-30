var express = require('express'); //importamos el paquete express
var app = express(); //ejecutamos la funcion express

var usuarios=[
    {
        id:1,
        nombre:'Pepe'
    },
    {
        id:2,
        nombre:'Alicia'
    },
    {
        id:3,
        nombre:'Janeth'
    }
    
]

app.get('/Usuarios/:id', function (req, res) { //Para leer parametros y responder de acuerdo a eso    
    
    var id=req.params.id;
    
    for(var i=0;i<usuarios.length;i++){
        if(usuarios[i].id==id){
            res.json(usuarios[i]);
            break;
        }                    
    }
    res.send('No existe el usuario');
        
    console.log(req.params);
    
});

app.get('/Usuarios', function (req, res) { //Para leer parametros y responder de acuerdo a eso                
    res.json(usuarios);
    
});

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


app.post('/TecnologiasWeb', function (req, res) { //para mandar parametros se pone los dos puntos 

    var parametros = req.params;
    console.log(parametros);

    res.append('token', '1234'); //agrega un atributo 'token' a la cabecera de respuesta



    //res.send('con post!');    
    //No se pueden enviar dos respuestas, NO vale poner otro send()

    //Para responder objetos: 

    var usuario = {
        nombre: 'Juan',
        cedula: '1718269671'
    }

    usuario.mascotas = ['Rey']; //agregue unas mascotas
    usuario.soltero = true; //agregue un bool al json

    res.json(usuario);



});

app.listen(5050, function () {
    console.log('Example app listening on port 5050!');
});