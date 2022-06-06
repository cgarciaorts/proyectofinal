const {Schema,model} = require("mongoose")


const tiendaSchema = new Schema({

    Nombre:String,
    Imagen:String,
    Descripcion:String
})



module.exports = model("tienda", tiendaSchema)