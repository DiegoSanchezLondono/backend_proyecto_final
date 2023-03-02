
//Importo clase express
const express=require('express');
//Importo métodos de express
const app=express();
const cors = require('cors');
const dbconnect = require("./db/dbconnect");

//Importo fichero ./router
const router = require('./router');

const PORT = 5500;

//Configuro cors
let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

//Middlewares
app.use(cors(corsOptions));
//Para poder usar json
app.use(express.json());

app.use(router);

//Me conecto a la base de datos
dbconnect();

const auth = require('./config/auth');
//levanto la API
app.listen(auth.PORT, () => console.log(`Node server running on http://localhost:${PORT}` ))



