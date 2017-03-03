/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    home: function (req, res) {
        return res.view('vistas/home');
    },

    crearUsuario: function (req, res) {
        return res.view('vistas/Usuario/crearUsuario');
    },
    error: function (req, res) {
        return res.view('vistas/Error', {
            error: {
                desripcion: "Usted esta por error en esta Ruta dirijase a Inicio",
                rawError: "Ruta equivocada",
                url: "/Inicio"
            }
        });
    },
    listarUsuarios: function (req, res) {
        Usuario.find()
            .exec(function (errorIndefinido, usuariosEncontrados) {

                if (errorIndefinido) {
                    res.view('vistas/Error', {
                        error: {
                            desripcion: "Hubo un problema cargando los Usuarios",
                            rawError: errorIndefinido,
                            url: "/listarUsuarios"
                        }
                    });
                }

                res.view('vistas/Usuario/listarUsuarios', {
                    usuarios: usuariosEncontrados
                });
            })
    },
    editarUsuario: function (req, res) {
        //to do -> cargar usuario dependiendo del id
        var parametros = req.allParams();
        if (parametros.id) {
            Usuario.findOne({
                id: parametros.id
            }).exec(function (errorInesperado, UsuarioEncontrado) {
                if (errorInesperado) {
                    return res.view('vistas/Error', {
                        error: {
                            desripcion: "Error inesperado",
                            rawError: errorInesperado,
                            url: "/listarUsuarios"
                        }
                    });
                }
                if (UsuarioEncontrado) {
                    return res.view('vistas/Usuario/editarUsuario', {
                        usuarioAEditar: UsuarioEncontrado
                    })
                } else {
                    return res.view('vistas/Error', {
                        error: {
                            desripcion: "No existe el id",
                            rawError: "Usuario inexistente",
                            url: "/listarUsuarios"
                        }
                    });
                }
            })

        } else {
            return res.view('vistas/Error', {
                error: {
                    desripcion: "No se ha enviado el id",
                    rawError: "Faltan parametros",
                    url: "/listarUsuarios"
                }
            });
        }
    },
    logear:function(req,res){
      if(req.param('correo')){
        return res.view('login',req.allParams());
      }
      return res.view('login',{correo:undefined});
    },
//mascotas
  crearMascota: function (req, res) {
    Raza.find().exec(function (error, razasEncontrados) {
      if (error) return res.serverError();
      return res.view('mascota/crearMascota', {
        title: 'Crear Mascota',
        razas: razasEncontrados
      });
    });

  },
  editarMascota: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id) {
      Mascota.findOne({
        id: parametros.id
      }).exec(function (error, mascotaEncontrado) {
        if (error) return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'Fallo al buscar la mascota',
            url: '/crearMascotas'
          }
        });


        Raza.find().exec(function (error, razasEncontrados) {
          if (error) return res.view('error', {
            title: 'Error',
            error: {
              descripcion: 'Fallo al buscar la mascota',
              url: '/crearMascotas'
            }
          });

          return res.view('mascota/editarMascota', {
            title: 'Editar Mascota - ' + mascotaEncontrado.nombre,
            mascota: mascotaEncontrado,
            razas: razasEncontrados
          })
        });

      });

    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'No existe el ID'
        }
      });
    }
  },
  listarMascotas: function (req, res) {

    Mascota.find().exec(function (error, mascotasEncontrados) {
      if (error) return res.serverError()
      return res.view('mascota/listarMascotas', {
        title: 'Lista de Mascotas',
        mascotas: mascotasEncontrados
      })
    });
  },
  crearRaza: function (req, res) {


    return res.view('raza/crearRaza', {
      title: 'Crear Raza'
    })
  },
  listarRazas: function (req, res) {

    Raza.find().exec(function (error, razasEncontrados) {
      if (error) return res.serverError()
      return res.view('raza/listarRazas', {
        title: 'Lista de Razas',
        razas: razasEncontrados
      })
    });
  },
  editarRaza:function (req,res) {
      Raza.findOne({id:req.param('id')}).exec(function (err,encontrada) {
        return res.view('raza/editarRaza',{razaAEditar:encontrada});
    });
  }

};
