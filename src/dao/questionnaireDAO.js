const {Questionnaire} = require('./models');

async function getAvailableQuestionnaire() {
  return  await Questionnaire.findOne({
      attributes:['json'],
        where: {
            available: true
        }
    })
}

module.exports = {getAvailableQuestionnaire}