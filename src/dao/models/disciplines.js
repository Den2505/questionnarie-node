`use strict`;
const Sequelize = require(`sequelize`);

module.exports = function (sequelize) {
    const Disciplines = sequelize.define('Disciplines', {
            employee_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'employees',
                    key: 'id'
                }
            },
            subject_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'subjects',
                    key: 'id'
                }

            }

        }, {
            underscored: true,
            tableName: 'disciplines',
            freezeTableName: true,
            timestamps: true
        }
    );

    Disciplines.associate = function (models) {
        Disciplines.hasMany(models.Results);
        Disciplines.hasMany(models.Answers);
        Disciplines.belongsTo(models.Employees, {foreignKey: 'employee_id'});
        Disciplines.belongsTo(models.Subjects, {foreignKey: 'subject_id'});
        Disciplines.hasMany(models.Expire);
    };

    return Disciplines;
};

