`use strict`;
const Sequelize = require(`sequelize`);

module.exports = function (sequelize) {
    const Employees = sequelize.define('Employees', {
            first_name: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            last_name: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            patronymic: {
                type: Sequelize.STRING(50),
                allowNull: false,
            }
        },
        {
            underscored: true,
            tableName: 'employees',
            freezeTableName: true,
            timestamps: true
        }
    );

    Employees.assosiate = function (models) {
        Employees.hasMany(models.Disciplines);
    };

    return Employees;
};

