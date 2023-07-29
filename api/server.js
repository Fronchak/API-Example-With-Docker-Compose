const sequelize = require('./database/conn');
require('./models/employee');
const app = require('./app');
const PORT = 3000;

sequelize.sync({ alter: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log("SERVIDOR CRIADO COM SUCESSO!");
            console.log('Server listen on port ' + PORT);
        })
    })
    .catch((e) => {
        console.log("ERRO AO CRIAR O SERVIDOR!");
        console.error(e);
    });