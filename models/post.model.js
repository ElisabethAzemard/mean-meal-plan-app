/* IMPORTS */
const mongoose = require('mongoose');
const { Schema } = mongoose;

/* DEFINITION */
const MySchema = new Schema({
    // schema.org
    '@context': { type: String, default: 'http://schema.org' },
    '@type': { type: [ String ], default: ['Article'] },

    title: String,
    content: String
});

/* SET INDEX FOR SEARCH */
MySchema.index({
    title: 'text',
    content: 'text'
})

/* EXPORT */
module.exports = mongoose.model( 'post', MySchema );
