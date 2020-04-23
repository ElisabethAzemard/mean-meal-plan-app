// IMPORT
const mongoose = require('mongoose');
const { Schema } = mongoose; // ? what use

// DEFINE MODEL
const MongooseSchema = new Schema({
    barcode: Number, // id
    name: String,
    quantity: Number,
    category: String,
    storage: String,
    essential: Boolean, // if true, add to checklist
    toBuy: Boolean, // true (add to shopping list), false (add to inventory if 'quantity' > 0)
    urgent: Boolean, // true if 'toBuy' === true and 'quantity' === 0 OR 'toBuy' === true & 'essential' === true // if true, display red dot beside list item
});

// EXPORT
module.exports = mongoose.model('item', MongooseSchema);
