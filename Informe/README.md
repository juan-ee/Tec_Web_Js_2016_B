# NPM (Node Packet Manager)

<p align="center">
<img src="http://www.sergiolepore.net/images/misc/npm.png" width="300" height="200">
</p>

### Materia : `Tecnologías Web con JavaScript`
### Tema : `Diseño, calidad, WAI, Validación, Seo` 
### Fecha : `2016-12-08`
### Estudiante : `Juan Erazo`
### Profesor : `Tania Calle - Adrian Eguez`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teórico</a>
    * <a href="#npm">¿Qué es Npm?</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
    * <a href="#instalacion">Instalación de paquetes</a>
    * <a href="#app_simple">Creación de una aplicación simple</a>
    * <a href="#carga">Carga de paquetes en el repositorio</a>    
- <a href="#conrec">Conclusiones y Recomendaciones</a>     

<a name="tema"></a>
## Tema
El tema de la práctica es: `NPM`

<a name="objetivos"></a>
## Objetivos
- Aprender a utilizar el gestor de pquetes de Node
- Crear un paquete personalizado y subirlo al repositorio online npm

<a name="marco-teorico"></a>
## Marco Teórico

<a name="npm"></a>
### ¿Qué es Npm?
**npm** es el manejador de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript.

Desde la versión 0.6.3 de Node.js npm es instalado automáticamente con el entorno. npm se ejecuta desde la linea de comandos y maneja las dependencias para una aplicación. Además, permite a los usuarios instalar aplicaciones Node.js que se encuentran en el repositorio. npm está escrito enteramente en JavaScript y fue desarrollado por Isaac Z. Schlueter a raíz de la frustración que experimentó mientras trabajando con **CommonJS** y considerando las deficiencias de otros proyectos similares como **PHP** y **Perl**.

En noviembre 2014, Collin Winter escribió en GitHub que "npm" no es una abreviatura para "Node Package Manager", sino un retroacrónimo recursivo para "npm is not an acronym". Aún así, en el archivo README.md encontrado en npm-0.0.1 se puede leer en la primera línea: "The Node Package Manager".

Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Retroacr%C3%B3nimo)
 
<a href="#cabecera">Volver a la cabecera</a>

---
<a name="desarrollo"></a>
## Desarrollo del informe

<a name="instalacion"></a>
### Instalación de paquetes
Existe una gran variedad de paquetes en el repositorio online de npm que se pueden instalar de acuerdo a nuestras necesidades. Algunos ejemplos:

##### Paquete para leer archivos:
Todos los paquetedes del Node son nativos usamos `filesystem`

##### Para realizar conexiones con base de datos:

`$ npm install mysql`

##### Para un servidor http estatico:
`$ npm install express`

##### Para enviar correos:
`$ npm install nodemailer`

<a name="app_simple"></a>
### Creación de una aplicación simple

Si creamos una pequeña aplicación que sume dos números en un archivo `app.js` :

```javascript
var n1 = 4,
    n2 = 5;
console.log(n1 + n2);
```

Para ejecutarlo desde la consola, se lo hace con el comando:

`node app.js`

Tras la ejecución, se obtendrá el valor de 9:

![Programa](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/07-Node1/Informe/Imagenes/1.png)

<a name="carga"></a>
### Carga de paquetes en el repositorio
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
- Tener un usuario en npmjs.com
- Hacer login con `npm login`
- Finalmente publicar el paquete con `npm publish`

Se puede descargarlo desde la página web, accediendo al nombre del paquete en la pagina web:

![Repo](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/07-Node1/Informe/Imagenes/2.png)

Como se puede ver, para descargar el paquete se utiliza:

`npm i tecnologiasweb_erazoj`


<a href="#cabecera">Volver a la cabecera</a>

---

<a name="conrec"></a>
## Conclusiones y Recomendaciones

- Npm facilita la compartición y reúso de código para los desarrolladores de javascript.
- Se puede encontrar gran variedad de paquetes colgados en el repositorio.

<a href="#cabecera">Volver a la cabecera</a>