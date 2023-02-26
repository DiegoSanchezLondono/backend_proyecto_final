
const Video = require('../models/video');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const authConfig = require('../config/auth');

const VideosController = {};

VideosController.newVideo = async (req, res) => {

    try {
        let video = await Video.create({
           title: req.body.title,
           fecha: new Date (req.body.fecha)
        })

        if (video) {
            res.send({ "Message": `El video ${video.title} se ha añadido con éxito` })
        }
    } catch (error) {
        res.send({ "message": `Hubo un error al registrar el video, intentelo de nuevo` })
    }

};
VideosController.getAllVideos = async (req, res) => {
    try {
        let result = await Video.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún video." })
        }
    } catch (error) {
        res.send({"message": `Ha habido algun error`});
        // console.log(error);
    }
}
VideosController.postVideoById = async (req, res) => {

      //Este id es el id que ha venido por parámetro en el endpoint (url)
      let _id = req.body._id;
      try {
          const _idok = await Video.find({_id: _id});
          res.send({ "Msg": _idok});
      
      } catch (error) {
          res.send({"Message": `No se han encontrado videos con este id ${_id}, Introduzca un id correcto`})
      }

};


//Exporto UsersController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = VideosController;