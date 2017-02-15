/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var Passwords = require('machinepack-passwords');

module.exports = {

    attributes: {
        nombres: {
            type: 'string',
            minLength: 5,
            required: true
        },
        apellidos: {
            type: 'string',
            minLength: 5,
            required: true
        },
        correo: {
            type: 'string',
            email: true,
            required:true,
            unique:true
        },
        password: {
            type: 'string',
            defaultsTo: '123'
        }
    },
    beforeCreate: function (values, cb) {        
        //cb(123) //Error         
        // Encrypt a string using the BCrypt algorithm.
        Passwords.encryptPassword({
            password: values.password
        }).exec({
            // An unexpected error occurred.
            error: function (err) {
                cb(err);
            },
            // OK.
            success: function (result) {
                //igualamos el password al resultado
                values.password = result;
                cb(); //OK
            }
        });
    },
    beforeUpdate: function (values, cb) {
        if (values.password) {            
            //cb(123) //Error         
            // Encrypt a string using the BCrypt algorithm.
            Passwords.encryptPassword({
                password: values.password
            }).exec({
                // An unexpected error occurred.
                error: function (err) {
                    cb(err);
                },
                // OK.
                success: function (result) {
                    //igualamos el password al resultado
                    values.password = result;
                    cb(); //OK
                }
            });
        } else {
            cb();
        }
    }

};