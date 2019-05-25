`use strict`;
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const {db}  = require('../../configs/dbConfig')[env];

const sequelize = new Sequelize(db.name, db.username, db.password, {
    host: db.host,
    port: db.port,
    dialect: db.dialect,
});


const Employees = require('./employees')(sequelize);
const Disciplines = require('./disciplines')(sequelize);
const Results = require('./results')(sequelize);
const Answers = require('./answers')(sequelize);
const Expire = require('./studentHasDiscipline')(sequelize);
const Questionnaire = require('./questionnaire')(sequelize);
const Groups = require('./groups')(sequelize);
const Students = require('./students')(sequelize);
const Subjects = require('./subjects')(sequelize);

const models = {
    [Employees.name]: Employees,
    [Disciplines.name]: Disciplines,
    [Results.name]: Results,
    [Answers.name]: Answers,
    [Expire.name]: Expire,
    [Questionnaire.name]: Questionnaire,
    [Groups.name]: Groups,
    [Students.name]: Students,
    [Subjects.name]: Subjects,

};

Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

const sequelizePromise =  sequelize.sync(/*{force: true}*/) ;

module.exports = {
    sequelize,
    sequelizePromise,
    Employees,
    Disciplines,
    Results,
    Answers,
    Expire,
    Questionnaire,
    Groups,
    Students,
    Subjects
};