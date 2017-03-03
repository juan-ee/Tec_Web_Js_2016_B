
module.exports = {
  crearMascota:function (req,res) {
    //todo corregir el formato de la fecha
    Mascota.create(req.allParams()).exec(function (err,mascotaCreada) {
      if(err){
        return res.view('vistas/Error', {
          error: {
            desripcion: "Se tuvo un error",
            rawError: err.message,
            url: "/crearMascota"
          }
        });
      }
      return res.redirect('/listarMascotas')
    });
  },
  borrarMascota:function(req,res){
    Mascota.destroy({id:req.param('id')}).exec(function (err,borrada) {
      return res.redirect('/listarMascotas');
    });
  },
  editarMascota: function (req, res) {
    Mascota.update({
      id: req.param('id')
    },req.allParams()).exec(function (errorInesperado, UsuarioRemovido) {
      if (errorInesperado) {
        return res.view('vistas/Error', {
          error: {
            desripcion: "Se tuvo un error",
            rawError: err.message,
            url: "/listarMascotas"
          }
        });
      }
      return res.redirect('/listarMascotas');
    })
  },
};

