module.exports = (sequelize, Sequelize) => {
    const service = sequelize.define('service', {
      id: {
        type: Sequelize.BIGINT, // ID (Primary Key)
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      logo: {
        type: Sequelize.BLOB('long'),
        // type: Sequelize.TEXT,
        allowNull: false,
      },
    })
  
    return service
  }
  