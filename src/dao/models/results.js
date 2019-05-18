`use strict`;
const Sequelize = require(`sequelize`);

module.exports = function (sequelize) {
    const Results = sequelize.define('Results', {
            name: {
                type: Sequelize.STRING
            },
            json: {
                type: Sequelize.STRING(500),
                allowNull: false
            },
            discipline_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'disciplines',
                    key: 'id'
                }
            }
        },
        {
            underscored: true,
            tableName: 'results',
            freezeTableName: true,
            timestamps: true
        });

    Results.associate = function (models) {
        Results.belongsTo(models.Disciplines, {foreignKey: 'discipline_id'});
    };

    return Results;
};

