const recipe = require("../models/recipe");

const Recipe =  require ('../models/recipe');
//create a new recipe 
exports.createRecipe= async (req,res)=>{
    try{
        const recipe = new Recipe(req.body);
        const savedRecipe= await recipe.save();
        res.status (201).json (savedRecipe);
    }catch (error){
        res.status (400).json ({message:error.message});
    }

};

// get all recipes
exports.getAllRecipes= async (req,res)=>{
    try{
        const recipes = await Recipe.find();
        res.json(recipes);
    }catch (error){
        res.status (500).json ({message:error.message});
    }

};

// get a recipe by Id 
exports.getRecipeById= async (req,res)=>{
    try{
        const recipe = await Recipe.findById(req.params.id);
        if(!recipe) return res.status (404).json ({ message:'Recipe not found'});
        res.json(recipe);
     }catch (error){
        res.status (500).json ({message:error.message});
    }

};

// update a recipe 
exports.updateRecipe = async (req,res)=>{
    try{
        const updateRecipe = await Recipe.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updatedRecipe) return res.status (404).json ({ message:'Recipe not found'});
        res.json(updateRecipe);
     }catch (error){
        res.status (400).json ({message:error.message});
    }
};

// delete a recipe 

exports.deleteRecipe= async (req,res)=>{
    try{
        const deleteRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if(!deleteRecipe) return res.status (404).json ({ message:'Recipe not found'});
        res.json({message:'Recipe deleted'});
     }catch (error){
        res.status (500).json ({message:error.message});
    }

};


