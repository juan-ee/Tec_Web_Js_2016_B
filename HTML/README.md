#Etiqueta style
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
![]()

#Clases 
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
![]()

#Selectores de ID

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
![]()

#Hojas de estilo

Ahora que se tiene una idea de cómo crear estilos con CSS, se puede guardar todo en un archivo `.css` y referenciarlo con su dirección en la cabecera html con la etiqueta `<link>`.

Suponiendo que ya se ha creado un archivo llamado `estilos.css` y que se encuentra en la misma carpeta de nuestro `index.html`, para utilizar esa hoja de estilos se escribe:

```html
    <link rel="stylesheet" href="estilos.css">
```

En el caso de que la hoja de estilos `.css` se encuentre en otra dirección, sólo es cuestión de saber moverse entre las carpetas. Ejemplo:

  ```html
    <link rel="stylesheet" href="/SUBCARPETA/SUBCARPETA/hoja_estilo.css">
  ```
#Estilos en cascada
¿Qué pasa si referenciamos 2 o más estilos en el mismo elemento? Pues aquí se aplica el modelo de CSS (Cascading Style Sheets) para priorizar qué regla de estilo se aplicará en caso de que sea la misma. Para ejemplificar este caso, utilizaremos 2 hojas de estilo:

 ```html
    <link rel="stylesheet" href="estilos.css">
    <link rel="stylesheet" href="/Estilo1/estilos1.css">
  ```
En donde:
- El fondo de `estilos.css` tiene un color `beige`
- Y el fondo de `/Estilo1/estilos.css` tendrá un color `blueviolet`

Al inspeccionar en el navegador, aparecerá que la hoja que más prioridad tiene es la que se escribió al último:

![]()

Obteniendo lo siguiente:

![]()

