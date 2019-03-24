'use strict';

module.exports = {
  up: ( queryInterface, Sequelize ) => {
    return queryInterface.createTable( 'Bills', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      date: {
        allowNull: true,
        type: Sequelize.DATE
      },
      amount: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
    });
  },
  down: ( queryInterface, Sequelize ) => {
    return queryInterface.dropTable( 'Bills' );
  }
};