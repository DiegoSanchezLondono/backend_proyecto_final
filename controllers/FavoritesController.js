const axios = require('axios');

const Favorite = require('../models/favorite');
const ObjectId = require('mongoose').Types.ObjectId;
const FavoritesController = {};


FavoritesController.newFavorite = async (req, res) => {
   
    try {
     let user;
     let pictogram;
        if(req.body.pictogramId){
            pictogram = await axios.get(`https://api.arasaac.org/api/pictograms/es/${req.body.pictogramId}`);
            user = await Favorite.create({
                userId: req.userId,
                videoId: req.body.videoId,
                pictogramId: req.body.pictogramId,
                pictogram: pictogram.data.keywords[0].keyword,
                date: new Date()
            })
        }
        else{ 
            
            user = await Favorite.create({
            userId: req.userId,
            videoId: req.body.videoId,
            date: new Date()
        })}
     
        if (user) {
            res.status(200).send({ "Message": `Ha sido añadido a favoritos con éxito` });
            
        }else {
            res.send({ "Message": `Ha habido un error al añadir a favoritos` });
        }
    } catch (error) {
        
        res.status(400).send({"message": `ha habido un error`, error})
    }

};
FavoritesController.getAllFavorites = async (req, res) => {
    try {
        let result = await Favorite.find({})
            .populate('userId')
            .populate('videoId')
            .populate('pictogramId')
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
        
        if(type == 'pictogram'){
            result = await Favorite.find({
                userId: ObjectId(req.userId),
                pictogramId: {$ne: null},
            })       
            .populate('userId')
            .populate('pictogramId')
        }else if(type == 'video'){
            result = await Favorite.find({
                userId: ObjectId(req.userId),
                videoId: {$ne: null},
            })
            .populate('userId')
            .populate('videoId')
        }else{
            result = await Favorite.find({
                userId: ObjectId(req.userId),
            })
            .populate('userId')
            .populate('videoId')
            .populate('pictogramId')
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
FavoritesController.getVideoUserFavorite = async (req, res) => {

}
FavoritesController.getPictogramUserFavorite = async (req, res) => {

}

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = FavoritesController;