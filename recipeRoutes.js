const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
router.post('/',recipeController.createRecipe);
router.get('/',recipeController.getAllRecipes);

router.get('/',recipeController.getRecipeById);

router.put('/',recipeController.updateRecipe);

router.delete('/',recipeController.deleteRecipe);

module.exports= router;
m