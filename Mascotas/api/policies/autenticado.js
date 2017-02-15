module.exports = function(req, res, next) {

  // next es un callback
  if (req.session.credencialSegura) {
    return next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('Ustede no puede entrar a esta vista');
};
