
//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');


const PictogramsController = require('../controllers/PictogramsController');

//Endpoints

router.post("/register", PictogramsController.newPictogram); 
router.get("/pictograms", PictogramsController.getAllPictograms);
router.post("/pictogram/id",PictogramsController.postPictogramById);