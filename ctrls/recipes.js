
const recipes = require("../model/recipeModel")
const Users = require("../model/usersModel")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")





const creatRecipe = async( req, res)=>{

  const { email} = req.body
const user = Users.findOne({email})
  if(!user){
    return res.status(400).json({message:"Please login to continue"})
  }else{
    await user
  }
  const Recipe = new recipes(req.body)
  await Recipe.save()
  return res.status(200).json({
    message: "Recipe Created Successfully"
  })
}


const getRecipes = async(req, res)=>{
  
  const allRecipes =  await recipes.find({})

  return res.status(200).json({message: "All Recipes",
    count: allRecipes.length,
    allRecipes
})
}

const  oneRecipe = async(req, res)=>{

  const { _id } = req.params
  const recipe = await recipes.findOne({_id})
  return res.status(200).json({message: 'Your Recipe', recipe})
  
 
}

const updatingRecipes = async (req, res) => {

  const { email} = req.body
  const user = Users.findOne({email})
    if(!user){
      return res.status(400).json({message:"Please login to continue"})
    }else{
      await user
    }


  const { id } = req.params

  const { title, ingredients, instructions, categories, favorites } = req.body
  const updateRecipe = await recipes.findByIdAndUpdate(
    id,
    {title, ingredients, instructions, categories, favorites },
   { new: true })
  return res.status(200).json({message: "Recipe Modified!", 
    recipe: updateRecipe
  })
}

const deleteRecipe = async(req, res)=>{

  const { id } = req.params

  const deletedrecipe = await recipes.findByIdAndDelete(id)

  return res.status(200).json({
      message: "Deleted Successfully",
  })
}

// Functions for adding tags

const addTags = async(req, res)=>{
  const { id } = req.params
  const recipeTags = await recipes.findById(id)
  recipeTags.tags.push("") = req.body.tags
  await recipeTags.save()

  return res.status(200).json({message: 'Tags added successfully!', recipeTags})
}


module.exports = {
  creatRecipe,
  getRecipes,
  oneRecipe,
  updatingRecipes,
  deleteRecipe, 
  addTags

}