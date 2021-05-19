const connection = require('../db/connection')
const sequalize = require('sequelize');

const ModelPostagens = connection.define('postagens', {
    msg: {
        type: sequalize.TEXT,
        allowNull: false
    },
    img: {
        type: sequalize.TEXT,
        allowNull: false
    }
})




ModelPostagens.sync({ force: false }).then(() => {
    console.log(`\n| Tabela login criada com sucesso`);
}).catch((erro) => {
    console.log(`\n| Erro ao criar a tabela login\n ERRO: ${erro}`);
});

module.exports = ModelPostagens;