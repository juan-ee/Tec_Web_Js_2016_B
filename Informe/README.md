# Aprendiendo CSS

<p align="center">
<img src="http://apt-web.es/wp-content/uploads/2015/02/css_cascading_style_sheet.jpg" width="300" height="200">
</p>

### Materia : `Tecnologías Web con JavaScript`
### Tema : `Aprendiendo CSS` 
### Fecha : `2016-10-25`
### Estudiante : `Juan Erazo`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `2`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teórico</a>
    * <a href="#css">CSS (Hoja de estilos en cascada)</a>
    * <a href="#cdn">CDN</a>        
    * <a href="#diseno">Diseño Responsive</a>    
- <a href="#desarrollo">Desarrollo de la Práctica</a>
    * <a href="#style">Etiqueta Style</a>
    * <a href="#clases">Clases</a>
    * <a href="#selectores">Selectores de ID</a>
    * <a href="#hojas">Hojas de estilo</a>
    * <a href="#booststrap">Bootstrap</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 



<a name="tema"></a>
## Tema
El tema de la práctica es: `Aprendiendo CSS`

<a name="objetivos"></a>
## Objetivos
- Aprender el uso de estilos CSS.
- Comprender el framework Bootstrap.

<a name="marco-teorico"></a>
## Marco Teórico

<a name="css"></a>
### CSS (Hoja de estilos en cascada)

Hojas de estilo en cascada (o CSS, siglas en inglés de Cascading Stylesheets) es un lenguaje de hojas de estilo para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado2 . Es muy usado para establecer el diseño visual de las páginas web, e interfaces de usuario escritas en HTML o XHTML; el lenguaje puede ser aplicado a cualquier documento XML, incluyendo XHTML, SVG, XUL, RSS, etcetera. También permite aplicar estilos no visuales, como las hojas de estilo auditivas.

Junto con HTML y JavaScript, CSS es una tecnologia usada por muchos sitios web para crear páginas visualmente atractivas, interfaces de usuario para aplicaciones web, y GUIs para muchas aplicaciones móviles (como Firefox OS)3 .

CSS está diseñado principalmente para marcar la separación del contenido del documento y la forma de presentación de éste, características tales como las capas o layouts, los colores y las fuentes4 . Esta separación busca mejorar la accesibilidad del documento, proveer más flexibilidad y control en la especificación de características presentacionales, permitir que varios documentos HTML compartan un mismo estilo usando una sola hoja de estilos separada en un archivo .css, y reducir la complejidad y la repetición de código en la estructura del documento.

La separación del formato y el contenido hace posible presentar el mismo documento marcado en diferentes estilos para diferentes métodos de renderizado, como en pantalla, en impresión, en voz (mediante un navegador de voz o un lector de pantalla, y dispositivos táctiles basados en el sistema Braille. Tambien se puede mostrar una pagina web de manera diferente dependiendo del tamaño de la pantalla o tipo de dispositivo. Los lectores pueden especificar una hoja de estilos diferente, como una hoja de estilos CSS guardado en su computadora, para sobreescribir la hoja de estilos del diseñador

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada))

<a href="#cabecera">Volver a la cabecera</a>

---

<a name="cd"></a>
### CDN

Una CDN (Content Delivery Network) es un conjunto de ubicaciones en el mundo, que redistribuyen localmente el contenido de los servidores y guardan en caché los archivos que no necesitan actualización permanente, según unas reglas personalizables. 

La CDN es imprescindible para dar servicio a usuarios de todo el mundo, ya sea para ofrecer la descarga de archivos o para implementar sitios y aplicaciones web. 

Si usted o sus clientes quieren llegar a un público internacional, la CDN permite acelerar la carga de las páginas, mejorar los tiempos de respuesta y la experiencia de usuario, proteger los datos, mejorar el posicionamiento de los sitios web y reducir el consumo de ancho de banda en cada uno de los países. 

