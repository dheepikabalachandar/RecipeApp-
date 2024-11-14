const mongoose =  require('mongoose');
const recipeSchema = new mongoose.Schema({
    name:{type :String,require:true},
    ingredients:{type:[String],require:true},
    instructions:{type:String,require:true},
    createdAt:{type:Date,default:Date.now}
});
module.exports= mongoose('Recipe',recipeSchema);