const {mongoose} = require("mongoose")

const userSchema = new mongoose.Schema({
      username:{type:String, required: true},
      email:{type: String, 
      required: true,
      unique: true
      },
      password:{
        type: String,
        required: true
      },
      phoneNumber:{
        type: String
      },
      role:{
        type: String,
        enum:["user", "vendor", "admin"],
        default: "user"
      } 
    
}) 


const Users = new mongoose.model("Users", userSchema)

module.exports = Users