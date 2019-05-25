const {Students} = require('./models');

async function addStudent({id, first_name, last_name, group_id}) {
    return await Students.create({
        id,
        first_name,
        last_name,
        group_id
    })
}


module.exports = {addStudent}