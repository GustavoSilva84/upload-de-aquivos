const fs = require('fs');
const multer = require('multer');

if(!fs.existsSync('./dados')) fs.mkdirSync('./dados');

module.exports = (multer({

    storage: multer.diskStorage({

        destination: (req, file, cb) => {
            cb(null, 'dados/')
        },
    
        filename: (req, file, cb) => {
            cb(null, file.originalname.toString())   
        } 

    }),

    fileFilter: (req, file, cb) => {
        
        const isAccepted = ['image/png', 'image/jpg', 'image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype);

        if(isAccepted){
            return cb(null, true);
        }
        
        return cb(null, false);

    }

}))





// const upload = multer({ storage });

// module.exports = upload