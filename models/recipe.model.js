// IMPORT
const mongoose = require('mongoose');
const { Schema } = mongoose;

// DEFINE MODEL
const MongooseSchema = new Schema({
    name: String,
    ingredients: [String],
    steps: [String],
    notes: [String],
    timing: Number, // preparation timing in minutes
    tags: [String],
    new: Boolean, // already tested?
    starchy: Boolean, // suitable for dinner?
    planned: Boolean, // has the recipe been picked for the week's meal plan?
    author: [String],
});

// EXPORT
module.exports = mongoose.model('recipe', MongooseSchema, 'recipe');
