
const Pictogram = require('../models/pictogram');
const PictogramsController = {};


PictogramsController.newPictogram = async (req, res) => {

    try {
        let pictogram = await Pictogram.create({
            data_id: req.body.data_id,
            keyword: req.body.keyword,
            meaning: req.body.meaning,
            categories: req.body.categories,
            tags: req.body.tags
        })
 
            if (pictogram) {
                res.send({ "Message": `El pictograma ${pictogram.data_id} se ha añadido con éxito` })
            }else {
                res.send({"Message": "No hemos encontrado el pictograma a añadir"});
            }
        }catch (error) {
        res.send({ "message": `No puede ejecutar esta acción` })
    }

};

PictogramsController.getAllPictograms = async (req, res) => {

        try {
            let result = await Pictogram.find({});
    
            if (result.length > 0) {
                res.send(result)
            } else {
                res.send({ "Message": "Lo sentimos, no hemos encontrado ningún pictograma." })
            }
        } catch (error) {
            res.send({"message": `Ha habido algun error`});
            // console.log(error);
        }
  };
// PictogramsController.getAllPictograms = async (req, res) => {
//     try {
//     //      let result = await Pictogram.find({})
           
//     //     if (result.length > 0) {
//     //          res.send(result)
//     //      } else {
//     //          res.send({ "Message": "Lo sentimos, no hemos encontrado ningún pictograma." })
//     //      }

//     // } catch (error) {
//     //     res.send({"message": `Ha habido algun error`});
//     //     // console.log(error);
//     // }
//     console.log('aqui entra',req.query)
//     const filter = {};

//     if(req.query._id) filter.title = req.query._id;

//     const resultado = await Pictogram.find(filter);

//     res.json(resultado);
// }catch(e){
//     res.json({error, "message": 'ha ocurrido un error'}); // es mejor que un console.log que solo lo ve el programador,
//     //el usuario necesita una respuesta
// }

// }
PictogramsController.postPictogramById = async (_id) => {

    return await axios.get(`https://api.arasaac.org/api/pictograms/${_id}`);
     
};


//Exporto UsersController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = PictogramsController;