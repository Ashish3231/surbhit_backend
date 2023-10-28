const config = require('../../env.json') [process.env.enviroment || 'local']

console.log("database host: ", config.HOST)
console.log("database user: ", config.USER,)
console.log("database port: ", config.DB_PORT,)
module.exports = {
    HOST: config.HOST,
    USER: config.USER,
    PASSWORD: config.PASSWORD,
    DB: config.DB,
    dialect: config.dialect,
    DB_PORT: config.DB_PORT, 
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
  