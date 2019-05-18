`use strict`;
const Sequelize = require(`sequelize`);

module.exports = function (sequelize) {
    const Subjects = sequelize.define('Subjects', {
            name: {
                type: Sequelize.STRING,
                allowNull: false
            }
        },
        {
            underscored: true,
            tableName: 'subjects',
            freezeTableName: true,
            timestamps: true
        })

    Subjects.associate = function (models) {
        Subjects.hasMany(models.Disciplines);
    }

    return Subjects;
}