const {Subjects} = require('./models');

async function addSubject({id, name}) {
   return await Subjects.create({id, name})
}

module.exports = {addSubject};