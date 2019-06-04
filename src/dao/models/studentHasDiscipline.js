`use strict`;
const Sequelize = require(`sequelize`);

module.exports = function (sequelize) {
    const Expire = sequelize.define('Expire', {
            student_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'students',
                    key: 'id'
                },
                //primaryKey: true,
                allowNull: false,
                unique: 'pair_id_index'
            },
            discipline_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'disciplines',
                    key: 'id'
                },
               // primaryKey: true,
                unique: 'pair_id_index'

            },
            expire: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
                allowNull: false
            }
        },
        {
            underscored: true,
            tableName: 'students_have_disciplines',
            freezeTableName: true,
            timestamps: false
        }
    )

    Expire.associate = function (models) {
        Expire.belongsTo(models.Disciplines, {foreignKey: 'discipline_id'});
        Expire.belongsTo(models.Students, {foreignKey: 'student_id'});
    };
    return Expire;
};