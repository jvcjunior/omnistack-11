const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const OngProfileController = require('./controllers/OngProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 *  Rota / Recurso
 */
 /**
  * Tipos de parametros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o simbolo de ? (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar 
  */

routes.post('/sessions', SessionController.index);
  
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', OngProfileController.index);

module.exports = routes;