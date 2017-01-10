/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    crearUsuario: function (req, res) {
        //se accede /Usuario/crearUsuario
        Usuario.create({
            nombres: 'Finn Jose',
            apellidos: 'Icaza',
            correo: 'asdad'
        }).exec(function (err, usuarioCreado) {
            if (err) {
                return res.serverError(err);
            }
            sails.log('Usuario creado\'s ', usuarioCreado);
            return res.ok(usuarioCreado);
        });
    }

};