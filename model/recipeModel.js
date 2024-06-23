const {mongoose} = require("mongoose")

const recipeSchema = new mongoose.Schema({
      title:{type:String, required: true},
     ingredients:[{type: String, 
      required: true
      
      }],
      instructions:{
        type: String,
        required: true
      },
      author:{
        type: String,
        required: true
      },
      categories:{
        type: String},
        tags:[String],
      
    
    
}, {timestamps: true}) 


const recipes = new mongoose.model("recipes", recipeSchema)

module.exports = recipes