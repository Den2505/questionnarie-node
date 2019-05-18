`use strict`;
const Sequelize = require(`sequelize`);

module.exports = function (sequelize) {
    const Answers = sequelize.define('Answers', {
            json: {
                type: Sequelize.STRING(500),
                allowNull: false
            },
            questionnaire_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'questionnaire',
                    key: 'id'
                },
                discipline_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'discipline',
                        key: 'id'
                    }
                }

            }
        },
        {
            underscored: true,
            tableName: 'answers',
            freezeTableName: true,
            timestamps: true
        });

    Answers.associate = function (models) {
        Answers.belongsTo(models.Disciplines, {foreignKey: 'discipline_id'});
        Answers.belongsTo(models.Questionnaire, {foreignKey: 'questionnaire_id'});
    };

    return Answers;
};

