# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Introducción a la Web` 
### Fecha : `2016-10-27`
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
  * <a href="#www">World Wide Web</a>  
- <a href="#desarrollo">Desarrollo de la Práctica</a>
  * <a href="#pagweb">Página web con HTML</a>
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
## Marco Teorico


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

<a href="#cabecera">A la cabecera</a>

---

<a name="www"></a>
### World Wide Web

En informática, la World Wide Web (WWW) o red informática mundial1 es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/World_Wide_Web))

<a href="#cabecera">A la cabecera</a>

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/WWW_logo_by_Robert_Cailliau.svg/240px-WWW_logo_by_Robert_Cailliau.svg.png" width="300" height="200">
</p>

<a name="desarrollo"></a>
## Desarrollo del informe

<a name="pagweb"></a>
### Página web con HTML

