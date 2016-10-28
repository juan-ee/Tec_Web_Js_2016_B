# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Introducción a la Web` 
### Fecha : `2016-10-18`
### Estudiante : `Juan Erazo`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `1`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teórico</a>
  * <a href="#metodos">HTTP Methods</a>
  * <a href="#status">Códigos HTTP</a>
  * <a href="#navegador">Navegador Web</a>
  * <a href="#w3c">W3C</a>
  * <a href="#w3cschools">W3C Schools</a> 
  * <a href="#html">HTML</a>
  * <a href="#etiquetas">Etiquetas HTML</a>  
  * <a href="#www">World Wide Web</a>    
- <a href="#desarrollo">Desarrollo de la Práctica</a>
  * <a href="#pagweb">Página web con HTML</a>
  * <a href="postman">Postman</a>
  * <a href="inspector">Inspector Web</a>  
- <a href="#conrec">Conclusiones y Recomendaciones</a> 


<a name="tema"></a>
## Tema
El tema de la práctica es: `Introduccion a la Web`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web
- Conocer herramientas de desarrolladores web como: postman, inspector web
- Aprender el uso de lenguaje HTML CSS
- Aprender el uso de tags HTML

<a name="marco-teorico"></a>
## Marco Teórico


<a name="metodos"></a>
### HTTP Methods
HTTP define una serie predefinida de métodos de petición (algunas veces referido como "verbos") que pueden utilizarse. El protocolo tiene flexibilidad para ir añadiendo nuevos métodos y para así añadir nuevas funcionalidades. El número de métodos de petición se han ido aumentando según se avanzaban en las versiones4 . Cada método indica la acción que desea que se efectúe sobre el recurso identificado. Lo que este recurso representa depende de la aplicación del servidor.

Entre algunos tenemos:

##### GET

 Pide una representación del recurso especificado. Por seguridad no debería ser usado por aplicaciones que causen efectos ya que transmite información a través de la URI agregando parámetros a la URL.

##### POST
 Envía los datos para que sean procesados por el recurso identificado. Los datos se incluirán en el cuerpo de la petición. Esto puede resultar en la creación de un nuevo recurso o de las actualizaciones de los recursos existentes o ambas cosas.

##### HEAD
Igual que GET pero solo retorna la cabecera del HTTP y no el cuerpo del documento.

##### PUT
El método PUT te permite escribir un archivo en una conexión socket establecida con el servidor. La desventaja del método PUT es que los servidores de hosting compartido no lo tienen habilitado.

##### DELETE
Borra el recurso especificado.

##### OPTIONS
Devuelve los métodos HTTP que el servidor soporta para un URL específico. Esto puede ser utilizado para comprobar la funcionalidad de un servidor web mediante petición en lugar de un recurso específico.

##### CONNECT
 Se utiliza para saber si se tiene acceso a un host, no necesariamente la petición llega al servidor, este método se utiliza principalmente para saber si un proxy nos da acceso a un host bajo condiciones especiales.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol))

<a href="#cabecera">Volver a la cabecera</a>

---
<a name="status"></a>
### Códigos HTTP
El código de respuesta o retorno es un número que indica que ha pasado con la petición. El resto del contenido de la respuesta dependerá del valor de este código. El sistema es flexible y de hecho la lista de códigos ha ido aumentando para así adaptarse a los cambios e identificar nuevas situaciones. Cada código tiene un significado concreto. Sin embargo el número de los códigos están elegidos de tal forma que según si pertenece a una centena u otra se pueda identificar el tipo de respuesta que ha dado el servidor:

* 1xx Respuestas informativas
  Indica que la petición ha sido recibida y se está procesando.
* 2xx Respuestas correctas.
  Indica que la petición ha sido procesada correctamente.
* 3xx Respuestas de redirección. Indica que el cliente necesita realizar más acciones para finalizar la petición.
* 4xx Errores causados por el cliente. Indica que ha habido un error en el procesado de la petición a causa de que el cliente ha hecho algo mal.
* 5xx Errores causados por el servidor. Indica que ha habido un error en el procesado de la petición a causa de un fallo en el servidor.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol#C.C3.B3digos_de_respuesta))

<a href="#cabecera">Volver a la cabecera</a>

---
<a name="navegador"></a>
### Navegador Web
Un navegador web (en inglés, web browser) es un software, aplicación o programa que permite el acceso a la Web, interpretando la información de distintos tipos de archivos y sitios web para que estos puedan ser visualizados.

La funcionalidad básica de un navegador web es permitir la visualización de documentos de texto, posiblemente con recursos multimedia incrustados. Además, permite visitar páginas web y hacer actividades en ella, es decir, enlazar un sitio con otro, imprimir, enviar y recibir correo, entre otras funcionalidades más.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Navegador_web))

<a href="#cabecera">Volver a la cabecera</a>

---
<a name="w3c"></a>
### W3C
El Consorcio WWW, en inglés: World Wide Web Consortium (W3C), es un consorcio internacional que genera recomendaciones y estándares que aseguran el crecimiento de la World Wide Web a largo plazo.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/World_Wide_Web_Consortium))

