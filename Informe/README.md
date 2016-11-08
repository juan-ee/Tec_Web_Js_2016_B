# Diseño, Calidad, WAI, Validación, SEO Web y Bootstrap

<p align="center">
<img src="http://web-on.es/wp-content/uploads/2014/11/foto-portada-webon.png" width="300" height="200">
</p>

### Materia : `Tecnologías Web con JavaScript`
### Tema : `Diseño, Calidad, WAI, Validación, SEO Web y Bootstrap`
### Fecha : `2016-11-08`
### Estudiante : `Juan Erazo`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `3`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teórico</a>
    * <a href="#diseno">Diseño Web</a>
    * <a href="#calidad">Calidad</a>
    * <a href="#wai">WAI</a>
    * <a href="#validacion">Validación</a>
    * <a href="#seo">SEO</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
    * <a href="#etiquetas">Etiquetas</a>
    * <a href="#forms">Forms</a>
    * <a href="#tablas">Tablas</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a>     

<a name="tema"></a>
## Tema
El tema de la práctica es: `Diseño, Calidad, WAI, Validación, SEO Web y Bootstrap`

<a name="objetivos"></a>
## Objetivos
- 
- 
- 
- 

<a name="marco-teorico"></a>
## Marco Teórico

<a name="diseno"></a>
### Diseño Web
##### Usuarios y Escáners
Un usuario promedio no analizará todos los componentes de la página web, por lo general sólo se demora unos cuantos segundos para decidir si quiere quedarse o no.

Se debe dejar de qué se trata la página web a primera vista para luego entretenerlo con el resto de contenido.

##### Menos es más
Se debe mantener los párrafos, las páginas, los capítulos, etc. lo más cortos posibles. Caso contrario, se perderá audiencia fácilmente. Si se tiene gran cantidad de información que transmitir, es mejor redirigir hacia otros lugares.

##### Navegación
Se recomienda crear una navegación consistente en el sitio web. Nada de poner hipervínculos en cada párrafo porque destruye la estructura de la navegación.

##### Velocidad de Descarga
Se debe tener en cuenta el tiempo que toma en cargar una página. Si la página toma más de 7 segundos en cargar, el usuario saldrá de esta. Si es mucho el tiempo que se demora se debe remover contenidos gráficos o multimedia.

##### Permitir a la audiencia hablar
Una retroalimentación es muy importante para la interacción con el usuario ya que los visitantes prácticamente son los "clientes" del sitio web.

##### Pantalla del visitante 
Se debe asegurar que el sitio web funcione en diferentes pantallas ya que se tiene una gran cantidad de dispositivos y computadores que quieran acceder a la página web.

##### Los navegadores de los visitantes
Es importante tener en cuenta el navegador del usuario, se debe probar la página en los diferentes navegadores que sean más populares. Una forma de evitar conflictos es tener un buen código HTML.

##### ¿Qué Plug-Ins poseen los usuarios?
Se debe asegurar que los visitantes posean el software necesario para acceder a los recursos multimedia del sitio web.

##### ¿Y sobre las discapacidades?
Algunos usuarios poseerán cierto tipo de discapacidad, ya sea visual o auditiva y utilizarán navegadores especiales para ello. Se debe agregar siempre textos alternativos para los elementos gráficos.

