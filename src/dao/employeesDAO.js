const {Employees} = require('./models');

async function addEmployee({id,first_name, last_name, patronymic}) {
  return  await Employees.create({
        id,
        first_name,
        last_name,
        patronymic
    });
}


module.exports = {addEmployee};