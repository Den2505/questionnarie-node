const {Students} = require('./models');

async function addStudent({id, first_name, last_name, group_id},t) {
    /*return await Students.create({
        id,
        first_name,
        last_name,
        group_id
    })*/
    return await Students.findOrCreate({
        where: {
            id
        },
        defaults: {
            first_name,
            last_name,
            group_id
        },
        transaction: t
    })
}


module.exports = {addStudent}