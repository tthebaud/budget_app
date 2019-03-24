'use strict';

module.exports = ( sequelize, DataTypes ) => {
    let Income = sequelize.define( 'Income', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,

            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
    });

    return Income;
};