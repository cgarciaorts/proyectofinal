const {Schema,model} = require("mongoose")


const deporteSchema = new Schema({

    Descripcion:String,    
    Imagen:String,
    Nombre:String

})



module.exports = model("deporte", deporteSchema)