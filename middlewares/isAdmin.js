//Importo ../models/usuario' y lo asigno al modelo Usuario
const  User  = require('../models/user.js');

//Exporto la función middleware
module.exports = (req, res, next) => {
     //Capturo el email de usuario que nos llega por body
       let _id = req.user._id;
    //Busco en la tabla Usuarios..
     User.find({
         //..un usuario con ese email
       id: _id
        //Si lo encuentro..
    }).then(foundUser => { 
// console.log(foundUser, 'patata');
        //..y su rol es admin...
         if(foundUser[0].rolId == '63fdf0deffab09e161f5bfb8'){
             //..finaliza el middleware y continuará ejecutando el endpoint donde lo pongamos
             next();
            //Si no es admin solo mostrará un mensaje y ese endpoint no se ejecuta
          }else {
              res.send({"message":`Acceso Denegado`})
         }
      }).catch(error => {
          res.send({"message": `Introduce un email de usuario valido`, error});
      })

};
