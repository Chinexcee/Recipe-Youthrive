const express = require("express")
const {creatRecipe, getRecipes, oneRecipe, updatingRecipes, deleteRecipe, addTags} = require("../ctrls/recipes")






const router = express.Router()


router.post("/load_recipes",  creatRecipe)
router.get("/recipes", getRecipes)
router.get("/single_recipe/:_id", oneRecipe)
router.put('/modify/:id', updatingRecipes)
router.delete('/del_recipe/:id', deleteRecipe)
router.post('/add_tags/:id', addTags)




module.exports = router