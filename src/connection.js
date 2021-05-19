const { Model } = require('sequelize');
const sequelize = require('sequelize');

const conexao = new sequelize('bcbhcbhechwehch', 'bcbhcbhechwehch', 'Kj488~6-tB6X', {
    host: 'den1.mysql1.gear.host',
    dialect: 'mysql',
    timezone: '-03:00'
});

conexao.authenticate().then(() => {
    console.log('\n| foi possivel se conectar ao banco de dados');
}).catch((erro) => {
    console.log(`\n| Não foi possivel se conectar\n---> Erro: ${erro}`);
});

module.exports = conexao;