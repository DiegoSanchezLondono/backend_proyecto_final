
//Importo ../models/usuario' y lo asigno al modelo Usuario
const  User  = require('../models/user.js');

//Exporto la función middleware
 module.exports = (req, res, next) => {
    //Capturo la id de usuario que nos llega por body
      let id = req.user.id;

   //Busco en la tabla Usuarios..
    User.findOne({

        //..un usuario con esa id
      //  name : 'Diego'
      id : id
       //Si lo encuentro..
    }).then(foundUser => {
       //..y su rol es admin...
        if(foundUser[0].rol == "admin"){

            //..finaliza el middleware y continuará ejecutando el endpoint donde lo pongamos
            next();
           //Si no es admin solo mostrará un mensaje y ese endpoint no se ejecuta
         }else {
             res.send({"message":`Acceso Prohibido`})
        }
     }).catch(error => {
         res.send({"message":`Introduce un id de usuario valido`});
     })

};