El rendimiento de la inversión puede obtenerse muy pronto desde el comienzo de la difusión internacional de los contenidos.

(Fuente: [OVH](https://www.ovh.es/cdn/ventajas.xml))

<a href="#cabecera">Volver a la cabecera</a>

---
<a name="diseno"></a>
### Diseño Responsive

El diseño web responsive o adaptativo es una técnica de diseño web que busca la correcta visualización de una misma página en distintos dispositivos. Desde ordenadores de escritorio a tablets y móviles.

Hoy en día accedemos a sitios web desde todo tipo de dispositivos; ordenador, tablet, smartphone… por lo que, cada vez más, nos surge la necesidad de que nuestra web se adapte a los diferentes tamaños de los mismos.

El diseño responsive se trata de redimensionar y colocar los elementos de la web de forma que se adapten al ancho de cada dispositivo permitiendo una correcta visualización y una mejor experiencia de usuario. Se caracteriza porque los layouts (contenidos) e imágenes son fluidos y se usa código media-queries de CSS3.

El diseño responsive permite reducir el tiempo de desarrollo, evita los contenidos duplicados, y aumenta la viralidad de los contenidos ya que permite compartirlos de una forma mucho más rápida y natural.

(Fuente: [40 de fiebre](https://www.40defiebre.com/que-es/diseno-responsive/))

<a href="#cabecera">Volver a la cabecera</a>

<a name="desarrollo"></a>
## Desarrollo del informe

<a name="style"></a>
### Etiqueta style

Se puede definir un estilo predeterminado para cada etiqueta en la cabecera html, de la siguiente manera:
```html
<style>
        html{
            background-color: beige;
        }
        body{
            background-color: burlywood;
        }
        h1{
            color: aquamarine;
        }
</style>
```
En donde:
- El background html tendrá el color `beige`
- El background html tendrá el color `beige`
- El color de letra de los heades `<h1>` será `aquamarine`

De esta manera, al escribir el siguiente código en `<body>`:

```html
    <h1>Este es un ejemplo</h1>
    <p>Parrafo 1</p>
    <h1>Titulo 2</h1>
    <p>Este es el parrafo 2</p>
    <h1>Ultimo parrafo</h1>
    <p>Que divertido</p>
```
Se obtendría el siguiente resultado:
![Resultado](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/2.CSS/Informe/Imagenes/style.png)


<a href="#cabecera">Volver a la cabecera</a>

---
<a name="clases"></a>
### Clases 

En CSS, se pueden utilizar clases para escribir nuestros propios estilos que serán utilizados posteriormente en las etiquetas. Ejemplo:

```css
    .nombreClaseNegra{
            background-color: black;
            font-style: italic;
            color: antiquewhite;
    }
```
En donde:
- La clase tendrá un color de fondo negro
- El estilo de la letra será itálico
- El color que tomará sería el `antiquewhite`

Para utilizar el estilo de la clase, se necesita ponerle como atributo `class` cuando abrimos cualquier etiqueta, así:

```html
  <p class="nombreClaseNegra"> Este es el parrafo inicial de todos </p>
```
Se tendría el siguiente resultado:
![Clases](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/2.CSS/Informe/Imagenes/clase.png)

<a href="#cabecera">Volver a la cabecera</a>

---
<a name="selectores"></a>
### Selectores de ID

En ocasiones, es necesario aplicar estilos CSS a un único elemento de la página. Aunque puede utilizarse un selector de clase para aplicar estilos a un único elemento, existe otro selector más eficiente en este caso.
El selector de ID permite seleccionar un elemento de la página a través del valor de su atributo id. Este tipo de selectores sólo seleccionan un elemento de la página porque el valor del atributo id no se puede repetir en dos elementos diferentes de una misma página. (Referencia: [LibrosWeb](https://librosweb.es/libro/css/capitulo_2/selectores_basicos.html))

Entonces, el id se lo escribe de la siguiente manera:
```css
  #verde{
            color: green;
        }
```
Y para utilizarlo, lo escribimos al abrir la etiqueta:
```html
  <p id="verde" class="nombreClaseNegra" >Este es el parrafo inicial de todos</p>
```
Lo cual desplegaría lo siguiente:
![Selector ID](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/2.CSS/Informe/Imagenes/verde.png)

<a href="#cabecera">Volver a la cabecera</a>

---

<a name="hojas"></a>
### Hojas de estilo

Ahora que se tiene una idea de cómo crear estilos con CSS, se puede guardar todo en un archivo `.css` y referenciarlo con su dirección en la cabecera html con la etiqueta `<link>`.

Suponiendo que ya se ha creado un archivo llamado `estilos.css` y que se encuentra en la misma carpeta de nuestro `index.html`, para utilizar esa hoja de estilos se escribe:

```html
    <link rel="stylesheet" href="estilos.css">
```

En el caso de que la hoja de estilos `.css` se encuentre en otra dirección, sólo es cuestión de saber moverse entre las carpetas. Ejemplo:

  ```html
    <link rel="stylesheet" href="/SUBCARPETA/SUBCARPETA/hoja_estilo.css">
  ```
¿Qué pasa si referenciamos 2 o más estilos en el mismo elemento? Pues aquí se aplica el modelo de CSS (Cascading Style Sheets) para priorizar qué regla de estilo se aplicará en caso de que sea la misma. Para ejemplificar este caso, utilizaremos 2 hojas de estilo:

 ```html
    <link rel="stylesheet" href="estilos.css">
    <link rel="stylesheet" href="/Estilo1/estilos1.css">
  ```
En donde:
- El fondo de `estilos.css` tiene un color `beige`
- Y el fondo de `/Estilo1/estilos.css` tendrá un color `blueviolet`

Al inspeccionar en el navegador, aparecerá que la hoja que más prioridad tiene es la que se escribió al último:

![Estilo 1](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/2.CSS/Informe/Imagenes/cascada.png)

Obteniendo lo siguiente:

![Estilo 2](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/2.CSS/Informe/Imagenes/cascada2.png)


<a href="#cabecera">Volver a la cabecera</a>

---

<a name="booststrap"></a>
### Bootstrap

A continuación se utilizará un framework CSS de un servidor CDN llamado [Bootstrap](http://getbootstrap.com/css/). Se tiene que referenciar la hoja de estilo con la URL del servidor en la etiqueta `<link>` utilizada anteriormente:

 ```html
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  ```
Mediante este framework se puede desarrollar un **diseño responsive** que es una técnica de diseño web que busca la correcta visualización de una misma página en distintos dispositivos. Para ello, se utilizan filas de hasta 12 columnas que cambian a medida que crece el tamaño de la pantalla del dispositivo.

```
1 1 1 1 1 1 1 1 1 1 1 1 = 12
    
2   2   2   2   2   2   = 12
        
3     3     3      3    = 12
        
3     2   3     1  3    = 12
```

Codificando un bloque de código donde se utilizaron las etiquetas `<div>` con diferentes clases se obtendría lo siguiente:

![Boot 1](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/2.CSS/Informe/Imagenes/boot1.png)

Si se redimensiona la página, se puede observar cómo se ajusta a sus medidas:

![Boot 2](https://raw.githubusercontent.com/vengatus/Tec_Web_Js_2016_B/2.CSS/Informe/Imagenes/boot2.png)

<a href="#cabecera">Volver a la cabecera</a>

<a name="conrec"></a>
## Conclusiones y Recomendaciones

- CSS vendría a comprender la apariencia visual que tendría nuestra página web.
- Se recomienda utilizar un framework para desarrollar el estilo de de la página web.
- BootsTrap permite desarrollar diseños responsive.

<a href="#cabecera">Volver a la cabecera</a>
