"use strict";

module.exports = ( sequelize, DataTypes ) => {
    let Bill = sequelize.define( "Bill", {
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
            type: DataTypes.STRING,
            allowNull: true,
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
    });

    return Bill;
};