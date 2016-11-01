# Clase Javascript

Se escribe el codigo en la etiqueta `<script>`

Para mandar alertas:

`alert('Hola');`

y en consola:

`console.log('No leas esto');`

## Variables

Para instanciar las variables utilizamos `var`

```javascript
    var texto="Strawberry fields"
    var numero=1;
    var float = 3.14;
```

No es necesario hacer casting en las variables

## Arreglos

Para declarar un arreglo, se procede:
```javascript
var arregloString =['4','2','12']
```
Se puede crear arreglos con varios tipos de variables:
```javascript
var arregloTodo = ["Anastasia",true,null,3134.24,undefined,754441];        
```


## JSON

Como se denotan objetos de javascript, se tienen propiedades y valores. Ejemplo:

```javascript
 var persona = {
            'nombre':'Juan',
            'apellido':'Erazo',
            'edad':21
        }      
```
Comparandolo con XML:

```xml
<persona>
        <nombre>Juan</nombre>
        <apellido>Erazo</apellido>
        <edad>21</edad>
    </persona>
```

Se puede ver que JSON ocupa menos espacio

## Funciones

```javascript
function getNombrePersona(){
            return persona.nombre;
        }
```

Para regresar el nombre

`console.log(persona.getNombre());`

Para regresar la funcion

`console.log(persona.getNombre);`