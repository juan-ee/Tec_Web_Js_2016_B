### Comandos inportantes

### Instalar sailjs

Sails es un 


```
npm install -g sails

```

### Crear un proyecto

```
>sails new NuevoProyecto
```

### Levantar el servidor

Sails es un 

```
>sails lift

```

El sails pide opcionessi estan definicas, las opciones son:

- 1: SAFE MODE no se va a alterar la base ded atos.
- 2: ALTER MODE se va a alterar la base de datos si nosotros hicimos vamsios en los modelos
- 3: DELETE MODE borra todos los datos de la base de datos y vuelve a crear los modelos

### Servidor dWEb de Sailsjs

El servidor web de sails se encuentra localizado en la carpeta **assets**
Todo lo que está en  **assets** es público

Nos vamos a assets, creamos la carpeta App, creamos 3 archivos index.html, estilos.css y un app.js


## Generar controladores en Sailsjs
Para generar controladores se hace lo siguiente:

```
>sails generate controller NombreControlador

```
modificar el module.exports={
hola:function(req,res){

}
}
}
}