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

## Creacion de nuestros proprios paquetes

Empezamos con un `NPM init`

Crea un paquete npm

```javascript
{
  "name": "tecnologiasweb_erazoj",
  "version": "1.0.0",
  "description": "ejemplo de npm",
  "main": "app.js",
  "dependencies": {
    "mysql": "^2.12.0",
    "express": "^4.14.0",
    "nodemailer": "^2.6.4"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "calculadora"
  ],
  "author": "vengatus",
  "license": "MIT"
}
```

Para publicar se debe:
- tener un usuario en npmjs.com
- hacer login `npm login`
- de ahi se publica el paquete con `npm publish`

Se puede descargarlo desde la pagina web, accediendo al nombre del paquete en la pagina web:
![]()

Como se puede ver, para descargar el paquete se utiliza:
`npm i tecnologiasweb_erazoj`


### Exportar objetos

```js
    module.exports = {
        imprimir_suma: imprimir_suma,
    }

    function imprimir_suma(n1, n2) {
        console.log(n1 + n2);
    }
```

Antes de actualizar se debe cambiar la version en el jason