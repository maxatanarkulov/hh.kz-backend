const Specialization = require('./models/Specialization')
const SpecializationType = require('./models/SpecializationsType')


const getSpecializations = async(req, res) =>{
    const specializationsTypes = await SpecializationType.findAll({
        include: {
            model: Specialization,
            as: "specializations"
        }
    })
    res.status(200).send(SpecializationTypes)
}

module.exports = {
    getSpecializations
}