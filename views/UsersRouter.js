
//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');


const UsersController = require('../controllers/UsersController');

//Endpoints

router.post("/register", UsersController.newUser); 
router.post("/login", UsersController.loginUser);

//Endpoints con middleware auth

router.get("/",auth, UsersController.getAllUsers);
router.put("/",auth, UsersController.updateUser);
router.delete("/", auth, UsersController.deleteUser);

//Endpoints con middleware auth/isAdmin






//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;