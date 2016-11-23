# Node.js

El node es un compilador de javascript
NPM es un gestionador de paquetes de Node

## Para leer archivos
Todos los paquetedes del Node son nativos usamos `filesystem`

## Para conectar con la base de datos
`$ npm install mysql`
conectar con bases de datos


## Para un http server estatico
`$ npm install express --save`
Debemos escuchar peticiones http

## Para enviar correos
`$ npm install nodemailer`
SIemplemente lo encontramos en google



## Aplicacion

Si creamos una pequeña aplicación que sume dos números en un archivo `app.js` :

```javascript
var n1 = 4,
    n2 = 5;
console.log(n1 + n2);
```

Para ejecutarlo desde la consola, se lo hace con el comando:

`node app.js`

que nos dara el resultado de 9