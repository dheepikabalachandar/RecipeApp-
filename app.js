require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('bodyParser');
const recipeRouter = require('./routes/recipeRoutes');
const app = express();
const PORT = process.env.PORT || 3000;
app.use (bodyParser.json());
app.use('/api/recipes',recipeRoutes)

mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then (()=>console.log('Connected to Momgodb'))
.catch(err => console.log('failed, to Momgodb',err));
app.listen (PORT,() =>{
    console.log('Server running on port ${PORT}');
});