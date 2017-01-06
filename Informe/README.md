# Sails.js

<p align="center">
<img src="https://camo.githubusercontent.com/6c76c5e3904170744bad0031ac667f8bc252147f/687474703a2f2f692e696d6775722e636f6d2f52497675392e706e67">
</p>

### Materia : `Tecnologías Web con JavaScript`
### Tema : `Sails.js` 
### Fecha : `2016-12-21`
### Estudiante : `Juan Erazo`
### Profesor : `Tania Calle - Adrian Eguez`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teórico</a>
  - <a href="#sails">Sails.js</a>
  - <a href="#assets">Assets</a>
  - <a href="#views">Views</a>
  - <a href="#pipelines">Pipelines</a>
  - <a href="#controllers">Controllers</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
  - <a href="#inst">Instalación</a>
  - <a href="#psimp">Proyecto Simple</a>
  - <a href="#assets2">Assets</a>
  - <a href="#vistas">Vistas</a>
  - <a href="#controladores">Controladores</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a>     

<a name="tema"></a>
## Tema
El tema de la práctica es: **`Sails.js`**

<a name="objetivos"></a>
## Objetivos
- Aprender a utilizar y configurar el framework sails.js
- Crear vistas personalizadas en sails
- Generar un controlador simple

---
<a name="marco-teorico"></a>
## Marco Teórico


<a name="sails"></a>
### Sails.js
Sails es de los frameworks más populares de Node. Se encarga de integrar componentes de una manera más ligera para que puedan agregarse o retirarse de su aplicación más fácilmente. Sails es lo suficientemente flexible para explorar y crear, pero también proporciona automatización.
 
