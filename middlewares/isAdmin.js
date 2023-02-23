
//Importo ../models/usuario' y lo asigno al modelo Usuario
const  User  = require('../models/user.js');

//Exporto la función middleware
 module.exports = (req, res, next) => {
    //Capturo la id de usuario que nos llega por body
      let id = req.user._id;

   //Busco en la tabla Usuarios..
    User.findOne({

        //..un usuario con esa id
       name : 'Diego'
       //Si lo encuentro..
    }).then(foundUser => {
       console.log(foundUser, 'Usuarioaaa');
       //..y su rol es admin...
        if(foundUser.rol == "admin"){

            //..finaliza el middleware y continuará ejecutando el endpoint donde lo pongamos
            next();
           //Si no es admin solo mostrará un mensaje y ese endpoint no se ejecuta
         }else {
             res.send(`Acceso Prohibido`)
        }
     }).catch(error => {
       console.log(error, 'errorrrrrrr');
         res.send(`Introduce un id de usuario valido`);
     })

};