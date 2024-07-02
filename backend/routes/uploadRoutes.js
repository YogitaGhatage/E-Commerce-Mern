import path from 'path';
import express from 'express';
import multer from 'multer';
const router = express.Router();

//Describe where our image will go => Disk Storage
const storage  = multer.diskStorage({
    destination (req, file, cb) {//cb = Call Back
        cb(null, 'uploads/');//null is for error, and second where we want our image to go in uploads
    },
    filename (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);//extname : extended name of image (png, jpg, etc)
    }
});

function checkFileType(file, cb) {
    //Allowed extensions
    const filetypes = /jpeg|jpg|png/;
    //Check extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    //Check mime type
    const mimetype = filetypes.test(file.mimetype);
    if(extname && mimetype) {
        return cb(null, true);
    }else{
        cb('Images Only!');
    }
}

//Init upload
const upload = multer({
    storage,
});

router.post('/', upload.single('image'), (req, res) => {
    res.send({
        message: 'Image Uploaded',
        image: `/${req.file.path}`
    });
});

export default router;