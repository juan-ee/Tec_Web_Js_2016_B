module.exports = {

  attributes: {
      nombres:{
          type:'string',
          minLength:5
      },
      apellidos:{
          type:'string',
          minLength:5
      },
      correo:{
          type:'string',
          email:true,
          defaultsTo:'vacio@vacio.com'
      }
  }
};

