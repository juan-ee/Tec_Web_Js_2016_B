/**
 * SaludoController
 *
 * @description :: Server-side logic for managing Saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	 json: function (req, res) {

        var parametros = req.allParams()

        if (req.method == 'GET') {

            res.json({
                    nombre: 'hola get',
                    para:parametros
                });


        } else {

            if (req.method == 'POST') {
                res.json({
                    nombre: 'hola post'
                });
            } else {
                res.json({
                    nombre: 'hola todos los demas'
                });
            }

        }

    },
    chao: function (req, res) {
        res.send('Chao!');
    },
    hola: function (req, res) {
        res.send('Hola');
    }
};

