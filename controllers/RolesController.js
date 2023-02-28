
const Role = require('../models/role');
const bcrypt = require('bcrypt');

const authConfig = require('../config/auth');

const RolesController = {};

RolesController.getAllRoles = async (req, res) => {
    let rol = req.body.rol;
    try {
        let rol = await rol.find({});
        if (rol !== '') {
            res.send(rol)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún usuario con ese Rol." })
        }
    } catch (error) {
        res.send({ "message": `Ha habido algun error` });
         // console.log(error);
    }
}
RolesController.newRol = async (req, res) => {
    
    try {
        let rol= await Role.create({
            rol: req.body.rol
        })

        if (rol) {
            res.send({ "Message": `El rol ${rol.rol} se ha añadido con éxito` })
        }

    } catch (error) {
        res.send({ "message": `Hubo un error al registrar el rol, intentelo de nuevo` })
    }

};


//Exporto UsersController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = RolesController;