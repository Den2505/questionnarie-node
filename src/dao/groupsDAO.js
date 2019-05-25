const {Groups} = require('./models');

async function addGroup({id, name, speciality}) {
    return await Groups.create({
        id,
        name,
        speciality
    })

}

module.exports = {addGroup};