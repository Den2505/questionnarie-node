const {Groups} = require('./models');

async function addGroup({id, name, speciality}, t) {
    return await Groups.findOrCreate({
        where: {id}, defaults: {
            name,
            speciality
        },
        transaction : t

    })

}

module.exports = {addGroup};