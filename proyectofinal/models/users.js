const {Schema,model} = require("mongoose")

const userSchema = new Schema({

    username:{type:String, unique:true, lowercase:true},
    password:String,
    email:String,
    fullname:String
})

module.exports = model("users", userSchema)