(Fuente: [SailsJS](http://sailsjs.com/whats-that))


<a name="assets"></a>
### Assets
Assets se refiere a los archivos estáticos (js, css, imágenes, etc.) en el servidor que se desea que sean accesibles para los demás. En Sails, estos archivos se ubican en la carpeta *assets/.
(Fuente: [SailsJS](http://sailsjs.com/documentation/concepts/assets))


<a name="views"></a>
### Views
Las vistas son plantillas que se compilan en el servidor en las páginas HTML. En la mayoría de los casos, las vistas se utilizan como respuesta a una solicitud HTTP entrante.
Sails está configurado para usar EJS (JS embebido) como su motor de vistas y soporta todos los motores de vistas compatibles con Express.
(Fuente: [SailsJS](http://sailsjs.com/documentation/concepts/views))

<a name="pipelines"></a>
### Pipelines
Es un archivo de configuración en Sails que determina el orden en que sus hojas de estilo, JavaScript y los archivos de plantilla del lado del cliente deben ser compilados y enlazados como etiquetas `<script>` o `<link>`.
(Fuente: [SailsJS](http://sailsjs.com/documentation/anatomy/tasks/pipeline-js))


<a name="controllers"></a>
### Controllers
Los controladores, son los principales objetos en una aplicación Sails y son los responsables de responder a las solicitudes de un navegador web, una aplicación móvil o cualquier otro sistema capaz de comunicarse con un servidor. A menudo actúan como intermediarios entre los modelos y las vistas. Para muchas aplicaciones, los controladores contendrán la mayor parte de la lógica de negocio de su proyecto.
Los controladores están compuestos de un conjunto de métodos llamados acciones (o a veces "acciones de controlador"). Las acciones están enlazadas a rutas en su aplicación, de modo que cuando un cliente solicita la ruta, la acción se ejecuta para realizar alguna lógica de negocios y enviar una respuesta.
(Fuente: [SailsJS](http://sailsjs.com/documentation/concepts/controllers))


<a href="#cabecera">Volver a la cabecera</a>



---
<a name="desarrollo"></a>
## Desarrollo del informe  

<a name="inst"></a>
### Instalación
Primero es necesario haber instalado **Node.js**.

Para la instalación de **Sails.js** simplemente se ejecuta el siguiente comando en el cmd:

> npm insall -g sails

![Instalacion](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/11-Sails01/Informe/Imagenes/1.png)

<a href="#cabecera">Volver a la cabecera</a>

<a name="#psimp"></a>  
### Proyecto simple

Para crear un proyecto, se ejecuta lo siguiente:

> sails new ProyectoSails

Para correr la aplicación, se entra en la carpeta creada

> cd ProyectoSails

Y el servidor se lo puede iniciar con el comando:

> sails lift

Aparecerá lo siguiente:

![Lift](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/11-Sails01/Informe/Imagenes/2.png)

Se puede ver que el servidor está escuchando en el **puerto 1337** y con un navegador podemos visualizarlo:

![Serv](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/11-Sails01/Informe/Imagenes/3.png)

<a name="#assets2"></a>
### Assets
En assets se tendrán los archivos que serán públicos para que sean visualizados en la aplicación.
Dentro de la carpeta **/assets** se creará otra carpeta llamada **App** que contenerá los siguientes archivos:

- index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Asset</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <h1>Hola a todos</h1>
    <script src="app.js"></script>
</body>
</html>
```
- estilos.css
```css
body{
    background-color:antiquewhite;
    color:darkslategray;
}
```
- app.js
```javascript
alert("No es bueno usar alertas");
```

Ahora bien, para acceder a estos archivos simplemente se debe agregar en la URL el nombre de la carpeta que se creó (en este caso **App**):
![URL](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/11-Sails01/Informe/Imagenes/4.png)

Aparecerá la alerta que se escribió en el script **app.js**:

![Alerta](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/11-Sails01/Informe/Imagenes/5.png)

Y luego se visualizará el contenido del archivo **index.html** que ha utilizado estilos del archivo **estilos.css**:

![Index](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/11-Sails01/Informe/Imagenes/6.png)

<a name="#vistas"></a>    
### Vistas
Las vistas se encuentran en la carpeta **/views** y son archivos de formato **.ejs**. La vista por defecto está escrita en el archivo **homepage.ejs** y corresponde a la página de inicio. En donde, se modificará el código de la siguiente manera:
```html
<style>
    .fondo{
        background-color:darkseagreen;
    }
</style>

<div class="fondo">
    <h3>Aqui empieza homepage</h3>
    <p>Ya no somos tan noobs en jails</p>
    <h3>Aqui termina de homepage</h3>
</div>

```
Obteniendo el siguiente resultado:

![Result](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/11-Sails01/Informe/Imagenes/7.png)

Se puede establecer un formato en común para todas las vistas al modificar el archivo **layaout.ejs**. Para este caso, utilizaremos el archivo **estilos.css** que se había creado antes. Para ello, agregamos la siguiente línea:
```html
<link rel="stylesheet" href="/App/estilos.css">
```

Al actualizar la página de nuevo se puede ver que se ajustó al formato establecido:
![Actualz](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/11-Sails01/Informe/Imagenes/8.png)


A continuación se escribirán los siguientes archivos:

- quito.ejs
```
<h1>QUITO</h1>
```
- guayaquil.ejs
```
<h1>GUAYAQUIL</h1>
```
- cuenca.ejs
```
<h1>CUENCA</h1>
```

Y se modificará el archivo **/config/routes.js** agregando las siguientes líneas para abrir las vistas creadas:
```javascript
module.exports.routes = {

  '/': {
    view: 'homepage'
  },

  '/Quito': {
    view: 'quito'
  },
    
  '/Guayaquil': {
    view: 'guayaquil'
  },
    
  '/Cuenca': {
    view: 'cuenca'
  }
};
```
Reiniciamos el servidor y al especificar la ruta en el URL aparecerá la vista que se creó:

![Vista](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/11-Sails01/Informe/Imagenes/9.png)

<a name="#controladores"></a>
### Controladores
Primero se empezará generando un controlador llamado **Saludo** en la carpeta del proyecto con el siguiente comando:

> sails generate controller Saludo

Se ha creado un archivo **SaludoController.js** dentro de la carpeta **/api/controllers**, el cual se lo modificará de la siguiente manera:
```javascript
module.exports = {
	 json: function (req, res) {

        var parametros = req.allParams()

        if (req.method == 'GET') {

            res.json({
                    nombre: 'hola get',
                    para:parametros
                });


        } else {

            if (req.method == 'POST') {
                res.json({
                    nombre: 'hola post'
                });
            } else {
                res.json({
                    nombre: 'hola todos los demas'
                });
            }

        }

    },
    chao: function (req, res) {
        res.send('Chao!');
    },
    hola: function (req, res) {
        res.send('Hola');
    }
};
```

Después de reiniciar el servidor podemos apreciar lo siguiente:

- Si escribimos la ruta `http://localhost:1337/Saludo/hola`:

![Hola](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/11-Sails01/Informe/Imagenes/10.png)

- Con la ruta `http://localhost:1337/Saludo/chao`:

![Chao](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/11-Sails01/Informe/Imagenes/11.png)

Al utilizar postman y al acceder a la ruta `http://localhost:1337/Saludo/json` encontramos:

- Con el método GET con parámetros:

![Get](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/11-Sails01/Informe/Imagenes/12.png)

- Con el método POST:

![Post](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/11-Sails01/Informe/Imagenes/13.png)

- Con cualquier otro:

![Otro](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/11-Sails01/Informe/Imagenes/14.png)


<a href="#cabecera">Volver a la cabecera</a>

---

<a name="conrec"></a>
## Conclusiones y Recomendaciones

- Sails es de los frameworks más completos y sencillos de utilizar que ofrece Node.
- La generación de controladores en sails se realiza con un simple comando.
- Cuando se realiza un cambio dentro del servidor es necesario reiniciarlo para apreciar los cambios.

<a href="#cabecera">Volver a la cabecera</a>