
//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');

const FavoritesController = require('../controllers/FavoritesController');

//Endpoints

router.post("/pictogram", auth, FavoritesController.newFavoritePictogram);
router.post("/video", auth, FavoritesController.newFavoriteVideo);
router.get("/", auth, FavoritesController.getAllFavoritesUser);
router.post("/userFavorites/:id", auth, FavoritesController.postUserFavorites);

//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;