const {Disciplines} = require('./models');

async function addDescipline({employee_id, subject_id}) {
   return await Disciplines.create({employee_id, subject_id})
}

module.exports = {addDescipline}