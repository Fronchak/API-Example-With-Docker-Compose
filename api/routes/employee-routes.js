const { Router } = require('express');
const employeeController = require('../controllers/employee-controller');

const routes = Router();

routes.get('/', employeeController.findAll);
routes.get('/:id', employeeController.findById);
routes.post('/', employeeController.save);


module.exports = routes;