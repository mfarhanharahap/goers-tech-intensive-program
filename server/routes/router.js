const express = require('express');
const route = express.Router()

const controller = require('../controller/controller');
const services = require('../services/render');

/**
 * @description Root route
 * @method GET /
 */
route.get('/', services.homeRoutes);

/**
 * @description Root route
 * @method GET /
 */
route.get('/add-product', services.add_product);

/**
 * @description Root route
 * @method GET /
 */
route.get('/update-product', services.update_product);

// API
route.get('/api/products', controller.find);
route.post('/api/products', controller.create);
route.put('/api/products/:id', controller.update);
route.delete('/api/products/:id', controller.delete);

module.exports = route