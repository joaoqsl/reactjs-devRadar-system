const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SaerchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
// routes.put('/devs/:cd', DevController.update);

routes.get('/search', SaerchController.index);

module.exports = routes;