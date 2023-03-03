
require ('dotenv').config()
const { URL } = require('../config/auth')
const dbconnect = () => {

    //Importo mongoose
    const mongoose = require("mongoose");

    //Seteamos strictQuery a true para suprimir el warning de strictQuery
    mongoose.set('strictQuery', true);

    //URI
    //const conn_str = process.env.URI;
    const conn_str = URL;

    mongoose.connect(
        conn_str,
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        },(err) => {
            if (err) {
                console.log("error sl conectarse a la BD",err);
            } else {
                console.log("BD de mongodb esta conectada correctamente");
        }});


}

module.exports = dbconnect;