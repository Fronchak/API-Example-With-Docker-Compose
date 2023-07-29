const { Sequelize } = require('sequelize');

const database = 'docker_employees';
const username = 'root';
const password = '12345678';

const sequelize = new Sequelize(database, username, password, {
    host: 'db',
    dialect: 'mysql'
});

module.exports = sequelize;