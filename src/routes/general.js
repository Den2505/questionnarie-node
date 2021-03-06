`use strict`;
const questionnaireDAO = require('../dao/questionnaireDAO');
const {sequelize} = require('../dao/models');
const groupsDAO = require('../dao/groupsDAO');
const studentsDAO = require('../dao/studentDAO');
const employeesDAO = require('../dao/employeesDAO');
const subjectsDAO = require('../dao/subjectsDAO');
const answersDAO = require('../dao/answersDAO');
const disciplinesDAO = require('../dao/disciplinesDAO');
const expireDAO = require('../dao/expireDAO');

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
            student, group, employee, subject, //features,
            answerJSON, questionnaire_id
        } = ctx.request.body;
        return await sequelize.transaction(async t => {
                const {id: group_id} = (await groupsDAO.addGroup(group, t))[0];
                const {id: student_id} = (await studentsDAO.addStudent(Object.assign({}, student, {group_id}), t))[0];
                const {id: employee_id} = (await employeesDAO.addEmployee(employee, t))[0];
                const {id: subject_id} = (await subjectsDAO.addSubject(subject, t))[0];
                const {id: discipline_id} = (await disciplinesDAO.addDescipline({employee_id, subject_id}, t))[0];
                const answer = {json: answerJSON, questionnaire_id, discipline_id};
                await answersDAO.addAnswer(answer, t);
                await expireDAO.addExpire({student_id, discipline_id}, t);
            }
        )
            .then(() => {
                ctx.status = 200
            })
            .catch(() => {
                ctx.status = 400;
                ctx.body = "Вы уже голосовали за эту дисциплину";
            })

    }

};

module.exports = generalRouter;