
//Importo método router() de la clase express
const router = require ('express').Router();

const UsersRouter = require('./views/UsersRouter');
const RolesRouter = require('./views/RolesRouter');

router.use("/users", UsersRouter);
router.use("/roles", RolesRouter);

//Exporto router
module.exports = router;