<a href="#cabecera">Volver a la cabecera</a>

---
<a name="w3cschools"></a>
### W3C Schools
W3Schools es un sitio de desarrolladores web, con tutoriales y referencias sobre lenguajes de desarrollo web como HTML, CSS, JavaScript, PHP, SQL y Bootstrap, que cubre la mayoría de los aspectos de la programación web.

(Fuente: [w3schools](http://www.w3schools.com/about/))

<a href="#cabecera">Volver a la cabecera</a>

---
<a name="html"></a>

### HTML

HTML, sigla en inglés de HyperText Markup Language (lenguaje de marcas de hipertexto), hace referencia al lenguaje de marcado para la elaboración de páginas web. Es un estándar que sirve de referencia del software que conecta con la elaboración de páginas web en sus diferentes versiones, define una estructura básica y un código (denominado código HTML) para la definición de contenido de una página web, como texto, imágenes, videos, juegos, entre otros. 

El HTML se escribe en forma de «etiquetas», rodeadas por corchetes angulares (<,>,/). El HTML también puede describir, hasta un cierto punto, la apariencia de un documento, y puede incluir o hacer referencia a un tipo de programa llamado script, el cual puede afectar el comportamiento de navegadores web y otros procesadores de HTML.(Fuente: <a href="https://es.wikipedia.org/wiki/HTML">Wikipedia</a>)

<a href="#cabecera">Volver a la cabecera</a>

---

<a name="etiquetas"></a>

### Etiquetas HTML

Definición: Las etiquetas HTML son fragmentos de texto rodeados por corchetes angulares < >, que tienen funciones y usos específicos y se utilizan para escribir código HTML.

Las etiquetas o tags son la forma de escribir código HTML.

En HTML existen etiquetas de apertura y etiquetas de cierre, tienen la forma: `<etiqueta> </etiqueta>`. Donde `<etiqueta>` es la etiqueta de apertura y `</etiqueta>` es la etiqueta de cierre indicada por la diagonal. HTML tiene definidas gran variedad de etiquetas para distintos usos.

Aunque la mayoría de las etiquetas tienen su etiqueta de apertura y etiqueta de cierre, es importante aclarar que no todas las etiquetas tienen su correspondiente etiqueta de cierre.(Fuente: [Acerca de HTML](http://www.acercadehtml.com/manual-html/etiquetas-html.html)).

Algunos ejemplos de etiquetas son los siguientes:

##### h1 - h6
Las etiquetas `<h1>` a `<h6>` son usadas para definir títulos HTML.
`<h1>` define el más importante título. `<h6>` define el título menos importante.

##### p
La etiqueta `<p>` define un párrafo.

Los navegadores automáticamente agregan algo de espacio (margin) antes y después de cada elemento `<p>`. Los margenes pueden ser modificados con CSS (con las propiedades de margen).

##### ul
La etiqueta `<ul>` define una lista no ordenada (bulleted).

Usa la etiqueta `<ul>` junto con la etiqueta `<li>` para crear un lista no ordenada.

##### ol
La etiqueta `<ol>` define  una lista ordenada. Una lista ordenada puede ser numérica o alfabética.

Usa la etiqueta `<li>` para definir una lista de elementos.


##### li
La etiqueta  `<li>` define un elemento de una lista.

La etiqueta `<li>` es usada para una lista ordenada `<ol>`, lista no ordenada `<ul>` y un lista de menú `<menu>`.

(Fuente: [w3schools](http://www.w3schools.com/tags/))


<a href="#cabecera">Volver a la cabecera</a>

---

<a name="www"></a>
### World Wide Web

En informática, la World Wide Web (WWW) o red informática mundial1 es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/World_Wide_Web))

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/WWW_logo_by_Robert_Cailliau.svg/240px-WWW_logo_by_Robert_Cailliau.svg.png" width="300" height="200">
</p>

<a href="#cabecera">Volver a la cabecera</a>

<a name="desarrollo"></a>
## Desarrollo del informe

<a name="pagweb"></a>
### Página web con HTML
A continuación se codificará una página web simple de tal manera que su resultado sea el siguiente:

<p align="center">
<img src="https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/1.HTML/HTML/Informe/Capturas/MiPagina.png" alt="Muestra ejemplo de etiqueta ul en navegador web" title="etiqueta ul en navegador web"/>
</p>

<a href="#cabecera">Volver a la cabecera</a>

Para empezar, en el archivo de index.html donde funcionará nuestro servidor empezamos a crear nuestro DOCTYPE:


##### DOCTYPE

El Doctype o “Declaración del tipo de documento” es una instrucción especial que va al inicio de nuestro documento HTML y que permite al navegador entender qué versión de HTML estamos utilizando. Esta información determinará la manera en la que el navegador procesará el documento, un DOCTYPE distinto podría implicar hasta una visualización diferente del sitio web dentro del mismo navegador. (Fuente: [Devcode](https://devcode.la/tutoriales/doctype-que-es-y-para-que-sirve/))

En el caso de HTML5, el DOCTYPE a emplear es el siguiente:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Aprendiendo HTML</title>
</head>
<body>
    ...
</body>
</html>
```
En donde la etiqueta `<head>` contiene la información técnica de nuestro documento HTML, en ella se puede encontrar el título que llevará nuestra webpage escrito dentro del tag `<title>` (en este caso es "Aprendiendo HTML").

En la etiqueta `<body>` va el contenido de la página web como títulos, párrafos, imágenes, vínculos, etc.

Para el caso de los títulos (cabeceras) se utilizan las etiquetas `<h1>` hasta `<h6>` en donde el tamaño varariá de acuerdo a su número:

```html
<h1>Cabecera 1</h1>
<h2>Cabecera 2</h2>
.
.
.
<h5>Cabecera 5</h5>
<h6>Cabecera 6</h6>
```

En este caso se utilizó la etiqueta `<h1>` para el título de NIRVANA y escribimos un párrafo pequeño utilizando la tag `<p>` :

```html
<h1>NIRVANA</h1>
<p>Nirvana fue una banda de grunge estadounidense procedente de Aberdeen, Washington, Estados Unidos integrada por el vocalista y guitarrista Kurt Cobain y el bajista Krist Novoselic en 1987. Wikipedia</p>
```
Para añadir una imagen desde otro sitio web se usa el tag `<img src="link de la imagen" alt="texto alternativo">` y si lo combinamos con la etiqueta `<a>` permite redireccionarnos a un vínculo que nosotros establezcamos. Ejm:

```html
<a href="https://www.youtube.com/watch?v=vabnZ9-ex7o" target="_blank">
<img src="https://lh3.googleusercontent.com/-Y4weEKm6y0U/AAAAAAAAAAI/AAAAAAAAADg/kYtxfb4VzuE/photo.jpg" alt="Album Nirvana">
</a>
```
Esto permite redireccionarnos a una canción en Youtube al dar click sobre la imagen.

También se puede observar que se utilizaron listas en la página web de ejemplo. Para aquello, Se usaron las tags `<ul></ul>` para las listas desordenadas y `<ol></ol>` para las listas ordenadas. Los elementos de la lista se añaden con el tag `<li></li>`:

```html
<ul> 
 <li>Smells Like Teen Spirit</li>
 <li>Nevermind</li>
 <li>Come as You Are</li>
</ul>

<ol>
 <li>Mejor</li>
 <li>banda</li>
 <li>de grunge</li>
 <li>de la jodida historia</li>
</ol>
```

<a href="#cabecera">Volver a la cabecera</a>

---

<a name="postman"></a>

### Postman

Postman es una extensión gratuita para el navegador Google Chrome que permite probar servicios web fácilmente, basta con indicar la url, el método HTTP (POST, GET, etc.) y los parámetros de la petición. (Fuente: [Notas de software](http://notasdesoftware.com/2014/04/postman-cliente-http-para-probar.html))

<p align="center">
<img src="https://www.getpostman.com/img/v2/logo-glyph.png?0eb696e07f466ced153edf3166af5f11" width="100">
</p>

Su instalación es bastante sencilla, simplemente debemos buscarlo en las extensiones de Chrome e instalarlo con 1 sólo click:

<p align="center">
<img src="">
</p>

Con Postman instalado, se puede analizar los métodos HTTP que vimos anteriormente con nuestro servidor web en funcionamiento. Con el método GET, se obtienen los datos que están en el servidor, ya sea en un archivo o base de datos, al cliente:


<p align="center">
<img src="">
</p>

En fin, es una gran herramienta con la que podemos analizar cómo están trabajando los métodos HTTP en las páginas web.

<a href="#cabecera">Volver a la cabecera</a>

---
<a name="inspector"></a>
### Inspector Web

Cada navegador posee un inspector web que es una herramienta que nos permiteexaminar y modificar la estructura y el diseño de una página. Para acceder a éste en Google Chrome se procede a  seleccionar lo que queramos de nuestra página web (puede ser un texto o una imagen), damos click derecho y nos vamos a Inspeccionar:

<p align="center">
<img src="">
</p>

En este caso, el navegador abre una ventana donde se puede observar el código fuente de la lista no ordenada que habíamos codificado arriba. El inspector web automáticamente marca las líneas del código fuente correspondiente. Se puede modificar el elemento haciendo doble click sobre alguna propiedad, o añadiendo una en la pestaña de estilos.

<p align="center">
<img src="">
</p>

El inspector ofrece gran cantidad de opciones para analizar por completo una página web.

<a href="#cabecera">Volver a la cabecera</a>

## Conclusiones y Recomendaciones

- HTML es un lenguaje bastante es un simple lenguaje que permite crear páginas complejas de texto e imágenes.
- El inspector web es de gran utilidad para saber qué acciones realiza cada página web, los recursos que nos brinda el servidor y para realizar nuestras propias modificaciones a sus elementos.
- Es recomendable utilizar un IDE que sea bastante amigable para la escritura del código en HTML ya que puede ser bastante monótona su codificación.
- Si se desea profundizar el funcionamiento de los métodos HTTP, lo más aconsejable es utilizar la herramienta gratuita Postman que ofrece Google Chrome.

<a href="#cabecera">Volver a la cabecera</a>



