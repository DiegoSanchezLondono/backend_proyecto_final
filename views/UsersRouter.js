
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
router.put("/",auth, UsersController.updateUser);

//Endpoints con middleware auth/isAdmin
router.get("/",auth, isAdmin, UsersController.getAllUsers);
router.delete("/",auth, isAdmin, UsersController.deleteUser);





//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;