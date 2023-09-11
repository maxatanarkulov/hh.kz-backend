const Country = require('./Country')
const City = require('./City')

const getCountries = async (req, res)=> {
    const countries = await Country.findAll()
    res.status(200).send(countries)
    

}
const getCities = async (req, res) => {
    const cities = await City.findAll()
     res.status(200).send(cities)
}

module.exports = {
    getCountries,
    getCities
}