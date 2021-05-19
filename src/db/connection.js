// require('dotenv').config()
const sequelize = require('sequelize');

// const nomeDoBD = process.env['NOME_DO_BD'];
// const usuarioDoBD = process.env['USUARIO'];
// const senhaDoBD = process.env['SENHA'];
// const localDoBD = process.env['HOST'];

const nomeDoBD = 'bcbhcbhechwehch'
const usuarioDoBD = 'bcbhcbhechwehch'
const senhaDoBD = 'Kj488~6-tB6X'
const localDoBD = 'den1.mysql1.gear.host'

const conexao = new sequelize(nomeDoBD, usuarioDoBD, senhaDoBD, {
    host: localDoBD,
    dialect: 'mysql',
    timezone: '-03:00'
});

conexao.authenticate().then(() => {
    console.log('\n| foi possivel se conectar ao banco de dados');
}).catch((erro) => {
    console.log(`\n| Não foi possivel se conectar\n---> Erro: ${erro}`);
});

module.exports = conexao;