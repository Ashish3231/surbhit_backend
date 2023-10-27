const controller = require('../controllers/testimonial.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept')
    next()
  })

  app.get('/testimonial', controller.findAll)
  app.post('/testimonial', controller.create)
  app.delete('/testimonial/:id', controller.deleteTestimonialById)
}
