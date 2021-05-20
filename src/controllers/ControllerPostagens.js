const path = require('path')
const ModelPostagens = require('../model/ModelPostagens');
const fs = require('fs')

class ControllerPostagens {

    async Criar(req, res) {

        if(req.file) {

            try {

                await ModelPostagens.create({ msg: req.body.titulo, img: req.file.filename });
                return res.redirect('/posts');

            }catch(erro) {

                return res.status(401).json({ msg: 'Erro ao salvar imagem' });

            }
        
        }

        return res.status(401).json({ msg: 'Você so pode enviar imagens' });
        
    }

    async Mostrar(req, res) {

        try {

            const dados = await ModelPostagens.findAll();
            return res.status(200).json(dados);

        }catch(erro) {

            return res.status(401).json({ msg: 'Erro ao buscar imagem' });

        }

    }

    async Deletar(req, res) {

        try {

            const { id, url } = req.params;
            const posts = await ModelPostagens.destroy({ where: { id: id } });
            
            if(!posts) return res.status(404).json({ erro: "Post não encontrado  0 00" });

            fs.unlink(path.resolve(__dirname, '..', '..', 'dados', `${url}`));
            res.status(200).json({ msg: "post deletado" });

        }catch(erro) {
            res.status(401).send({ msg: "Erro ao deletar potagen" });
        }

    }
    
}
 
module.exports = new ControllerPostagens; 