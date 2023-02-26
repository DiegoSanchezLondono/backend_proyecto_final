
//Importo método router() de la clase express
const router = require ('express').Router();

const UsersRouter = require('./views/UsersRouter');
const RolesRouter = require('./views/RolesRouter');
const PictogramsRouter = require('./views/PictogramsRouter');
const VideosRouter = require('./views/VideosRouter');

router.use("/users", UsersRouter);
router.use("/roles", RolesRouter);
router.use("/pictograms", PictogramsRouter);
router.use("/videos", VideosRouter);

//Exporto router
module.exports = router;