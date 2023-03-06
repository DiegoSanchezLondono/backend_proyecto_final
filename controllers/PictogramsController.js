
const Pictogram = require('../models/pictogram');
const PictogramsController = {};

PictogramsController.dataPictograms = async () => {
    
    // let val = _id//id
        // fetch(`https://api.arasaac.org/api/pictograms/${val}`)
        fetch(`https://api.arasaac.org/api/pictograms/_id`)
        .then(res => res.json()) //aqui convierto el archivo a json
        .then(data => { //aqui iteramos e imprimimos por consola los datos 
            data.forEach(pictogram => {
                let patata = {pictogram : pictogram._id}
                console.log(pictogram._id);
                PictogramsController.newPictogram(patata);
            })
            
        })
        .catch(error => console.log('Solicitud Fallida', error));
};
PictogramsController.newPictogram = async (req, res) => {

    try {
        req.forEach(pictogram => {
            console.log(pictogram, 'hola estamos aqui')
            Pictogram.create(patata)
        })
            if (Pictogram) {
                res.send({ "Message": `El pictograma ${Pictogram.keyword} se ha añadido con éxito` })
            }else {
                res.send({"Message": "No hemos encontrado el pictograma a añadir"});
            }
        }catch (error) {
        res.send({ "message": `No puede ejecutar esta acción` })
    }

};

PictogramsController.getAllPictograms = async (req, res) => {
    try {
      const pictograms = await Pictogram.find();
      res.status(200).json(pictograms);
    } catch (error) {
      console.log(error);
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