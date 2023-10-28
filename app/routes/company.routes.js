const controller = require('../controllers/company.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept')
    next()
  })

  app.post('/company', controller.upadte)
  app.get('/company/:id', controller.findOne)

}
