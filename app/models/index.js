const config = require('../config/db.config.js')

const Sequelize = require('sequelize')

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  port: config.DB_PORT
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./user.model.js')(sequelize, Sequelize)
db.testimonial = require('./testimonial.model.js')(sequelize, Sequelize)
db.company = require('./company.model.js')(sequelize, Sequelize)

module.exports = db
