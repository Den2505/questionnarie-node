`use strict`;
const Sequelize = require(`sequelize`);

module.exports = function (sequelie) {
    const Questionnaire = sequelie.define('Questionnaire', {
            json: {
                type: Sequelize.STRING(1000),
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

