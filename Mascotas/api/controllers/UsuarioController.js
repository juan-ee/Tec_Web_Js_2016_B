/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

    crearUsuario: function (req, res) {
        if (req.method == "POST") {
            var parametros = req.allParams();
            if (parametros.nombres && parametros.apellidos) {
                Usuario.create({
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }).exec(function (error, usuarioCreado) {
                        if (error) return res.serverError()
                        sails.log.info(usuarioCreado);
                    })
                        
            }
        } else {

        }
    }
                        
};