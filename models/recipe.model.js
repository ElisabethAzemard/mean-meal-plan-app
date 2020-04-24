// IMPORT
const mongoose = require('mongoose');
const { Schema } = mongoose;

// DEFINE MODEL
const MongooseSchema = new Schema({
    name: String,
    ingredients: [Schema.Types.ObjectId],
    steps: [String],
    notes: [Schema.Types.ObjectId],
    timing: Number, // preparation timing in minutes
    tags: [String],
    new: Boolean, // already tested?
    starchy: Boolean, // suitable for dinner?
    planned: Boolean, // has the recipe been picked for the week's meal plan?
    author: [Schema.Types.ObjectId],
});

// EXPORT
module.exports = mongoose.model('recipe', MongooseSchema);
