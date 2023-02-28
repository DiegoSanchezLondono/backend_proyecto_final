
//Importo ../models/usuario' y lo asigno al modelo Usuario
const  User  = require('../models/user.js');

//  //Exporto la función middleware
  module.exports = (req, res, next) => {
     //apturo la id de usuario que nos llega por body
       let rolId = req.user._id;

    //busco en la tabla Usuarios..
     User.findOne({

         //.un usuario con esa id
       //_id : "63f7b8a0219aebfb14390b9c"
         //esta _id es la que saco de la bbdd y que diferencia 
         //el admin de los demas 
          rolId : rolId
//         //Si lo encuentro..
      }).then(foundUser => {
//         //..y su rol es admin...
          if(foundUser.rol === rolId){
            //aqui va el Id que crea mongoose

//              //..finaliza el middleware y continuará ejecutando el endpoint donde lo pongamos
              next();
//             //Si no es admin solo mostrará un mensaje y ese endpoint no se ejecuta
           }else {
               res.send(`Acceso Prohibido`)
          }
       }).catch(error => {
           res.send({"message": `Introduce un id de usuario valido`, error});
       })
};

// //Importo la clase jsonwebtoken
// const jsonwebtoken = require('jsonwebtoken');

// //Importo el fichero de configuración ../config/auth para darle los parámetros de encriptado al token
// const authConfig = require('../config/auth');

// //Exporto la función middleware.
// //Además de req y res, tiene el argumento 'next' para saber cuándo la función ha terminado exitosamente
// // y el endpoint que estemos limitando con 'isAdmin' puede continuar
// // para ejecutar lo que tiene después (su función controladora)
// module.exports = (req, res, next) => {
   
//     // Comprueba si el header (metadatos de la página o si lo hacemos por Postman, está en el authorization) tiene el token
//     if(!req.headers.authorization) {
//         //Si no lo tiene, no dejará ejecutar la función controladora del endpoint (ver en usuarioRouter) y envía un mensaje de que no hay acceso
//         res.status(401).json({ msg: "Acceso o peticion no autorizado, debe registrarse para poder finalizar la peticion" });
//     } else {
//         // Si lo tiene, Lo extrae
//         let token = req.headers.authorization.split(" ")[1];

//         // Y comprueba su validez usando la clave de encriptación que tenemos en ../config/auth
//         jsonwebtoken.verify(token, authConfig.SECRET, (error, decoded) => {
//             //Si la validación es incorrecta...
//             if(error) {
//                 //...devuelve un error
//                 res.status(500).json({ msg: "Ha ocurrido un problema al decodificar el token", error });
                
//             }//Si la validación es correcta...
//             if (decoded === "admin"){
                    
//                 //Activa el next() del middleware que actúa como un return, haciendo el que continúe en el endpoint donde lo metimos, y ejecutando así su función controladora
//                 next();
//             }
//             else {
//                 res.status(401).json({"message": `No puede ejecutar dicha accion`, error})
//             }
                 
//         })
//     }