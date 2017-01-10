/**
 * Mascota.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        nombre: {
            type: 'string',
            required: true
        },
        fechaNacimiento: {
            type: 'date'
        },
        pais: {
            type: 'string',
            enum: ['Ecuador', 'Colombia', 'Venezuela']
        },
        //id_raza es el nombre del Foreign Key
        id_raza:{
            //Model -> es el nombre de la tabla con que se va a relacionar
            model:'Raza',
            //Si no queremos tener huerfanos de raza
            required:true //le obligamos a que tenga raza la mascota
        }
    }
};