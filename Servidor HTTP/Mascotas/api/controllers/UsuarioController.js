/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    crearUsuario: function (req, res) {
        //se accede /Usuario/crearUsuario
        var parametros = req.allParams();
        sails.log(parametros);

        if (parametros.nombres && parametros.apellidos) {
            Usuario.create({
                nombres: parametros.nombres,
                apellidos: parametros.apellidos,
                correo: parametros.correo
            }).exec(function (err, usuarioCreado) {
                if (err) {
                    return res.serverError(err);
                }
                sails.log('Usuario creado\'s ', usuarioCreado);
                return res.ok(usuarioCreado);
            });
        } else {
            return res.badRequest('No envias todos los parametros');
        }



    }

};