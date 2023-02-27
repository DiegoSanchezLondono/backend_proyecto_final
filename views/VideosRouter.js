
//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');


const VideosController = require('../controllers/VideosController');

//Endpoints

router.post("/id",VideosController.postVideoById);

//Endpoints con middleware auth

router.post("/register",auth, VideosController.newVideo); 
router.get("/",auth, VideosController.getAllVideos);


//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;