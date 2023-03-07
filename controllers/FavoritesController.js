
const Favorite = require('../models/favorite');
const ObjectId = require('mongoose').Types.ObjectId;
const FavoritesController = {};


FavoritesController.newFavoritePictogram = async (req, res) => {
   
    try {

        let user = await Favorite.create({
            userId: req.userId,
            pictogramId: req.body.idPictogram,
        })

        if (user) {
            res.status(200).send({ "Message": `Ha sido añadido a favoritos con éxito` });
            
        }else {
            res.send({ "Message": `Ha habido un error al añadir a favoritos` });
        }
    } catch (error) {
        
        res.status(404).send({"message": `ha habido un error`, error})
    }

};

FavoritesController.newFavoriteVideo = async (req, res) => {
   
    try {

        let user = await Favorite.create({
            userId: req.userId,
            videoId: req.body.idVideo,
        })

        if (user) {
            res.status(200).send({ "Message": `Ha sido añadido a favoritos con éxito` });
            
        }else {
            res.send({ "Message": `Ha habido un error al añadir a favoritos` });
        }
    } catch (error) {
        
        res.status(404).send({"message": `ha habido un error`, error})
    }

};

FavoritesController.getAllFavoritesUser = async (req, res) => {

    try {
        let {type} = req.query;
        let result = [];
        // console.log(type);
        if(type == 'pictogram'){
            result = await Favorite.find({
                userId: ObjectId(req.userId),
                pictogramId: {$ne: null},
            })
        }else if(type == 'video'){
            result = await Favorite.find({
                userId: ObjectId(req.userId),
                ideoId: {$ne: null},
            })
        }else{
            result = await Favorite.find({
                userId: ObjectId(req.userId),
            })
        }
        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún favorito." })
        }

    } catch (error) {
        console.log(error);
    }
}
FavoritesController.postUserFavorites = async (req, res) => {
    let id = req.body.id
    try{

        let result = await Favorite.find({userId: id})

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