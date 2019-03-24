module.exports = {
    up: ( queryInterface, Sequelize ) => {
        return queryInterface.changeColumn(
            "Incomes",
            "date",
            {
                type: Sequelize.STRING,
                allowNull: true
            }
        )
    },
    down: ( queryInterface, Sequelize ) => {
        return queryInterface.changeColumn(
            "Incomes",
            "date",
            {
                type: Sequelize.DATE,
                allowNull: true
            }
        )
    }
};