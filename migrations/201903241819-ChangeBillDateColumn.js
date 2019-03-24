module.exports = {
    up: ( queryInterface, Sequelize ) => {
        return queryInterface.changeColumn(
            "Bills",
            "date",
            {
                type: Sequelize.STRING,
                allowNull: true
            }
        )
    },
    down: ( queryInterface, Sequelize ) => {
        return queryInterface.changeColumn(
            "Bills",
            "date",
            {
                type: Sequelize.DATE,
                allowNull: true
            }
        )
    }
};