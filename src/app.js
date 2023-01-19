//Importo Express + ejecución de Express
const Express = require('express');
const app = Express();

/*  ROUTERS  */
const apiRouter = require('./routes/apiRouter');

//Sets

/*  Data por url  */ 
app.use(express.urlenconded({extends: false}));

/* Json method */
app.use(express.json());

/* Method override */ 
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

/* Cookie-parser */
const cookies = require('cookie-parser');
app.use(cookies());

/* Session */  
const session = require('express-session');
app.use(session({secret:'SECRET', resave:false, saveUninitialized:false}));


/* Middlewares */

/* Rutas */ 
app.use('/api', apiRouter);

/* ERROR 404 */


/* Servidor UP 404 */
app.listen(process.env.PORT || 3010, function() {
    console.log("Servidor corriendo en el puerto 3010")
});