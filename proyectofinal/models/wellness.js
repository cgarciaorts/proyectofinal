const {Schema,model} = require("mongoose")


const wellnessSchema = new Schema({
    
    Altura: Number,
    Peso: Number,
    Edad: Number,
    Fecha: Date,
    Horas: Number,
    Calidad: Number,
    Cansancio: Number,
    Estres: Number,
    Ejercicio: Number,
    Fecha: String
})


module.exports = model("wellness", wellnessSchema)
