
const Favorite = require('../models/favorite');

// const jsonwebtoken = require('jsonwebtoken');

// const authConfig = require('../config/auth');

const FavoritesController = {};


FavoritesController.newFavorite = async (req, res) => {

    try {

        let user = await Favorite.create({
            userId: req.body.idUser,
            pictogramId: req.body.idPictogram,
            videoId: req.body.idVideo,
            fecha: new Date (req.body.fecha)
        })

        if (user) {
            res.send({ "Message": `Ha sido añadido a favoritos con éxito` });

        }else {
            res.send({ "Message": `Ha habido un error al añadir a favoritos` });
        }
    } catch (error) {
        console.log(error)
    }

};
FavoritesController.getAllFavorites = async (req, res) => {

    try {

        let result = await Favorite.find({})
             .populate('userId')
             .populate('pictogramId')
             .populate('videoId');

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún favorito." })
        }

    } catch (error) {
        console.log(error);
    }
}
FavoritesController.getUserFavorites = async (req, res) => {
    let id = req.params.id
    try{

        let result = await Favorito.find({userId: id})

        if (result.length > 0){
            res.send(result)
        }else{
            res.send({"message": 'No se ha agregado nada a favoritos'})
        }
    }catch (error) {
        console.log(error)
    }
}
//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = FavoritesController;