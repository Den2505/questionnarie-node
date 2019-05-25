`use strict`;
const Sequelize = require(`sequelize`);

module.exports = function (sequelie) {
    const Questionnaire = sequelie.define('Questionnaire', {
            json: {
                type: Sequelize.JSON,
                allowNull: false
            },
            available: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            }
        },
        {
            underscored: true,
            tableName: 'questionnaire',
            freezeTableName: true,
            timestamps: true
        });

    Questionnaire.associate = function (models) {
        Questionnaire.hasMany(models.Answers);
    };

    return Questionnaire;
};

