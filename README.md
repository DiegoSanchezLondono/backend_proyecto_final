
# BASE DE DATOS #

## PROYECTO ##
- Este proyecto se basa en realizar una API que contenga usuarios,pictogramas,videos y favoritos. Se ha utilizado Nodoe.js con Express y Javascript. Me he decantado por desarrollar una API limpia y sencilla, facil de usar.
- En esta API tanto los usuarios No registrados como los que ya tienen una cuenta en la app pueden acceder a los pictogramas y videos, teniendo en cuenta que solo los que se crean un perfil personal pueden guardar en favoritos sus viodeos y/o pictogramas para asi tener un acceso mas directo a ellos..

## PROCESO ##
- Desarrollo principal de la idea.
- Creación de la base de datos con sus diferentes colecciones (usuarios,roles, pictogramas, videos y favoritos).
- Se lleva a cabo la organización de los roles.
- Se lleva a cabo la organización de los usuarios.
- Se lleva a cabo la organización de los pictogramas.
- Se lleva a cabo la organización de los videos.
- Se lleva a cabo la organización de los favoritos.
- últimas pinceladas para dejar finiquitado el trabajo, aun queda mucho por mejorar.

#### Endpoints coleccion Usuarios ####

###### Con los siguientes Endpoints el usuario podrá registrarse ######
- router.post("/register", UsersController.newUser); Con este Endpoint el usuario tendrá la posibilidad de registrarse para poder tener un perfil personal.
http://localhost:5500/users/register

###### Con los siguientes Endpoints el usuario podrá loguearse y hacer varias tareas ######
- router.post("/login", UsersController.loginUser); Con este Endpoint el usuario podra loguearse.
http://localhost:5500/users/login
- router.put("/",auth, UsersController.updateUser); Con este Endpoint el usuario podra modificar sus datos, por ejemplo su apellido o email.
http://localhost:5500/users

###### los siguientes Endpoints son para uso único del Administrador ######
- router.get("/",auth, isAdmin, UsersController.getAllUsers); Con este Endpoint el Administrador podrá ver todos los usuarios de la BD.
http://localhost:5500/users
- router.delete("/",auth, isAdmin, UsersController.deleteUser); Con este Endpoint el Administrador podrá eliminar la cuenta de un usuario que infringen las condiciones de la app.
http://localhost:5500/users

#### Endpoints coleccion Roles ####

###### El siguiente Endpoint es para uso único del Administrador ######
- router.post("/register",auth, isAdmin, RolesController.newRol); Con este Endpoint el Administrador podrá crear un nuevo rol si lo viese necesario.
http://localhost:5500/roles/register

#### Endpoints coleccion Pictogramas ####

######  Con los siguientes Endpoints el usuario (Admin/Usuario General) podrá hacer varias tareas ######
- router.post("/register",auth, isAdmin, PictogramsController.newPictogram);  Con este Endpoint el Administrador podrá crear un nuevo pictograma, Los pictogramas se traen de una API externa de ARASAAC.
http://localhost:5500/pictograms/register
- router.get("/",auth, PictogramsController.getAllPictograms); Con este Endpoint el usuario podrá ver todos los pictogramas, Los pictogramas se traen de una API externa de ARASAAC.
http://localhost:5500/pictograms
- router.post("/data_id",auth, PictogramsController.postPictogramById); Con este Endpoint el usuario podrá buscar los pictogramas por id, Los pictogramas se traen de una API externa de ARASAAC.
http://localhost:5500/pictograms/data_id

#### Endpoints coleccion Videos ####

######  Con los siguientes Endpoints el usuario (Admin/Usuario General) podrá hacer varias tareas ######
- router.post("/register",auth, isAdmin, VideosController.newVideo); Con este Endpoint el Administrador podrá crear un nuevo video, Las URL de los videos se copian de YOUTUBE.
http://localhost:5500/videos/register
- router.get("/",auth, VideosController.getAllVideos);  Con este Endpoint los usuarios podrá ver todos los videos, Las URL de los videos se copian de YOUTUBE.
http://localhost:5500/videos
- router.delete("/",auth, isAdmin, VideosController.deleteVideo);  Con este Endpoint el Administrador podrá eliminar un video, Las URL de los videos se copian de YOUTUBE.
http://localhost:5500/videos


#### Endpoints coleccion Favoritos ####

######  Con los siguientes Endpoints el usuario (Admin/Usuario General) podrá hacer varias tareas ######
- router.post("/pictogram", auth, FavoritesController.newFavoritePictogram); Con este Endpoint el usuario podrá agregar un pictograma a su lista de favoritos, Los pictogramas se traen de una API externa de ARASAAC.
http://localhost:5500/favorites/pictogram
- router.post("/video", auth, FavoritesController.newFavoriteVideo); Con este Endpoint el usuario podrá agregar un video a su lista de favoritos, Las URL de los videos se copian de YOUTUBE.
http://localhost:5500/favorites/video
- router.get("/", auth, FavoritesController.getAllFavoritesUser); Con este Endpoint el usuario podrá ver su lista de favoritos tanto de videos como de pictogramas, especificando el tipo, si es video o pictograma, todo por params. Las URL de los videos se copian de YOUTUBE y Los pictogramas se traen de una API externa de ARASAAC.
http://localhost:5500/favorites?type=pictogram
http://localhost:5500/favorites?type=video


## OBJETIVO ##
- Se pretende mejorar la API a medida que vamos avanzando en el curso, con un objetivo final de ser utilizado por usuarios reales.

## AUTOR ##
- Diego Sánchez Londoño 