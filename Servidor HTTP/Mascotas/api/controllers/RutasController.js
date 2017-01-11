/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    home: function (req, res) {
        return res.view('vistas/home',{
            titulo:'Inicio',
            numero:1,
            lucho:{
                nombre:'Luis',
                cedula:11112333
            }
        })
    }
};