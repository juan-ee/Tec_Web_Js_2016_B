/**
 * RazaController
 *
 * @description :: Server-side logic for managing Razas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  borrarRaza:function(req,res){
    Raza.destroy({id:req.param('id')}).exec(function (err,borrada) {
      return res.redirect('/listarRazas');
    });
  },
  editarRaza: function (req, res) {
      Raza.update({
        id: req.param('id')
      },{nombre:req.param('nombre')}).exec(function (errorInesperado, UsuarioRemovido) {
        if (errorInesperado) {
          return res.view('vistas/Error', {
            error: {
              desripcion: "Se tuvo un error",
              rawError: "Error inesperado",
              url: "/listarRazas"
            }
          });
        }
        return res.redirect('/listarRazas');
      })
  },
  crearRaza:function (req,res) {
    Raza.create(req.allParams()).exec(function (err,razaCreada) {
      if(err){
        return res.view('vistas/Error', {
          error: {
            desripcion: "Se tuvo un error",
            rawError: "Error inesperado",
            url: "/crearRaza"
          }
        });
      }
      return res.redirect('/listarRazas');
    })
  }

};