(Fuente: [w3schools](http://w3schools.bootcss.com/website/web_design.html))

<a href="#cabecera">Volver a la cabecera</a>

---

<a name="calidad"></a>
### Calidad Web

##### Usar HTML5.

Escribir el sitio con HTML5 permite acercarnos hacia la perfección. La importancia de la etiqueta <!DOCTYPE html> permite renderizar la página más rápido y verificar la sintáxis de la página.

##### Usar archivos CSS separados.

Con CSS se puede separar estilos de contenidos, lo que optimiza la gestión de la página, reduciendo costos de desarrollo.

##### Validación Web.

Un validador es un software que permite encontrar algún error en la codificación de la página web. Se debe validar todo antes de publicar.

##### El elemento título.

Los títulos de una página web son de los elementos más importantes ya que:

* Es visible en las listas de búsqueda.
* Es visible en las pestañas del navegador.
* Y se mostrará en los marcadores del usuario.

Es por eso, que debe ser lo más conciso y corto posible.

##### Elementos de cabecera.

Los elementos de cabecera dan énfasis a la página web; se debe utilizarlos correctamente. Por ejemplo: La cabecera `<h1>` denota el encabezado principal, mientras que `<h2>` y `<h3>` pertenecen a unas cabeceras de menor nivel.

##### Conjunto de caractetes.

El conjunto de caracteres actualmente usado se conoce como Unicode. Sin embargo, no todos lo utilizan. Por ello, es imporante que tanto el servidor como el navegador estén de acuerdo en el conjunto de caracteres a usar. Para eso está la etiqueta <meta charset="">.

##### Formato de Fechas.

Se debe definir las fechas de acuerdo al estándar ISO que consiste en: "yyyy-mm-dd" para evitar futuros problemas con la audiencia.

(Fuente: [w3schools](http://w3schools.bootcss.com/website/web_quality.html))

<a href="#cabecera">Volver a la cabecera</a>

---

<a name="wai"></a>
### WAI Web
WAI es un conjunto de guías para los desarrolladores web que tienen como objetivo la creación de páginas más accesibles para personas con discapacidad. Esto permitirá que más tipos de navegadores puedan acceder al contenido.

Las principales razones para hacer un sitio más accesible son:

* Mejorar la reputación de la página y la satisfacción del cliente.
* Incrementar el número de visitantes.
* Hacer que los visitantes se permanezcan más en la página.
* Hacer que la página pueda ser usada en equipos viejos.

##### Recordar "alt".

Existen varias razones por las cuales un navegador no mostrará una imagen, puede ser porque el usuario las desactivó, el navegador no tiene la capacidad para mostrarla o es un navegador por voz. Con el atributo alt el navegador mostrará el texto que se le coloque.

##### No usar fuentes pequeñas.

Algunas veces, las fuentes pequeñas son utilizadas para poder colocar más texto en un solo lugar o para darle más "estilo". Esto puede causar problemas a ciertos usuarios por lo que es mejor utilizar fuentes con un tamaño de letra adecuado.

##### Escoger el mejor espaciado de letra y de línea.

Los textos con un mayor espaciado de letra y de línea son más fáciles de leer.

##### Evitar fuentes lujosas.

Los textos normales son más fáciles de leer que textos en cursiva o serif.

##### Evitar malos contrastes de color.

Texto negro en un fondo blanco o viceversa, es mejor para gente con discapacidades o aquellas que no tengan un buen equipo. Existen varias combinaciones por probar, se deben evitar aquellas que no generen un buen contraste o que sean molestas para la vista.

##### Siempre colocar un color de fondo.

Los usuarios tienen la capacidad de modificar las preferencias de color por defecto. Por ello, si se colocan colores a los elementos, se debería hacer lo mismo para el fondo. 

(Fuente: [w3schools](http://w3schools.bootcss.com/website/web_wai.html))

<a href="#cabecera">Volver a la cabecera</a>


<a name="validacion"></a>
### Valicación Web

##### Validador de páginas web
Un validador es un programa de software que puede revisar las páginas web de acuerdo a los estándares web.
Cuando de usa un validador para revisar documentos HTML y CSS, el validador retorna una lista de errores encontrados, de acuerdo al estándar escogido.
Se debe asegurar que no haya ningún error antes de publicar una página web.

El siguiente link es un ejemplo de un validador online para páginas web: https://validator.w3.org/#validate_by_uri+with_options


(Fuente: [w3schools](http://w3schools.bootcss.com/website/web_validate.html))

<a href="#cabecera">Volver a la cabecera</a>

<a name="seo"></a>
### SEO Web
SEO (Search Engine Optimization) es el proceso de mejorar el ranking de un sitio web a través de motores de búsqueda. Mientras más veces es desplegada una página web en un motor de búsqueda (como Google), más visitantes se obtendrá. 

SEO se basa en el funcionamiento de un motor de búsqueda para optimizar el contenido de los sitios webs de acuerdo a palabras clave que promueven la concurrencia de visitas.

SEO puede requerir cambios al código HTML y al contenido en general. Durante el desarrollo de la página se debe tener muy presente el SEO especialmente en los menús y la estructura de navegación. 


(Fuente: [w3schools](http://w3schools.bootcss.com/website/web_search.html))

<a href="#cabecera">Volver a la cabecera</a>

<a name="desarrollo"></a>
## Desarrollo del informe
Para el desarrollo del actual informe, se seguirá utilizando el framework CSS de Bootstrap que quedó a medias la anterior vez:

<a name="etiquetas"></a>
#### Etiquetas
Bootstrap cuenta con sus propias etiquetas como las siguientes:

- La etiqueta `<small>` se utiliza para mostrar un bloque de texto de poca importancia:

    ```html
        <h1>Este texto es importante <small>(Ejemplo sin importancia)</small> </h1>
    ```
    
    ![small]()

- La etiqueta `<code>` permite escribir código fuente de programación en la página:

    ```html        
        <code>        
            printf("Hola mundo");                      
        </code>           
    ```  
    ![code]()
    
- La etiqueta `<kbd>` informa la entrada por teclado que debe introducir el usuario.
    ```html
        <p>La combinacion <kbd>ctrl + C</kbd> permite copiar informacion en la memoria</p>
    ```    
    ![KBD]()

<a name="conrec"></a>

<a href="#cabecera">Volver a la cabecera</a>

---
<a name="forms"></a>
#### Forms
Bootstrap nos permite integrar forms para obtener información desde los usuarios. Ejm:
```html
    <div class="container">
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Correo</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                    </div>            
                    <div class="checkbox">
                        <label>
                            <input type="checkbox"> Checkear
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </div>
```
 ![Form]()
 
<a href="#cabecera">Volver a la cabecera</a>

---

<a name="tablas"></a>
#### Tablas
Incorporar tablas en nuestra página web es bastante sencillo. El siguiente es un claro ejemplo de una tabla con bordes:
```html
    <table class="table table-bordered">
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
    </table>
```
 ![Tabla]()
 
<a href="#cabecera">Volver a la cabecera</a>

## Conclusiones y Recomendaciones

- 
- 
- 
- 

<a href="#cabecera">Volver a la cabecera</a>