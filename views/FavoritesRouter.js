
//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');

const FavoritesController = require('../controllers/FavoritesController');

//Endpoints

router.post("/", auth, FavoritesController.newFavorite);
router.get("/", auth, FavoritesController.getAllFavorites);
router.post("/userFavorites/:id", auth, FavoritesController.postUserFavorites);
// router.get("/video", auth, FavoritesController.getVideoUserFavorite);
// router.get("/pictogram", auth, FavoritesController.getPictogramUserFavorite);

//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;