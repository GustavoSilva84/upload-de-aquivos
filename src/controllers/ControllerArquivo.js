const path = require('path')
const ModelPostagens = require('../model/ModelPostagens');
const fs = require('fs')

class ControllerArquivo {

    Form(req, res) {   
        res.render('form');
    } 

    async Criar(req, res) {

        if(req.file) {

            try {

                const dados = {
                    msg: req.body.titulo,
                    img: req.file.filename
                }

                await ModelPostagens.create(dados);
                res.send('criado com sucesso');

            }catch(erro) {
                res.send('Erro ao salvar a imagem');
            }
        
        }
        
    }

    async Mostrar(req, res) {

        try {

            const dados = await ModelPostagens.findAll();
            res.status(200).json(dados)

        }catch(erro) {
            res.send('Erro ao carregar potagens');
        }

    }

    Postagens(req, res) {
        console.log('\n\n\n' + path.resolve(__dirname, '..', '..', 'dados'));
        res.render('mostrar')
    }

    async Deletar(req, res) {

        try {

            const { id, url } = req.params;

            const posts = await ModelPostagens.destroy({ where: { id: id } })

            if(!posts) {
                return res.status(404).json({ erro: "Post não encontrado" })
            }

            console.log('\n\n\n hjhjhj' + path.resolve(__dirname, '..', '..', 'dados', `${url}`));
            fs.unlink(path.resolve(__dirname, '..', '..', 'dados', `${url}` ), () => {
                console.log('DELETADO')
            });

            res.status(200).json({ msg: "post deletado" })

        }catch(erro) {
            res.send({erro:'Erro ao deletar potagen'});
        }

        }
    
}
 
module.exports = new ControllerArquivo; 