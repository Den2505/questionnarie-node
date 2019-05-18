`use strict`;
const Sequelize = require(`sequelize`);

module.exports = function (sequelize) {
    const Students = sequelize.define('Students', {
            group_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'groups',
                    key: 'id'
                }
            },
            first_name: {
                type: Sequelize.STRING(50)
            },
            last_name: {
                type: Sequelize.STRING(50)
            }
        },
        {
            underscored: true,
            tableName: 'students',
            freezeTableName: true,
            timestamps: true
        });

    Students.associate = function (models) {
    Students.belongsTo(models.Groups, {foreignKey: 'group_id'})
    };

    return Students;
};

