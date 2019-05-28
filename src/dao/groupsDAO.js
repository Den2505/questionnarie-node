const {Groups} = require('./models');

async function addGroup({id, name, speciality}, t) {
    /*return await Groups.create({
        id,
        name,
        speciality
    })*/
    return await Groups.findOrCreate({
        where: {id}, defaults: {
            name,
            speciality
        },
        transaction : t

    })

}

module.exports = {addGroup};