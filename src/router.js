const express = require('express')
const router = express.Router();

const ControllerPostagens = require('./controllers/ControllerPostagens');
const ControllerPaginas = require('./controllers/ControllerPaginas');

const upload = require('./middleware/MiddlewareMulter')
 
router.get('/form', ControllerPaginas.Form);
router.get('/posts', ControllerPaginas.Postagens);

router.post('/postagens', upload.single('img'), ControllerPostagens.Criar); 
router.get('/postagens', ControllerPostagens.Mostrar);
router.delete('/postagens/:id/:url', ControllerPostagens.Deletar);

module.exports = router;