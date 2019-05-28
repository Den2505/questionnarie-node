const {Subjects} = require('./models');

async function addSubject({id, name},t) {
   return await Subjects.findOrCreate({where:{id, name}, transaction: t})
}

module.exports = {addSubject};