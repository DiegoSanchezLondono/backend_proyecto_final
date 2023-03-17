
const Favorite = require('../models/favorite');
const ObjectId = require('mongoose').Types.ObjectId;
const FavoritesController = {};


FavoritesController.newFavorite = async (req, res) => {
   
    try {

        let user = await Favorite.create({
            userId: req.userId,
            videoId: req.body.videoId,
            pictogramId: req.body.pictogramId,
            date: new Date()
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
FavoritesController.getAllFavorites = async (req, res) => {
    try {
        let result = await Favorite.find({})
            .populate('userId')
            .populate('videoId')
        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún usuario." })
        }
    } catch (error) {
        res.send({"message": `Ha habido algun error`});
    }
}
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