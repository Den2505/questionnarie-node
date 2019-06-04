const {Answers} = require('./models');

async function addAnswer({json, questionnaire_id, discipline_id},t) {
   return await Answers.create({
        json,
        questionnaire_id,
        discipline_id
    }, {transaction: t})
}


module.exports = {addAnswer};