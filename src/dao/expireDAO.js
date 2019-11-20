const {Expire} = require('./models');

async function addExpire({student_id, discipline_id},t) {
   return await Expire.create({student_id, discipline_id},{transaction: t})
    //   .catch((e)=> console.log(e.message)) //Validation error
    //return await Disciplines.findOrCreate({where: {employee_id, subject_id}, transaction: t})

}

module.exports = {addExpire};