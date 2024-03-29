
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const authConfig = require('../config/auth');


const UsersController = {};

UsersController.getAllUsers = async (req, res) => {

    try {
        let result = await User.find({})
            .populate('rolId');
        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún usuario." })
        }
    } catch (error) {
        res.send({"message": `Ha habido algun error`});
    }
}
UsersController.updateUser = async (req, res) => {
    let email = req.body.email;
    let newName = req.body.name;

    try {
        let updated = await User.findOneAndUpdate(
            //Query de búsqueda....
            { email: email },
            //Campos a cambiar
            {
                name: newName

            }).setOptions({ returnDocument: 'after' })
        //con setOptions en este caso voy a exigir que me devuelva el documento modificado

        if (updated) {
            res.send({"message": `Usuario actualizado con éxito`})
        }
    } catch (error) {
        res.send({"message": `Ha habido algun error`});
        // console.log("Error updating user data", error);
    }
}
UsersController.deleteUser = async (req, res) => {

    let _id = req.params._id;

    try {
        
            let deleted = await User.findOneAndDelete({
                _id: _id
            })
            if(!deleted){
                return res.send({message: 'Usuario no encontrado'})
            }else{
                res.send({message: 'Usuario eliminado con exito'})
            }
    } catch (error) {
        console.log("Error al eliminar el usuario", error);

    }

};
UsersController.newUser = async (req, res) => {

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.ROUNDS));
    try {
        rolId = req.body.rol = '63fe256905e1433d4e79ea39';
        let user = await User.create({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: password,
            country: req.body.country,
            rolId: rolId
        })
        if (user) {
          
            res.send({ "Message": `El usuario ${user.name} ${user.surname} se ha añadido con éxito` })
        }

    } catch (error) {
        res.send({ "message": `Hubo un error al registrar al usuario, intentelo de nuevo` })
    }

};
UsersController.loginUser = async (req, res) => {

    try {

        let userFound = await User.find({
            email: req.body.email
        })
        if (userFound) {
            if (userFound[0].email === undefined) {
                //No hemos encontrado al usuario...mandamos un mensaje
                res.send({"message":`Usuario o password incorrectos`});
            } else {

                //Hemos encontrado al usuario, vamos a ver si el pass es correcto

                if (bcrypt.compareSync(req.body.password, userFound[0].password)) {

                    let token = jsonwebtoken.sign({ usuario: userFound }, authConfig.SECRET, {
                        expiresIn: authConfig.EXPIRES
                    });

                    let loginOk = `Bienvenido de nuevo ${userFound[0].name}`;
                    res.json({
                        loginOk,
                        //user: userFound,
                        token: token
                    })

                } else {

                    res.send({"message":`Usuario o password incorrectos`});
                }
            }

        }
    } catch (error) {
        res.send({"message":`Email o password incorrectos`});
    }
}

//Exporto UsersController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = UsersController;