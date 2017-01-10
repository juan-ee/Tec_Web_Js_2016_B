/**
 * Raza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        nombre: {
            type: 'string',
            enum: ['pitbull', 'labrador', 'golden'],
            required: true //solo un registro de cada una de las razass
        },        
        mascotas:{//Nombre en plural del modelo a relacionarse
            //Collection -> nombre del modelo en sails
            collection:'mascota', //Esta relacionado con algo
            //Via es el campo por el cual vamos a relacionar: [FOREIGN KEY]
            via:'id_raza'
        }
    }
};