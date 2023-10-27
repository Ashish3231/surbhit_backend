const config = require('../../env.json') [process.env.NODE_ENV || 'local']


module.exports = {
    HOST: config.HOST,
    USER: config.USER,
    PASSWORD: config.PASSWORD,
    DB: config.DB,
    dialect: config.dialect,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
  