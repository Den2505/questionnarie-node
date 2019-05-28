const {Employees} = require('./models');

async function addEmployee({id, first_name, last_name, patronymic}, t) {
    return await Employees.findOrCreate({
        where: {id}, defaults: {
            first_name,
            last_name,
            patronymic
        },
        transaction: t
    })
}


module.exports = {addEmployee};