const express = require('express');
const path = require('path');
const morgan = require('morgan');

//inicializando servidor
const app = express();

//lo settings
app.set('port', process.env.PORT || 3000); // la razon por la cual ponemos process.env.PORT es para cuando se pone la api en servidor y no esta con el puerto 3000 entonces esto hace que se pongo en el puerto por defecto del servidor en el que estamos montando
app.set('views', path.join(__dirname, 'views')); //esto es para indicarle a express donde esta la carpeta views y tambien logicamente el app
app.set('views engine', 'ejs'); // motor de plantillas

//los Midlewares
app.use(morgan('dev'));// para mostrar los que nos estan enviado el cliente como un get o post o put o delete
app.use(express.urlencoded({extended: false}));

//Routes
app.use(require('./routes/entries.routes'));

//404 error
app.use(function(require, response){
    response.status(404).render('404.ejs');
});

//Ejecutar el servidor
app.listen(app.get('port'), function(req, res){
    console.log('Corriendo Servidor', app.get('port'));
});