
//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');


const PictogramsController = require('../controllers/PictogramsController');

router.post("/data_id",auth, PictogramsController.postPictogramById);

//Endpoints con middleware auth/isAdmin

router.post("/register",auth, isAdmin, PictogramsController.newPictogram); 
router.get("/",auth, PictogramsController.getAllPictograms);


//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;