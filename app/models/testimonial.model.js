module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('testimonial', {
      id: {
        type: Sequelize.BIGINT, // ID (Primary Key)
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      desg: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  
    return User
  }
  