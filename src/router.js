const express = require('express')
const router = express.Router();
const multer = require('multer');

const fs = require('fs');
const pastaDeDados = './dados';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
      cb(null, 'dados/')
    },

    filename: (req, file, cb) => {
      cb(null, file.originalname + '')  
    } 

})  

const upload = multer({ storage })

router.get('/', (req, res) => {  
    res.sendFile(`${__dirname}/views/index.html`);
});
  
router.post('/', upload.single('img'), (req, res) => {
  console.log(req.file) 
  res.send('dd'); 
}); 
 
module.exports = router;