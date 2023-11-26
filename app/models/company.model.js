module.exports = (sequelize, Sequelize) => {
    const company = sequelize.define('company', {
      id: {
        type: Sequelize.BIGINT, // ID (Primary Key)
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      company: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone1: {
        type: Sequelize.STRING
      },
      phone2: {
        type: Sequelize.STRING
      },
      add1: {
        type: Sequelize.STRING
      },
      add2: {
        type: Sequelize.STRING
      },
      add3: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.TEXT
      },
      content: {
        type: Sequelize.TEXT
      },
      about: {
        type: Sequelize.TEXT
      }
    })
  
    return company
  }
  