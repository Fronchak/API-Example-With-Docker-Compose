const { DataTypes } = require('sequelize');
const conn = require('../database/conn');

const Employee = conn.define('Employee', {
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING
    }
});

module.exports = Employee;