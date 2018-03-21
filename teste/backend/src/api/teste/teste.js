const restful = require('node-restful')
const mongoose = restful.mongoose

const consumoSchema = new mongoose.Schema({
    value: { type: Number, min: 0, required: [true, 'Informe o value!'] }
})

const testeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min: 1, max: 12, required: true },
    year: { type: Number, min: 1970, max: 2100, required: true },
    consumo: [consumoSchema]
})

module.exports = restful.model('teste', testeSchema)