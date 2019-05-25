const {Answers} = require('./models');

async function addAnswer({json, questionnaire_id, discipline_id}) {
    await Answers.create({
        json,
        questionnaire_id,
        discipline_id
    })
}


module.exports = {addAnswer};