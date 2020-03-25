const routes = require('express').Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfilleController = require('./controllers/ProfilleController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profille', ProfilleController.index);

module.exports = routes;
