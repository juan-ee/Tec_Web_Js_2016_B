var Passwords = require('machinepack-passwords');

module.exports = {
    login: function (req, res) {
        //1. validar si se envian parametros
        //2. buscar por correo
        //3. comparar el password
        //4. entregar la credencial
        var param = req.allParams();
        if (param.correo && param.password) {
            Usuario.findOne({
                correo: param.correo
            }).exec(function (errorInesperado, usuarioEncontrado) {
                if (errorInesperado) {
                    return res.view('vistas/Error', {
                        error: {
                            desripcion: "Error inesperado del servidor",
                            rawError: errorInesperado,
                            url: "/Login"
                        }
                    });
                } else {
                    if (usuarioEncontrado) {
                        Passwords.checkPassword({
                            passwordAttempt: param.password,
                            encryptedPassword: usuarioEncontrado.password,
                        }).exec({
                            // An unexpected error occurred.
                            error: function (err) {
                                return res.view('vistas/Error', {
                                    error: {
                                        desripcion: "Error inesperado del servidor",
                                        rawError: errorInesperado,
                                        url: "/Login"
                                    }
                                });
                            },
                            // Password attempt does not match already-encrypted version
                            incorrect: function () {
                                return res.view('vistas/Error', {
                                    error: {
                                        desripcion: "Password incorrecta",
                                        rawError: "Error en la autenticacion",
                                        url: "/Login"
                                    }
                                });
                            },
                            // OK.
                            success: function () {
                                return res.ok("Credencial segura");
                            },
                        });
                    } else {
                        //undefined
                        return res.view('vistas/Error', {
                            error: {
                                desripcion: "No se encontro al usuario",
                                rawError: "No existe",
                                url: "/Login"
                            }
                        });
                    }
                }
            })
        } else {
            return res.view('vistas/Error', {
                error: {
                    desripcion: "Se necesitan los parametros",
                    rawError: "Fallo en envio de parametros",
                    url: "/Login"
                }

            });
        }

    }
};