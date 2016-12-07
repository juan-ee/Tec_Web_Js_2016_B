var express = require('express'); //importamos el paquete express
var app = express(); //ejecutamos la funcion express
var fs = require('fs') //paquete para los archivos del sistema

//segundo parametro es el tipo de codificacion, si no se pone leera en binario
//tercer parametro una funcion

var usuarios = [
    {
        id: 1,
        nombre: 'Pepe',
        cadula: '111'
    },
    {
        id: 2,
        nombre: 'Alicia',
        cadula: '222'
    },
    {
        id: 3,
        nombre: 'Janeth',
        cadula: '333'
    }

]

var cont = usuarios.length;

app.get('/Usuarios/:id', function (req, res) { //Para leer parametros y responder de acuerdo a eso    

    var id = req.params.id;

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id == id) {
            res.json(usuarios[i]);
            break;
        }
    }
    res.send('No existe el usuario');

    console.log(req.params);

});

app.get('/Usuarios', function (req, res) { //Para leer parametros y responder de acuerdo a eso                


    if (!req.query.nombre) {
        res.send('No enviaste el nombre boludo');
    }

    if (!req.query.cedula) {
        res.send('No enviaste la cedula');
    }

    console.log(usuarios.length);

    var nuevo = {
        id: ++cont,
        nombre: req.query.nombre,
        cedula: req.query.cedula
    }

    usuarios.push(nuevo)

    res.json(usuarios);


    //res.json(usuarios);

});

app.get('/TecnologiasWeb', function (req, res) {
    //request => req  - que es lo que me manda el cliente
    //response => res
    res.send('con javascript! (get)');
});

app.get('/', function (req, res) {
    //request => req  - que es lo que me manda el cliente
    //response => res
    //console.log('1 antes de leer');
    
    str=''
            fs.readFile('./paginas/pagina0.html', 'utf8',
                function(error,archivoLeido) {                
                str+=archivoLeido;
                      fs.readFile('./paginas/pagina1.html', 'utf8',
                        function(error,archivoLeido) {                
                          str+=archivoLeido;
                            fs.readFile('./paginas/pagina2.html', 'utf8',
                            function(error,archivoLeido) {                
                                str+=archivoLeido;
                                res.send(archivoLeido)
                            }) 
                        }) 
                })     

    res.send(str);
    //console.log('2 parece que termino de leer');
    
    

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