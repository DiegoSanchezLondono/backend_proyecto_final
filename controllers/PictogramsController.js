
const Pictogram = require('../models/pictogram');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const authConfig = require('../config/auth');

const PictogramsController = {};

PictogramsController.newPictogram = async (req, res) => {

    try {
        let pictogram = await Pictogram.create({
            keyword: req.body.keyword,
            meaning: req.body.meaning,
            categories: req.body.categories,
            tags: req.body.tags
        })

        if (pictogram) {
            res.send({ "Message": `El pictograma ${pictogram.keyword} se ha añadido con éxito` })
        }
    } catch (error) {
        res.send({ "message": `Hubo un error al registrar el pictograma, intentelo de nuevo` })
    }

};
PictogramsController.getAllPictograms = async (req, res) => {
    try {
        let result = await Pictogram.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún usuario." })
        }
    } catch (error) {
        res.send({"message": `Ha habido algun error`});
        // console.log(error);
    }
}
PictogramsController.postPictogramById = async (req, res) => {

      //Este id es el id que ha venido por parámetro en el endpoint (url)
      let _id = req.body._id;
      try {
          const _idok = await Pictogram.find({_id: _id});
          res.send({ "Msg": _idok});
      
      } catch (error) {
          res.send({"Message": `No se han encontrado pictrogramas con este id ${_id}, Introduzca un id correcto`})
      }

};


//Exporto UsersController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = PictogramsController;