const Employee = require('../models/employee');

class EmployeeController {

    async save(req, res) {
        try {
            const { firstName, lastName } = req.body;
            const employee = await Employee.create({
                firstName, lastName
            });
            console.log(employee);
            console.log(employee.dataValues);
            return res.status(201).json(employee.dataValues);
        }
        catch(e) {
            return res.status(400).json(e);
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const employee = await Employee.findByPk(id);
            if(employee) {
                return res.status(200).json(employee);
            }
            else {
                return res.status(404).json({
                    error: 'Entity not found',
                    message: 'Employee not found'
                });
            }
        }
        catch(e) {
            return res.status(400).json(e);
        }
    }

    async findAll(req, res) {
        try {
            const employees = await Employee.findAll();
            const data = employees.map((employee) => employee.dataValues);
            console.log(data);
            return res.status(200).json(data);
        }
        catch(e) {
            return res.status(400).json(e);
        }
    }
}

module.exports = new EmployeeController();