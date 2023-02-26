

//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');


const RolesController = require('../controllers/RolesController');

//Endpoints con middleware auth/isAdmin

router.get("/",auth, isAdmin, RolesController.getAllRoles);
router.get("/",auth, RolesController.rolAdmin);

//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;