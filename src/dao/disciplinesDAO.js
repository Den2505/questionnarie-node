const {Disciplines} = require('./models');

async function addDescipline({employee_id, subject_id}, t) {
    return await Disciplines.findOrCreate({where: {employee_id, subject_id}, transaction: t})
}

module.exports = {addDescipline}