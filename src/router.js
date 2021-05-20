const express = require('express')
const router = express.Router();
const ControllerArquivo = require('./controllers/ControllerArquivo')
const upload = require('./middleware/MiddlewareMulter')
 
router.get('/form', ControllerArquivo.Form);
router.get('/posts', ControllerArquivo.Postagens);

router.post('/postagens', upload.single('img'), ControllerArquivo.Criar); 
router.get('/postagens', ControllerArquivo.Mostrar);
router.delete('/postagens/:id/:url', ControllerArquivo.Deletar);

module.exports = router;