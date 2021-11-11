const multer  = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../uploads"))
    },
    filename: function (req, file, cb) {
        const uniquePreffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniquePreffix + "-" + file.originalname)
    }
  })

  const fileFilter =  (req, file, cb) => {

    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true)
    } else {
        cb(null, false)
    }
  }

const upload = multer({
    storage: storage,
    fileFilter:fileFilter,
    limits:{
        fileSize:1024 * 1024 * 5
    },
});

module.exports = upload;