
const Video = require('../models/video');

const VideosController = {};

VideosController.newVideo = async (req, res) => {

    try {
        let video = await Video.create({
           title: req.body.title,
           summary: req.body.summary,
           url: req.body.url
        })

        if (video) {
            res.send({ "Message": `El video ${video.title} se ha añadido con éxito` })
        }
    } catch (error) {
        res.send({error,  "message": `Hubo un error al registrar el video, intentelo de nuevo` })
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
VideosController.getVideosByTitle = async (req, res) => {
    // Person.find({ "name": { "$regex": "Alex", "$options": "i" } },
    const title = req.params.title;
    try {
        const foundVideos = await Video.find({
            'title' :{"$regex": title, "$options": "i"},

        })
        if(foundVideos.length === 0){
            res.send({"message": `El video ${title} no se ha encontrado, compruebe que este bien escrito el nombre`});
        }else{
            res.send(foundVideos)
        }
    } catch (error) {
        console.log(error)
    }
}
VideosController.deleteVideo = async (req, res) => {
    let _id = req.body._id;

    try {
        
        let result = await Video.findByIdAndDelete(_id);

        res.send({"Message": `El video ${result.title} se ha eliminado con éxito`})
        
    } catch (error) {
        res.send({"message": `Error al eliminar el video`, error});
       
    }
}

//Exporto UsersController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = VideosController;