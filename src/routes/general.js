`use strict`;
const questionnaireDAO = require('../dao/questionnaireDAO');
const {sequelize} = require('../dao/models');
const groupsDAO = require('../dao/groupsDAO');
const studentsDAO = require('../dao/studentDAO');
const employeesDAO = require('../dao/employeesDAO');
const subjectsDAO = require('../dao/subjectsDAO');
const answersDAO = require('../dao/answersDAO');
const disciplinesDAO = require('../dao/disciplinesDAO');

const generalRouter = {

    getQuestionnaire: async (ctx) => {
        const questionnaire = await questionnaireDAO.getAvailableQuestionnaire();
        if (questionnaire === null) {
            ctx.throw(404, 'Questionnaire not available')
        }
        ctx.body = {questionnaire}
    },

    addAnswer: async (ctx) => {
        const {
            student, group, employee, subject, features,
            answerJSON, questionnaire_id
        } = ctx.request.body;

        await groupsDAO.addGroup(group);
        await studentsDAO.addStudent(student);
        const {id: employee_id} = await employeesDAO.addEmployee(employee);
        const {id: subject_id} = await subjectsDAO.addSubject(subject);
        const {id: discipline_id} = await disciplinesDAO.addDescipline({employee_id, subject_id});
        const answer = {json: answerJSON, questionnaire_id, discipline_id};
        await answersDAO.addAnswer(answer);
    }

};

module.exports = generalRouter;