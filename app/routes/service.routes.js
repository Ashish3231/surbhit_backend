const controller = require('../controllers/service.controller')
const multer = require('multer');
// Set up Multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// const storage = multer.memoryStorage();
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'image/svg+xml') {
//     // Accept SVG files
//     cb(null, true);
//   } else {
//     // Reject other file types
//     cb(new Error('Only SVG files are allowed'), false);
//   }
// };
// const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept')
    next()
  })

  app.get('/service', controller.findAll)
  app.post('/service', upload.single('file'), controller.create)
  app.delete('/service/:id', controller.deleteServiceById)
}
