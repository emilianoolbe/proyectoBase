/*  Importo express + ejecución Router */
const express = require('express');
const router = express.Router();

/*  CONTROLLER  */
const apiController = require('../controllers/apiController');

/*  Middlewares  */

/* rutas */
router.get('/all', apiController.all);
module.exports = router;