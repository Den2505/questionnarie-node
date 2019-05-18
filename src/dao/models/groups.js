`use strict`;
const Sequelize = require(`sequelize`);

module.exports = function (sequelize) {
    const Groups = sequelize.define('Groups', {
            name: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            speciality: {
                type: Sequelize.STRING(50)
            }
        },
        {
            underscored: true,
            tableName: 'groups',
            freezeTableName: true,
            timestamps: true
        });

    Groups.associate = function (models) {
     Groups.hasMany(models.Students);
    };

    return Groups;
};

